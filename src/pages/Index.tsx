
import { useState } from 'react';
import TestDashboard from '@/components/TestDashboard';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search, TestTube2, TrendingUp, Activity } from 'lucide-react';

const Index = () => {
  const [runId, setRunId] = useState('');
  const [submittedRunId, setSubmittedRunId] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (runId.trim()) {
      setSubmittedRunId(runId.trim());
    }
  };

  const handleReset = () => {
    setSubmittedRunId('');
    setRunId('');
  };

  // Show dashboard if we have a submitted run ID
  if (submittedRunId) {
    return (
      <div className="relative">
        {/* Reset Button */}
        <div className="absolute top-6 right-6 z-20">
          <Button 
            variant="outline" 
            onClick={handleReset}
            className="bg-white/80 backdrop-blur-sm hover:bg-white"
          >
            New Search
          </Button>
        </div>
        <TestDashboard runId={submittedRunId} />
      </div>
    );
  }

  // Landing page with run ID input
  return (
    <div className="min-h-screen bg-white relative overflow-hidden flex items-center justify-center">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-32 right-20 w-96 h-96 bg-gradient-to-br from-blue-50 to-purple-50 rounded-full blur-3xl opacity-60" />
        <div className="absolute bottom-40 left-16 w-80 h-80 bg-gradient-to-br from-emerald-50 to-teal-50 rounded-full blur-3xl opacity-40" />
        <div className="absolute top-1/3 left-1/3 w-72 h-72 bg-gradient-to-br from-orange-50 to-pink-50 rounded-full blur-3xl opacity-30" />
      </div>

      <div className="relative z-10 w-full max-w-2xl mx-auto px-8 text-center">
        {/* Header */}
        <div className="mb-12">
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl flex items-center justify-center shadow-lg">
              <TestTube2 className="w-8 h-8 text-white" />
            </div>
          </div>
          
          <h1 className="text-6xl font-black text-slate-900 leading-tight mb-4">
            Test
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Analytics</span>
          </h1>
          
          <p className="text-xl text-slate-600 max-w-lg mx-auto leading-relaxed">
            Enter a GitHub Actions run ID to view detailed test results and analytics
          </p>
        </div>

        {/* Input Form */}
        <form onSubmit={handleSubmit} className="mb-8">
          <div className="flex gap-3 max-w-md mx-auto">
            <div className="flex-1 relative">
              <Input
                type="text"
                placeholder="Enter run ID (e.g., 1234567890)"
                value={runId}
                onChange={(e) => setRunId(e.target.value)}
                className="pl-10 h-12 text-lg border-slate-200 focus:border-blue-500 focus:ring-blue-500"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
            </div>
            <Button 
              type="submit" 
              className="h-12 px-8 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
              disabled={!runId.trim()}
            >
              Analyze
            </Button>
          </div>
        </form>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <div className="p-6">
            <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mx-auto mb-4">
              <TrendingUp className="w-6 h-6 text-emerald-600" />
            </div>
            <h3 className="font-semibold text-slate-900 mb-2">Performance Insights</h3>
            <p className="text-sm text-slate-600">Real-time test metrics and success rates</p>
          </div>
          
          <div className="p-6">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Activity className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="font-semibold text-slate-900 mb-2">Detailed Breakdown</h3>
            <p className="text-sm text-slate-600">Category-wise test results and analysis</p>
          </div>
          
          <div className="p-6">
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
              <TestTube2 className="w-6 h-6 text-purple-600" />
            </div>
            <h3 className="font-semibold text-slate-900 mb-2">Test Case Details</h3>
            <p className="text-sm text-slate-600">Individual test information and error logs</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;

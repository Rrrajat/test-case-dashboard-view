
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
    <div className="min-h-screen bg-white flex items-center justify-center">
      <div className="w-full max-w-2xl mx-auto px-8 text-center">
        {/* Header */}
        <div className="mb-12">
          <div className="flex justify-center mb-8">
            <TestTube2 className="w-12 h-12 text-blue-600" />
          </div>
          
          <h1 className="text-6xl font-black text-slate-900 leading-tight mb-4">
            Test
            <br />
            <span className="text-blue-600">Analytics</span>
          </h1>
          
          <p className="text-xl text-slate-600 max-w-lg mx-auto leading-relaxed">
            Enter a GitHub Actions run ID to view detailed test results and analytics
          </p>
        </div>

        {/* Input Form */}
        <form onSubmit={handleSubmit} className="mb-12">
          <div className="flex gap-3 max-w-md mx-auto">
            <div className="flex-1 relative">
              <Input
                type="text"
                placeholder="Enter run ID (e.g., 1234567890)"
                value={runId}
                onChange={(e) => setRunId(e.target.value)}
                className="pl-10 h-12 text-lg border-slate-200 focus:border-blue-500 focus:ring-blue-500 rounded-lg"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
            </div>
            <Button 
              type="submit" 
              className="h-12 px-8 bg-blue-600 hover:bg-blue-700 rounded-lg"
              disabled={!runId.trim()}
            >
              Analyze
            </Button>
          </div>
        </form>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="p-4">
            <TrendingUp className="w-8 h-8 text-emerald-600 mx-auto mb-4" />
            <h3 className="font-semibold text-slate-900 mb-2">Performance Insights</h3>
            <p className="text-sm text-slate-600">Real-time test metrics and success rates</p>
          </div>
          
          <div className="p-4">
            <Activity className="w-8 h-8 text-blue-600 mx-auto mb-4" />
            <h3 className="font-semibold text-slate-900 mb-2">Detailed Breakdown</h3>
            <p className="text-sm text-slate-600">Category-wise test results and analysis</p>
          </div>
          
          <div className="p-4">
            <TestTube2 className="w-8 h-8 text-purple-600 mx-auto mb-4" />
            <h3 className="font-semibold text-slate-900 mb-2">Test Case Details</h3>
            <p className="text-sm text-slate-600">Individual test information and error logs</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;

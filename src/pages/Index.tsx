
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
    <div className="min-h-screen bg-slate-50 flex items-center justify-center py-12">
      <div className="w-full max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Column - Input Card */}
          <div className="flex flex-col items-center lg:items-start">
            <div className="w-full max-w-md">
              {/* Logo */}
              <div className="flex justify-center lg:justify-start mb-8">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center">
                  <TestTube2 className="w-8 h-8 text-white" />
                </div>
              </div>
              
              {/* Title */}
              <div className="text-center lg:text-left mb-8">
                <h1 className="text-4xl font-bold text-slate-900 mb-2">
                  Test Analytics
                </h1>
                <p className="text-slate-600">
                  Analyze your GitHub Actions test results
                </p>
              </div>

              {/* Input Card */}
              <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm">
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="relative">
                    <Input
                      type="text"
                      placeholder="Enter GitHub Actions run ID"
                      value={runId}
                      onChange={(e) => setRunId(e.target.value)}
                      className="pl-10 h-12 border-slate-200 focus:border-blue-500 focus:ring-blue-500/20 rounded-xl"
                    />
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
                  </div>
                  <Button 
                    type="submit" 
                    className="w-full h-12 bg-blue-600 hover:bg-blue-700 rounded-xl font-medium"
                    disabled={!runId.trim()}
                  >
                    Analyze Results
                  </Button>
                </form>
              </div>
            </div>
          </div>

          {/* Right Column - Features */}
          <div className="space-y-8">
            <div className="text-center lg:text-left mb-8">
              <h2 className="text-2xl font-semibold text-slate-900 mb-3">
                Powerful Test Analytics
              </h2>
              <p className="text-slate-600">
                Get comprehensive insights into your test performance with detailed breakdowns and real-time metrics.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <TrendingUp className="w-6 h-6 text-emerald-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 mb-1">Performance Insights</h3>
                  <p className="text-slate-600 text-sm">Real-time test metrics, success rates, and performance trends across your CI/CD pipeline.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Activity className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 mb-1">Detailed Breakdown</h3>
                  <p className="text-slate-600 text-sm">Category-wise test results with comprehensive analysis and failure patterns.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <TestTube2 className="w-6 h-6 text-purple-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 mb-1">Test Case Details</h3>
                  <p className="text-slate-600 text-sm">Individual test information with error logs and execution details for debugging.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;

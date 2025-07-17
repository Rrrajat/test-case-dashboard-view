
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
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      <div className="w-full max-w-7xl mx-auto px-6 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-screen">
          
          {/* Left Column - Features & Preview */}
          <div className="space-y-8">
            {/* Header */}
            <div className="text-center lg:text-left">
              <div className="flex justify-center lg:justify-start mb-4">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                  <TestTube2 className="w-6 h-6 text-white" />
                </div>
              </div>
              <h1 className="text-4xl font-bold text-slate-900 mb-3">
                Test Analytics
              </h1>
              <p className="text-lg text-slate-600 leading-relaxed">
                Transform your GitHub Actions test data into actionable insights with comprehensive analytics and real-time monitoring.
              </p>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-1 gap-4">
              <div className="flex items-start gap-3 p-4 bg-glass-subtle backdrop-blur-glass border border-glass rounded-xl shadow-glass">
                <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <TrendingUp className="w-5 h-5 text-emerald-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 mb-1">Performance Insights</h3>
                  <p className="text-sm text-slate-600">Real-time test metrics, success rates, and performance trends across your CI/CD pipeline.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3 p-4 bg-glass-subtle backdrop-blur-glass border border-glass rounded-xl shadow-glass">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Activity className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 mb-1">Detailed Breakdown</h3>
                  <p className="text-sm text-slate-600">Category-wise test results with comprehensive analysis and failure patterns.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3 p-4 bg-glass-subtle backdrop-blur-glass border border-glass rounded-xl shadow-glass">
                <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <TestTube2 className="w-5 h-5 text-purple-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 mb-1">Test Case Details</h3>
                  <p className="text-sm text-slate-600">Individual test information with error logs and debugging information.</p>
                </div>
              </div>
            </div>

            {/* Preview Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Stats Preview */}
              <div className="bg-glass-medium backdrop-blur-glass border border-glass rounded-xl p-5 shadow-glass">
                <h3 className="text-sm font-semibold text-slate-900 mb-4">What You'll See</h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-slate-600">Success Rate</span>
                    <span className="text-lg font-bold text-emerald-600">98.5%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-slate-600">Total Tests</span>
                    <span className="text-lg font-bold text-blue-600">247</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-slate-600">Avg Duration</span>
                    <span className="text-lg font-bold text-purple-600">2.4s</span>
                  </div>
                </div>
              </div>

              {/* Visual Indicators */}
              <div className="bg-glass-medium backdrop-blur-glass border border-glass rounded-xl p-5 shadow-glass">
                <h4 className="text-sm font-semibold text-slate-900 mb-4">Test Categories</h4>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-slate-600">Unit Tests</span>
                    <div className="flex items-center gap-2">
                      <div className="w-16 h-1.5 bg-slate-100 rounded-full overflow-hidden">
                        <div className="w-[92%] h-full bg-emerald-500 rounded-full"></div>
                      </div>
                      <span className="text-xs font-medium text-slate-900">92%</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-slate-600">Integration</span>
                    <div className="flex items-center gap-2">
                      <div className="w-16 h-1.5 bg-slate-100 rounded-full overflow-hidden">
                        <div className="w-[88%] h-full bg-blue-500 rounded-full"></div>
                      </div>
                      <span className="text-xs font-medium text-slate-900">88%</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-slate-600">E2E Tests</span>
                    <div className="flex items-center gap-2">
                      <div className="w-16 h-1.5 bg-slate-100 rounded-full overflow-hidden">
                        <div className="w-[76%] h-full bg-purple-500 rounded-full"></div>
                      </div>
                      <span className="text-xs font-medium text-slate-900">76%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Input Card */}
          <div className="flex flex-col justify-center items-center lg:items-end">
            <div className="w-full max-w-md lg:max-w-lg">
              {/* Input Card */}
              <div className="bg-glass-strong backdrop-blur-glass border border-glass rounded-2xl p-8 shadow-glass mb-6">
                <div className="text-center mb-6">
                  <h2 className="text-xl font-semibold text-slate-900 mb-2">
                    Get Started
                  </h2>
                  <p className="text-slate-600">
                    Enter your GitHub Actions run ID to analyze test results
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="relative">
                    <Input
                      type="text"
                      placeholder="e.g., 1234567890"
                      value={runId}
                      onChange={(e) => setRunId(e.target.value)}
                      className="pl-10 h-12 bg-glass-subtle backdrop-blur-glass border-glass focus:border-blue-500 focus:ring-blue-500/20 rounded-xl text-center"
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

              {/* How to find Run ID */}
              <div className="bg-glass-medium backdrop-blur-glass border border-glass rounded-xl p-5 text-sm shadow-glass">
                <h4 className="font-medium text-slate-900 mb-3">How to find your Run ID:</h4>
                <ol className="space-y-2 text-slate-600">
                  <li className="flex items-start gap-2">
                    <span className="w-5 h-5 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-xs font-medium flex-shrink-0 mt-0.5">1</span>
                    Go to your GitHub repository
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-5 h-5 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-xs font-medium flex-shrink-0 mt-0.5">2</span>
                    Click on the "Actions" tab
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-5 h-5 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-xs font-medium flex-shrink-0 mt-0.5">3</span>
                    Select a workflow run
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-5 h-5 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-xs font-medium flex-shrink-0 mt-0.5">4</span>
                    Copy the number from the URL
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;

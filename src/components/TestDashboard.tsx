
import { Badge } from '@/components/ui/badge';
import { CheckCircle2, XCircle, AlertCircle, Clock, TestTube2, TrendingUp, Activity, GitBranch, Play, User, Calendar } from 'lucide-react';
import { cn } from '@/lib/utils';

// Mock data - replace with real data from your API
const mockTestData = {
  overall: {
    total: 150,
    passed: 120,
    failed: 20,
    skipped: 10
  },
  categories: [
    {
      name: 'Authentication',
      total: 25,
      passed: 22,
      failed: 2,
      skipped: 1
    },
    {
      name: 'API Integration',
      total: 35,
      passed: 30,
      failed: 4,
      skipped: 1
    },
    {
      name: 'User Interface',
      total: 40,
      passed: 35,
      failed: 3,
      skipped: 2
    },
    {
      name: 'Database',
      total: 30,
      passed: 25,
      failed: 3,
      skipped: 2
    },
    {
      name: 'Performance',
      total: 20,
      passed: 8,
      failed: 8,
      skipped: 4
    }
  ]
};

// Mock GitHub Actions data
const mockGHAData = [
  {
    runId: '#1234567890',
    workflowName: 'CI/CD Pipeline',
    branch: 'main',
    environment: 'Production',
    status: 'success' as const,
    progress: 100,
    startTime: '2 hours ago',
    duration: '8m 32s',
    triggeredBy: 'john.doe',
    commitHash: 'a1b2c3d4',
    commitMessage: 'Fix: Resolve authentication timeout issues in login flow'
  },
  {
    runId: '#1234567889',
    workflowName: 'Test Suite',
    branch: 'feature/dashboard-updates',
    environment: 'Staging',
    status: 'in_progress' as const,
    progress: 65,
    startTime: '15 minutes ago',
    duration: '5m 12s',
    triggeredBy: 'jane.smith',
    commitHash: 'e5f6g7h8',
    commitMessage: 'feat: Add new dashboard components with improved UI'
  },
  {
    runId: '#1234567888',
    workflowName: 'Security Scan',
    branch: 'develop',
    environment: 'Development',
    status: 'failure' as const,
    progress: 45,
    startTime: '1 hour ago',
    duration: '3m 45s',
    triggeredBy: 'automated',
    commitHash: 'i9j0k1l2',
    commitMessage: 'refactor: Update dependency versions and security patches'
  }
];

const TestDashboard = () => {
  const { overall, categories } = mockTestData;
  
  const passRate = Math.round((overall.passed / overall.total) * 100);
  const failRate = Math.round((overall.failed / overall.total) * 100);
  const skipRate = Math.round((overall.skipped / overall.total) * 100);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'success': return 'text-green-600';
      case 'failure': return 'text-red-600';
      case 'in_progress': return 'text-blue-600';
      case 'pending': return 'text-yellow-600';
      default: return 'text-muted-foreground';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'success': return <CheckCircle2 className="w-3 h-3" />;
      case 'failure': return <XCircle className="w-3 h-3" />;
      case 'in_progress': return <Play className="w-3 h-3" />;
      case 'pending': return <Clock className="w-3 h-3" />;
      default: return <AlertCircle className="w-3 h-3" />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-purple-950/20 to-slate-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-purple-600/30 to-pink-600/30 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-blue-600/20 to-cyan-600/20 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-emerald-600/10 to-teal-600/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-8">
        
        {/* Asymmetric Header */}
        <div className="flex flex-col lg:flex-row items-start justify-between mb-16 gap-8">
          <div className="flex-1">
            <div className="inline-flex items-center gap-2 mb-6">
              <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full animate-pulse" />
              <span className="text-purple-300 text-sm font-medium tracking-wider uppercase">Live Analytics</span>
            </div>
            <h1 className="text-7xl lg:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-purple-200 to-pink-200 leading-none tracking-tight mb-4">
              Test
              <br />
              Dashboard
            </h1>
            <p className="text-xl text-slate-400 max-w-lg leading-relaxed">
              Real-time insights into your test execution and CI/CD pipeline performance
            </p>
          </div>
          
          {/* Floating Stats */}
          <div className="relative">
            <div className="absolute -top-8 -right-8 w-32 h-32 bg-gradient-to-br from-emerald-400/20 to-teal-400/20 rounded-3xl rotate-12 blur-xl" />
            <div className="relative bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-xl rounded-3xl p-8 border border-white/10">
              <div className="text-center space-y-2">
                <div className="text-4xl font-bold text-emerald-400">{passRate}%</div>
                <div className="text-sm text-slate-400 uppercase tracking-wider">Success Rate</div>
              </div>
            </div>
          </div>
        </div>

        {/* Organic Metrics Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-20">
          
          {/* Large Total Tests */}
          <div className="lg:col-span-5 relative">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20 rounded-[2rem] blur-xl" />
            <div className="relative bg-slate-900/60 backdrop-blur-2xl rounded-[2rem] p-8 border border-white/10 h-full">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center">
                  <TestTube2 className="w-7 h-7 text-white" />
                </div>
                <div>
                  <div className="text-5xl font-black text-white">{overall.total}</div>
                  <div className="text-slate-400 text-lg">Total Tests</div>
                </div>
              </div>
              
              {/* Curved Progress Bar */}
              <div className="space-y-4">
                <div className="flex justify-between text-sm">
                  <span className="text-slate-400">Health Score</span>
                  <span className="text-white font-semibold">{passRate}%</span>
                </div>
                <div className="h-3 bg-slate-800 rounded-full overflow-hidden">
                  <div className="flex h-full">
                    <div 
                      className="bg-gradient-to-r from-emerald-400 to-green-400"
                      style={{ width: `${passRate}%` }}
                    />
                    <div 
                      className="bg-gradient-to-r from-red-400 to-pink-400"
                      style={{ width: `${failRate}%` }}
                    />
                    <div 
                      className="bg-gradient-to-r from-yellow-400 to-orange-400"
                      style={{ width: `${skipRate}%` }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Stacked Mini Stats */}
          <div className="lg:col-span-7 space-y-4">
            {[
              { value: overall.passed, label: 'Passed', color: 'from-emerald-500 to-green-500', bg: 'from-emerald-500/20 to-green-500/20' },
              { value: overall.failed, label: 'Failed', color: 'from-red-500 to-pink-500', bg: 'from-red-500/20 to-pink-500/20' },
              { value: overall.skipped, label: 'Skipped', color: 'from-yellow-500 to-orange-500', bg: 'from-yellow-500/20 to-orange-500/20' }
            ].map((stat, index) => (
              <div key={index} className="relative group">
                <div className={`absolute inset-0 bg-gradient-to-r ${stat.bg} rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300`} />
                <div className="relative bg-slate-900/40 backdrop-blur-xl rounded-2xl p-6 border border-white/10 flex items-center justify-between group-hover:bg-slate-900/60 transition-all duration-300">
                  <div className="flex items-center gap-4">
                    <div className={`w-4 h-4 bg-gradient-to-r ${stat.color} rounded-full`} />
                    <span className="text-slate-300 font-medium">{stat.label}</span>
                  </div>
                  <div className="text-2xl font-bold text-white">{stat.value}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Creative Category Grid */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold text-white mb-8 tracking-tight">Test Categories</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((category, index) => {
              const categoryPassRate = Math.round((category.passed / category.total) * 100);
              const isHighPerforming = categoryPassRate >= 80;
              
              return (
                <div 
                  key={index}
                  className={`relative group ${index % 2 === 0 ? 'lg:translate-y-8' : ''}`}
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${
                    isHighPerforming 
                      ? 'from-emerald-600/30 to-teal-600/30' 
                      : 'from-orange-600/30 to-red-600/30'
                  } rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500`} />
                  
                  <div className="relative bg-slate-900/50 backdrop-blur-2xl rounded-3xl p-8 border border-white/10 group-hover:border-white/20 transition-all duration-300">
                    <div className="mb-6">
                      <h3 className="text-xl font-bold text-white mb-2">{category.name}</h3>
                      <div className="text-sm text-slate-400">{category.total} tests</div>
                    </div>
                    
                    <div className="space-y-4">
                      <div className="flex justify-between items-end">
                        <div className="text-center">
                          <div className="text-2xl font-bold text-emerald-400">{category.passed}</div>
                          <div className="text-xs text-slate-500">PASS</div>
                        </div>
                        <div className="text-center">
                          <div className="text-2xl font-bold text-red-400">{category.failed}</div>
                          <div className="text-xs text-slate-500">FAIL</div>
                        </div>
                        <div className="text-center">
                          <div className="text-2xl font-bold text-yellow-400">{category.skipped}</div>
                          <div className="text-xs text-slate-500">SKIP</div>
                        </div>
                      </div>
                      
                      <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
                        <div className="flex h-full">
                          <div 
                            className="bg-gradient-to-r from-emerald-400 to-green-400"
                            style={{ width: `${(category.passed / category.total) * 100}%` }}
                          />
                          <div 
                            className="bg-gradient-to-r from-red-400 to-pink-400"
                            style={{ width: `${(category.failed / category.total) * 100}%` }}
                          />
                          <div 
                            className="bg-gradient-to-r from-yellow-400 to-orange-400"
                            style={{ width: `${(category.skipped / category.total) * 100}%` }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Pipeline Status - Fluid Layout */}
        <div>
          <h2 className="text-4xl font-bold text-white mb-8 tracking-tight">Pipeline Activity</h2>
          
          <div className="space-y-6">
            {mockGHAData.map((run, index) => (
              <div 
                key={index}
                className={`relative group flex ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}
              >
                <div className={`w-full max-w-4xl ${index % 2 === 0 ? 'lg:mr-20' : 'lg:ml-20'}`}>
                  <div className="absolute inset-0 bg-gradient-to-br from-slate-600/20 to-slate-700/20 rounded-2xl blur-xl" />
                  
                  <div className="relative bg-slate-900/70 backdrop-blur-xl rounded-2xl p-6 border border-white/10 group-hover:border-white/20 transition-all duration-300">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className={cn("w-3 h-3 rounded-full", {
                          'bg-emerald-400': run.status === 'success',
                          'bg-red-400': run.status === 'failure',
                          'bg-blue-400 animate-pulse': run.status === 'in_progress'
                        })} />
                        <div>
                          <div className="text-lg font-semibold text-white">{run.workflowName}</div>
                          <div className="text-sm text-slate-400">{run.runId}</div>
                        </div>
                      </div>
                      
                      <div className="text-right">
                        <div className="text-sm text-slate-400">{run.environment}</div>
                        <div className="text-xs text-slate-500">{run.startTime}</div>
                      </div>
                    </div>
                    
                    <div className="mb-4">
                      <div className="text-sm text-slate-300 mb-2">{run.commitMessage}</div>
                      <div className="flex items-center gap-4 text-xs text-slate-500">
                        <span className="flex items-center gap-1">
                          <GitBranch className="w-3 h-3" />
                          {run.branch}
                        </span>
                        <span>{run.commitHash}</span>
                        <span>{run.triggeredBy}</span>
                      </div>
                    </div>
                    
                    {run.status === 'in_progress' && (
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span className="text-slate-400">Progress</span>
                          <span className="text-blue-400 font-semibold">{run.progress}%</span>
                        </div>
                        <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
                          <div 
                            className="h-full bg-gradient-to-r from-blue-400 to-cyan-400 transition-all duration-500"
                            style={{ width: `${run.progress}%` }}
                          />
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestDashboard;

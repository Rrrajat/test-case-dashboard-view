
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
    <div className="min-h-screen bg-white relative overflow-hidden">
      {/* Subtle Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-32 right-20 w-96 h-96 bg-gradient-to-br from-blue-50 to-purple-50 rounded-full blur-3xl opacity-60" />
        <div className="absolute bottom-40 left-16 w-80 h-80 bg-gradient-to-br from-emerald-50 to-teal-50 rounded-full blur-3xl opacity-40" />
        <div className="absolute top-1/3 left-1/3 w-72 h-72 bg-gradient-to-br from-orange-50 to-pink-50 rounded-full blur-3xl opacity-30" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-8 py-12">
        
        {/* Fluid Header Layout */}
        <div className="flex items-end justify-between mb-20">
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-1 h-8 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full" />
              <span className="text-blue-600 text-sm font-semibold tracking-widest uppercase">Live Dashboard</span>
            </div>
            <h1 className="text-7xl font-black text-slate-900 leading-none mb-6">
              Test
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Analytics</span>
            </h1>
            <p className="text-xl text-slate-600 max-w-xl leading-relaxed">
              Monitor your test execution and CI/CD pipeline with real-time insights and performance metrics
            </p>
          </div>
          
          {/* Floating Score */}
          <div className="relative mr-12">
            <div className="absolute -inset-4 bg-gradient-to-br from-emerald-100 to-teal-100 rounded-full blur-2xl opacity-60" />
            <div className="relative w-32 h-32 bg-white rounded-full shadow-2xl flex flex-col items-center justify-center border border-slate-100">
              <div className="text-3xl font-black text-emerald-600">{passRate}%</div>
              <div className="text-xs text-slate-500 font-medium uppercase tracking-wider">Health</div>
            </div>
          </div>
        </div>

        {/* Flowing Metrics Section */}
        <div className="relative mb-24">
          {/* Main Stats Flow */}
          <div className="flex flex-wrap items-start gap-12 mb-12">
            <div className="flex items-baseline gap-4">
              <div className="text-6xl font-black text-slate-900">{overall.total}</div>
              <div className="text-lg text-slate-500 font-medium">Total Tests</div>
            </div>
            
            <div className="h-16 w-px bg-gradient-to-b from-transparent via-slate-200 to-transparent" />
            
            <div className="flex items-center gap-8">
              <div className="flex items-center gap-3">
                <div className="w-4 h-4 bg-emerald-500 rounded-full" />
                <div>
                  <div className="text-3xl font-bold text-emerald-600">{overall.passed}</div>
                  <div className="text-sm text-slate-500 -mt-1">Passed</div>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="w-4 h-4 bg-red-500 rounded-full" />
                <div>
                  <div className="text-3xl font-bold text-red-600">{overall.failed}</div>
                  <div className="text-sm text-slate-500 -mt-1">Failed</div>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="w-4 h-4 bg-yellow-500 rounded-full" />
                <div>
                  <div className="text-3xl font-bold text-yellow-600">{overall.skipped}</div>
                  <div className="text-sm text-slate-500 -mt-1">Skipped</div>
                </div>
              </div>
            </div>
          </div>

          {/* Organic Progress Visualization */}
          <div className="relative">
            <div className="flex items-center justify-between mb-4">
              <span className="text-lg font-semibold text-slate-700">Test Health Distribution</span>
              <span className="text-2xl font-bold text-slate-900">{passRate}% Success</span>
            </div>
            <div className="h-6 bg-slate-100 rounded-full overflow-hidden shadow-inner">
              <div className="flex h-full">
                <div 
                  className="bg-gradient-to-r from-emerald-400 to-emerald-500 transition-all duration-1000 ease-out"
                  style={{ width: `${passRate}%` }}
                />
                <div 
                  className="bg-gradient-to-r from-red-400 to-red-500 transition-all duration-1000 ease-out"
                  style={{ width: `${failRate}%` }}
                />
                <div 
                  className="bg-gradient-to-r from-yellow-400 to-yellow-500 transition-all duration-1000 ease-out"
                  style={{ width: `${skipRate}%` }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Futuristic Category Layout */}
        <div className="mb-24">
          <h2 className="text-4xl font-black text-slate-900 mb-16">Test Categories</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {categories.map((category, index) => {
              const categoryPassRate = Math.round((category.passed / category.total) * 100);
              const categoryFailRate = Math.round((category.failed / category.total) * 100);
              const categorySkipRate = Math.round((category.skipped / category.total) * 100);
              
              return (
                <div 
                  key={index}
                  className="group relative overflow-hidden"
                >
                  {/* Background gradient line */}
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 transform scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-top" />
                  
                  <div className="pl-8 py-8 border-l border-slate-100 group-hover:border-transparent transition-all duration-300">
                    {/* Header */}
                    <div className="flex items-center justify-between mb-8">
                      <div>
                        <h3 className="text-2xl font-bold text-slate-900 mb-1">{category.name}</h3>
                        <div className="text-slate-500 text-sm font-medium uppercase tracking-widest">{category.total} Tests Total</div>
                      </div>
                      <div className="text-right">
                        <div className="text-3xl font-black text-slate-900">{categoryPassRate}%</div>
                        <div className="text-xs text-slate-500 uppercase tracking-wider">Success</div>
                      </div>
                    </div>
                    
                    {/* Metrics Grid */}
                    <div className="grid grid-cols-3 gap-6 mb-8">
                      <div className="text-center group-hover:transform group-hover:scale-105 transition-transform duration-300">
                        <div className="w-16 h-16 mx-auto mb-3 bg-gradient-to-br from-emerald-100 to-emerald-200 rounded-2xl flex items-center justify-center group-hover:shadow-lg transition-shadow duration-300">
                          <div className="text-2xl font-black text-emerald-600">{category.passed}</div>
                        </div>
                        <div className="text-xs text-slate-500 font-semibold uppercase tracking-wider">Passed</div>
                      </div>
                      
                      <div className="text-center group-hover:transform group-hover:scale-105 transition-transform duration-300 delay-75">
                        <div className="w-16 h-16 mx-auto mb-3 bg-gradient-to-br from-red-100 to-red-200 rounded-2xl flex items-center justify-center group-hover:shadow-lg transition-shadow duration-300">
                          <div className="text-2xl font-black text-red-600">{category.failed}</div>
                        </div>
                        <div className="text-xs text-slate-500 font-semibold uppercase tracking-wider">Failed</div>
                      </div>
                      
                      <div className="text-center group-hover:transform group-hover:scale-105 transition-transform duration-300 delay-150">
                        <div className="w-16 h-16 mx-auto mb-3 bg-gradient-to-br from-yellow-100 to-yellow-200 rounded-2xl flex items-center justify-center group-hover:shadow-lg transition-shadow duration-300">
                          <div className="text-2xl font-black text-yellow-600">{category.skipped}</div>
                        </div>
                        <div className="text-xs text-slate-500 font-semibold uppercase tracking-wider">Skipped</div>
                      </div>
                    </div>
                    
                    {/* Modern Progress Visualization */}
                    <div className="space-y-3">
                      <div className="flex items-center gap-4">
                        <div className="flex-1 h-2 bg-slate-100 rounded-full overflow-hidden relative">
                          <div className="absolute inset-0 flex">
                            <div 
                              className="bg-emerald-500 h-full transition-all duration-1000 ease-out"
                              style={{ width: `${categoryPassRate}%` }}
                            />
                            <div 
                              className="bg-red-500 h-full transition-all duration-1000 ease-out"
                              style={{ width: `${categoryFailRate}%` }}
                            />
                            <div 
                              className="bg-yellow-500 h-full transition-all duration-1000 ease-out"
                              style={{ width: `${categorySkipRate}%` }}
                            />
                          </div>
                        </div>
                        <div className="text-sm font-mono text-slate-400">{categoryPassRate}%</div>
                      </div>
                      
                      {/* Detailed breakdown */}
                      <div className="flex items-center justify-between text-xs text-slate-400 font-mono">
                        <span>PASS: {categoryPassRate}%</span>
                        <span>FAIL: {categoryFailRate}%</span>
                        <span>SKIP: {categorySkipRate}%</span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Current Pipeline Context */}
        <div>
          <h2 className="text-4xl font-black text-slate-900 mb-8">Current Pipeline</h2>
          <p className="text-lg text-slate-600 mb-12">Test data from the following pipeline run</p>
          
          {/* Single Pipeline Display */}
          <div className="relative">
            {/* Background decoration */}
            <div className="absolute -inset-8 bg-gradient-to-br from-blue-50/50 to-purple-50/50 rounded-3xl blur-xl" />
            
            <div className="relative bg-white rounded-2xl shadow-xl border border-slate-200/50 p-8">
              {/* Pipeline Header */}
              <div className="flex items-start justify-between mb-8">
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <div className={cn("w-3 h-3 rounded-full", {
                      'bg-emerald-500': mockGHAData[0].status === 'success',
                      'bg-red-500': mockGHAData[0].status === 'failure',
                      'bg-blue-500 animate-pulse': mockGHAData[0].status === 'in_progress'
                    })} />
                    <Badge className={cn("text-xs font-semibold", getStatusColor(mockGHAData[0].status))}>
                      {getStatusIcon(mockGHAData[0].status)}
                      <span className="ml-1">{mockGHAData[0].status.replace('_', ' ').toUpperCase()}</span>
                    </Badge>
                  </div>
                  <h3 className="text-3xl font-black text-slate-900 mb-2">{mockGHAData[0].workflowName}</h3>
                  <div className="text-slate-500 font-medium">{mockGHAData[0].runId} • {mockGHAData[0].environment}</div>
                </div>
                
                {/* Status Circle */}
                <div className="relative">
                  <div className="absolute -inset-3 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full blur-lg opacity-60" />
                  <div className="relative w-16 h-16 bg-white rounded-full shadow-lg flex items-center justify-center border border-slate-100">
                    <div className={cn("text-2xl", getStatusColor(mockGHAData[0].status))}>
                      {getStatusIcon(mockGHAData[0].status)}
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Pipeline Details Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                <div className="space-y-3">
                  <div className="text-sm text-slate-500 font-semibold uppercase tracking-wider">Branch & Commit</div>
                  <div className="flex items-center gap-2 text-lg font-bold text-slate-900">
                    <GitBranch className="w-4 h-4 text-blue-600" />
                    {mockGHAData[0].branch}
                  </div>
                  <div className="font-mono text-sm bg-slate-100 px-3 py-1.5 rounded-lg">
                    {mockGHAData[0].commitHash}
                  </div>
                </div>
                
                <div className="space-y-3">
                  <div className="text-sm text-slate-500 font-semibold uppercase tracking-wider">Execution Info</div>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-slate-700">
                      <User className="w-4 h-4 text-slate-400" />
                      <span className="font-medium">{mockGHAData[0].triggeredBy}</span>
                    </div>
                    <div className="flex items-center gap-2 text-slate-700">
                      <Clock className="w-4 h-4 text-slate-400" />
                      <span>{mockGHAData[0].startTime} • {mockGHAData[0].duration}</span>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <div className="text-sm text-slate-500 font-semibold uppercase tracking-wider">Progress</div>
                  <div className="text-3xl font-black text-slate-900">{mockGHAData[0].progress}%</div>
                  <div className="h-3 bg-slate-100 rounded-full overflow-hidden shadow-inner">
                    <div 
                      className={cn("h-full transition-all duration-1000 ease-out", {
                        'bg-gradient-to-r from-emerald-400 to-emerald-500': mockGHAData[0].status === 'success',
                        'bg-gradient-to-r from-red-400 to-red-500': mockGHAData[0].status === 'failure',
                        'bg-gradient-to-r from-blue-400 to-blue-500': mockGHAData[0].status === 'in_progress'
                      })}
                      style={{ width: `${mockGHAData[0].progress}%` }}
                    />
                  </div>
                </div>
              </div>
              
              {/* Commit Message */}
              <div className="border-t border-slate-100 pt-6">
                <div className="text-sm text-slate-500 font-semibold uppercase tracking-wider mb-3">Latest Commit</div>
                <div className="text-lg text-slate-800 leading-relaxed">
                  {mockGHAData[0].commitMessage}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestDashboard;

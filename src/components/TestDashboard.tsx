
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
    <div className="min-h-screen bg-gradient-to-b from-background via-muted/5 to-background/80">
      <div className="max-w-7xl mx-auto px-6 py-12 space-y-16">
        
        {/* Hero Section */}
        <div className="text-center space-y-8">
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white/40 backdrop-blur-xl border border-white/20 shadow-lg">
            <TestTube2 className="w-5 h-5 text-primary" />
            <span className="text-sm font-medium text-foreground/80">Test Analytics</span>
          </div>
          <h1 className="text-6xl font-light tracking-tight text-foreground">
            Real-time insights
          </h1>
          <p className="text-xl text-muted-foreground font-light max-w-2xl mx-auto leading-relaxed">
            Monitor test execution and CI/CD pipeline performance with clarity and precision
          </p>
        </div>

        {/* Key Metrics - Glass Panel */}
        <div className="bg-white/20 backdrop-blur-2xl rounded-3xl border border-white/30 p-8 shadow-2xl">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-light text-foreground">Overview</h2>
            <Badge variant="outline" className="bg-white/20 backdrop-blur-sm border-white/30 text-sm">
              Live
            </Badge>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center space-y-3">
              <div className="w-12 h-12 mx-auto rounded-full bg-blue-500/10 flex items-center justify-center">
                <TestTube2 className="w-6 h-6 text-blue-600" />
              </div>
              <div className="text-3xl font-light text-foreground">{overall.total}</div>
              <div className="text-sm text-muted-foreground">Total Tests</div>
            </div>
            
            <div className="text-center space-y-3">
              <div className="w-12 h-12 mx-auto rounded-full bg-green-500/10 flex items-center justify-center">
                <CheckCircle2 className="w-6 h-6 text-green-600" />
              </div>
              <div className="text-3xl font-light text-green-600">{overall.passed}</div>
              <div className="text-sm text-muted-foreground">{passRate}% Passed</div>
            </div>
            
            <div className="text-center space-y-3">
              <div className="w-12 h-12 mx-auto rounded-full bg-red-500/10 flex items-center justify-center">
                <XCircle className="w-6 h-6 text-red-600" />
              </div>
              <div className="text-3xl font-light text-red-600">{overall.failed}</div>
              <div className="text-sm text-muted-foreground">{failRate}% Failed</div>
            </div>
            
            <div className="text-center space-y-3">
              <div className="w-12 h-12 mx-auto rounded-full bg-yellow-500/10 flex items-center justify-center">
                <Clock className="w-6 h-6 text-yellow-600" />
              </div>
              <div className="text-3xl font-light text-yellow-600">{overall.skipped}</div>
              <div className="text-sm text-muted-foreground">{skipRate}% Skipped</div>
            </div>
          </div>

          {/* Elegant Progress Visualization */}
          <div className="mt-12 space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-lg font-light text-foreground">Test Health</span>
              <span className="text-2xl font-light text-foreground">{passRate}%</span>
            </div>
            <div className="h-2 bg-white/20 rounded-full overflow-hidden backdrop-blur-sm">
              <div className="flex h-full">
                <div 
                  className="bg-gradient-to-r from-green-400 to-green-500 transition-all duration-1000"
                  style={{ width: `${passRate}%` }}
                />
                <div 
                  className="bg-gradient-to-r from-red-400 to-red-500 transition-all duration-1000"
                  style={{ width: `${failRate}%` }}
                />
                <div 
                  className="bg-gradient-to-r from-yellow-400 to-yellow-500 transition-all duration-1000"
                  style={{ width: `${skipRate}%` }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Category Breakdown - Minimal List */}
        <div className="space-y-8">
          <h2 className="text-2xl font-light text-foreground">Test Categories</h2>
          
          <div className="space-y-4">
            {categories.map((category, index) => {
              const categoryPassRate = Math.round((category.passed / category.total) * 100);
              const categoryFailRate = Math.round((category.failed / category.total) * 100);
              const categorySkipRate = Math.round((category.skipped / category.total) * 100);
              
              return (
                <div 
                  key={index}
                  className="bg-white/10 backdrop-blur-xl rounded-2xl border border-white/20 p-6 hover:bg-white/15 transition-all duration-300"
                >
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-medium text-foreground">{category.name}</h3>
                    <span className="text-sm text-muted-foreground">{category.total} tests</span>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-4 mb-4">
                    <div className="text-center">
                      <div className="text-xl font-light text-green-600">{category.passed}</div>
                      <div className="text-xs text-muted-foreground">Passed</div>
                    </div>
                    <div className="text-center">
                      <div className="text-xl font-light text-red-600">{category.failed}</div>
                      <div className="text-xs text-muted-foreground">Failed</div>
                    </div>
                    <div className="text-center">
                      <div className="text-xl font-light text-yellow-600">{category.skipped}</div>
                      <div className="text-xs text-muted-foreground">Skipped</div>
                    </div>
                  </div>
                  
                  <div className="h-1 bg-white/20 rounded-full overflow-hidden">
                    <div className="flex h-full">
                      <div 
                        className="bg-green-500 transition-all duration-500"
                        style={{ width: `${categoryPassRate}%` }}
                      />
                      <div 
                        className="bg-red-500 transition-all duration-500"
                        style={{ width: `${categoryFailRate}%` }}
                      />
                      <div 
                        className="bg-yellow-500 transition-all duration-500"
                        style={{ width: `${categorySkipRate}%` }}
                      />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* GitHub Actions - Clean List */}
        <div className="space-y-8">
          <h2 className="text-2xl font-light text-foreground">Pipeline Status</h2>
          
          <div className="space-y-3">
            {mockGHAData.map((run, index) => (
              <div 
                key={index}
                className="bg-white/10 backdrop-blur-xl rounded-2xl border border-white/20 p-6 hover:bg-white/15 transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className={cn("flex items-center gap-2", getStatusColor(run.status))}>
                      {getStatusIcon(run.status)}
                      <span className="font-medium">{run.workflowName}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <GitBranch className="w-3 h-3" />
                      <span>{run.branch}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      <span>{run.startTime}</span>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center justify-between mb-3">
                  <div className="text-sm text-muted-foreground">{run.commitMessage}</div>
                  <div className="text-sm font-mono text-muted-foreground">{run.commitHash}</div>
                </div>
                
                {run.status === 'in_progress' && (
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Progress</span>
                      <span className="text-foreground">{run.progress}%</span>
                    </div>
                    <div className="h-1 bg-white/20 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-blue-500 transition-all duration-500"
                        style={{ width: `${run.progress}%` }}
                      />
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestDashboard;

import { Badge } from '@/components/ui/badge';
import { CheckCircle2, XCircle, AlertCircle, Clock, BarChart3, TestTube2, TrendingUp, Activity } from 'lucide-react';
import StatCard from './StatCard';
import CategoryBreakdown from './CategoryBreakdown';
import GHAInfo from './GHAInfo';
import TestOverview from './TestOverview';

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
  },
  {
    runId: '#1234567887',
    workflowName: 'Deploy to Staging',
    branch: 'release/v2.1.0',
    environment: 'Staging',
    status: 'pending' as const,
    progress: 0,
    startTime: '5 minutes ago',
    duration: '0m 0s',
    triggeredBy: 'release.bot',
    commitHash: 'm3n4o5p6',
    commitMessage: 'release: Prepare version 2.1.0 with new features'
  }
];

const TestDashboard = () => {
  const { overall, categories } = mockTestData;
  
  const passRate = Math.round((overall.passed / overall.total) * 100);
  const failRate = Math.round((overall.failed / overall.total) * 100);
  const skipRate = Math.round((overall.skipped / overall.total) * 100);

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/20 to-background">
      <div className="max-w-7xl mx-auto p-8 space-y-10">
        {/* Modern Header */}
        <div className="text-center space-y-6 py-8">
          <div className="inline-flex items-center justify-center p-4 rounded-2xl bg-gradient-to-r from-primary/10 to-blue-500/10 backdrop-blur-sm border border-border/20">
            <TestTube2 className="w-8 h-8 text-primary mr-3" />
            <h1 className="text-5xl font-bold bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
              Test Analytics
            </h1>
          </div>
          <p className="text-muted-foreground text-xl max-w-2xl mx-auto leading-relaxed">
            Real-time insights into test execution and CI/CD pipeline performance
          </p>
        </div>

        {/* Key Metrics Section */}
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-primary/10">
                <TrendingUp className="w-5 h-5 text-primary" />
              </div>
              <h2 className="text-2xl font-semibold text-foreground">Key Metrics</h2>
            </div>
            <Badge variant="outline" className="text-sm px-4 py-2">
              Last updated: 2 mins ago
            </Badge>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <StatCard
              title="Total Tests"
              value={overall.total}
              icon={<TestTube2 className="w-6 h-6" />}
              color="blue"
              subtitle="All test cases"
            />
            <StatCard
              title="Passed"
              value={overall.passed}
              percentage={passRate}
              icon={<CheckCircle2 className="w-6 h-6" />}
              color="green"
              subtitle={`${passRate}% success rate`}
            />
            <StatCard
              title="Failed"
              value={overall.failed}
              percentage={failRate}
              icon={<XCircle className="w-6 h-6" />}
              color="red"
              subtitle={`${failRate}% failure rate`}
            />
            <StatCard
              title="Skipped"
              value={overall.skipped}
              percentage={skipRate}
              icon={<Clock className="w-6 h-6" />}
              color="yellow"
              subtitle={`${skipRate}% skipped`}
            />
          </div>
        </div>

        {/* Test Overview Section */}
        <TestOverview 
          passRate={passRate}
          failRate={failRate}
          skipRate={skipRate}
          overall={overall}
        />

        {/* GitHub Actions Section */}
        <GHAInfo runs={mockGHAData} />

        {/* Category Breakdown */}
        <CategoryBreakdown categories={categories} />
      </div>
    </div>
  );
};

export default TestDashboard;

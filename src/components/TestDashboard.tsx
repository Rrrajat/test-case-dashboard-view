
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CheckCircle2, XCircle, AlertCircle, Clock, BarChart3, TestTube2 } from 'lucide-react';
import StatCard from './StatCard';
import CategoryBreakdown from './CategoryBreakdown';
import GHAInfo from './GHAInfo';

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
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 p-6">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Header */}
        <div className="text-center space-y-4">
          <div className="flex items-center justify-center gap-3">
            <TestTube2 className="w-10 h-10 text-blue-600" />
            <h1 className="text-4xl font-bold text-gray-900">Test Dashboard</h1>
          </div>
          <p className="text-gray-600 text-lg">Comprehensive overview of test execution results and CI/CD pipeline status</p>
        </div>

        {/* Overall Statistics */}
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <BarChart3 className="w-6 h-6 text-gray-700" />
            <h2 className="text-2xl font-semibold text-gray-900">Overall Statistics</h2>
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

        {/* Test Status Summary */}
        <Card className="border-0 shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <AlertCircle className="w-5 h-5" />
              Test Status Summary
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-green-500 rounded-full"></div>
                <span className="text-sm font-medium">Passed: {overall.passed}</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-red-500 rounded-full"></div>
                <span className="text-sm font-medium">Failed: {overall.failed}</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-yellow-500 rounded-full"></div>
                <span className="text-sm font-medium">Skipped: {overall.skipped}</span>
              </div>
              <Badge variant="outline" className="ml-auto">
                Success Rate: {passRate}%
              </Badge>
            </div>
            
            {/* Progress Bar */}
            <div className="mt-4 w-full bg-gray-200 rounded-full h-3">
              <div className="flex h-full rounded-full overflow-hidden">
                <div 
                  className="bg-green-500 transition-all duration-500"
                  style={{ width: `${passRate}%` }}
                ></div>
                <div 
                  className="bg-red-500 transition-all duration-500"
                  style={{ width: `${failRate}%` }}
                ></div>
                <div 
                  className="bg-yellow-500 transition-all duration-500"
                  style={{ width: `${skipRate}%` }}
                ></div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* GitHub Actions Section */}
        <GHAInfo runs={mockGHAData} />

        {/* Category Breakdown */}
        <CategoryBreakdown categories={categories} />
      </div>
    </div>
  );
};

export default TestDashboard;

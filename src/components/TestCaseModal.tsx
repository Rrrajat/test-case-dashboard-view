import { useState } from 'react';
import { X, CheckCircle2, XCircle, Clock, TestTube2, Calendar, User, Hash } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

export type TestStatus = 'passed' | 'failed' | 'skipped';

export interface TestCase {
  id: string;
  name: string;
  status: TestStatus;
  category: string;
  duration: string;
  description?: string;
  error?: string;
  suite: string;
  timestamp: string;
}

interface TestCaseModalProps {
  isOpen: boolean;
  onClose: () => void;
  status: TestStatus;
  testCases: TestCase[];
  category?: string;
}

// Mock test cases data - replace with real data
const mockTestCases: TestCase[] = [
  {
    id: 'test-001',
    name: 'User login with valid credentials',
    status: 'passed',
    category: 'Authentication',
    duration: '0.8s',
    description: 'Verifies successful login with correct username and password',
    suite: 'Authentication Suite',
    timestamp: '2024-01-15 14:23:45'
  },
  {
    id: 'test-002',
    name: 'Password reset flow validation',
    status: 'failed',
    category: 'Authentication',
    duration: '1.2s',
    description: 'Tests the complete password reset flow',
    error: 'AssertionError: Expected email to be sent within 30 seconds',
    suite: 'Authentication Suite',
    timestamp: '2024-01-15 14:23:47'
  },
  {
    id: 'test-003',
    name: 'OAuth Google integration',
    status: 'skipped',
    category: 'Authentication',
    duration: '0.0s',
    description: 'Tests Google OAuth integration',
    suite: 'Authentication Suite',
    timestamp: '2024-01-15 14:23:49'
  },
  {
    id: 'test-004',
    name: 'API endpoint response validation',
    status: 'passed',
    category: 'API Integration',
    duration: '0.5s',
    description: 'Validates API response structure and data types',
    suite: 'API Test Suite',
    timestamp: '2024-01-15 14:24:01'
  },
  {
    id: 'test-005',
    name: 'Database connection timeout',
    status: 'failed',
    category: 'Database',
    duration: '5.0s',
    description: 'Tests database connection timeout handling',
    error: 'TimeoutError: Database connection timed out after 5 seconds',
    suite: 'Database Suite',
    timestamp: '2024-01-15 14:24:15'
  }
];

const TestCaseModal = ({ isOpen, onClose, status, testCases, category }: TestCaseModalProps) => {
  const [selectedTestCase, setSelectedTestCase] = useState<TestCase | null>(null);

  if (!isOpen) return null;

  // Filter test cases based on status and category
  const filteredTestCases = mockTestCases.filter(testCase => {
    const statusMatch = testCase.status === status;
    const categoryMatch = category ? testCase.category === category : true;
    return statusMatch && categoryMatch;
  });

  const getStatusConfig = (status: TestStatus) => {
    switch (status) {
      case 'passed':
        return {
          icon: CheckCircle2,
          color: 'text-emerald-600',
          bgColor: 'bg-emerald-50',
          borderColor: 'border-emerald-200',
          title: 'Passed Tests'
        };
      case 'failed':
        return {
          icon: XCircle,
          color: 'text-red-600',
          bgColor: 'bg-red-50',
          borderColor: 'border-red-200',
          title: 'Failed Tests'
        };
      case 'skipped':
        return {
          icon: Clock,
          color: 'text-yellow-600',
          bgColor: 'bg-yellow-50',
          borderColor: 'border-yellow-200',
          title: 'Skipped Tests'
        };
    }
  };

  const statusConfig = getStatusConfig(status);
  const StatusIcon = statusConfig.icon;

  return (
    <div className="fixed inset-0 z-50 flex">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/20 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="relative ml-auto w-full max-w-4xl bg-white shadow-2xl">
        <div className="flex h-screen flex-col">
          {/* Header */}
          <div className={cn("p-8 border-b", statusConfig.bgColor, statusConfig.borderColor)}>
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-4">
                <StatusIcon className={cn("w-8 h-8", statusConfig.color)} />
                <div>
                  <h2 className="text-3xl font-black text-slate-900">{statusConfig.title}</h2>
                  {category && (
                    <p className="text-slate-600 mt-1">in {category}</p>
                  )}
                </div>
              </div>
              
              <button
                onClick={onClose}
                className="p-2 hover:bg-white/80 rounded-lg transition-colors"
              >
                <X className="w-6 h-6 text-slate-600" />
              </button>
            </div>
            
            <div className="flex items-center gap-6">
              <div className={cn("px-4 py-2 rounded-full border", statusConfig.bgColor, statusConfig.borderColor)}>
                <span className={cn("font-bold text-lg", statusConfig.color)}>
                  {filteredTestCases.length} test{filteredTestCases.length !== 1 ? 's' : ''}
                </span>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="flex-1 overflow-hidden">
            {filteredTestCases.length === 0 ? (
              <div className="flex items-center justify-center h-full">
                <div className="text-center">
                  <TestTube2 className="w-16 h-16 text-slate-300 mx-auto mb-4" />
                  <p className="text-slate-500 text-lg">No {status} tests found</p>
                  {category && (
                    <p className="text-slate-400 text-sm mt-2">in {category} category</p>
                  )}
                </div>
              </div>
            ) : (
              <div className="flex h-full">
                {/* Test List */}
                <div className="w-1/2 border-r border-slate-200 overflow-auto">
                  <div className="p-6">
                    <div className="space-y-3">
                      {filteredTestCases.map((testCase) => (
                        <div
                          key={testCase.id}
                          onClick={() => setSelectedTestCase(testCase)}
                          className={cn(
                            "p-4 rounded-lg border cursor-pointer transition-all duration-200 hover:shadow-md",
                            selectedTestCase?.id === testCase.id
                              ? cn("border-slate-300 bg-slate-50 shadow-md")
                              : "border-slate-100 hover:border-slate-200"
                          )}
                        >
                          <div className="flex items-start justify-between mb-2">
                            <h3 className="font-semibold text-slate-900 line-clamp-2 leading-tight">
                              {testCase.name}
                            </h3>
                            <Badge variant="outline" className="ml-2 text-xs shrink-0">
                              {testCase.duration}
                            </Badge>
                          </div>
                          
                          <div className="flex items-center gap-3 text-sm text-slate-600">
                            <span className="font-medium">{testCase.suite}</span>
                            <span>•</span>
                            <span>{testCase.category}</span>
                          </div>
                          
                          {testCase.error && (
                            <p className="text-xs text-red-600 mt-2 line-clamp-2 bg-red-50 p-2 rounded">
                              {testCase.error}
                            </p>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Test Details */}
                <div className="w-1/2 overflow-auto">
                  {selectedTestCase ? (
                    <div className="p-6">
                      <div className="mb-6">
                        <div className="flex items-start gap-3 mb-4">
                          <StatusIcon className={cn("w-6 h-6 mt-1 shrink-0", statusConfig.color)} />
                          <div className="flex-1">
                            <h3 className="text-xl font-bold text-slate-900 mb-2">
                              {selectedTestCase.name}
                            </h3>
                            {selectedTestCase.description && (
                              <p className="text-slate-600 leading-relaxed">
                                {selectedTestCase.description}
                              </p>
                            )}
                          </div>
                        </div>
                      </div>

                      <div className="space-y-6">
                        {/* Test Information */}
                        <div className="bg-slate-50 rounded-lg p-4">
                          <h4 className="font-semibold text-slate-900 mb-3">Test Information</h4>
                          <div className="grid grid-cols-2 gap-4 text-sm">
                            <div className="flex items-center gap-2">
                              <Hash className="w-4 h-4 text-slate-400" />
                              <span className="text-slate-600">ID:</span>
                              <span className="font-mono text-slate-900">{selectedTestCase.id}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <TestTube2 className="w-4 h-4 text-slate-400" />
                              <span className="text-slate-600">Suite:</span>
                              <span className="text-slate-900">{selectedTestCase.suite}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <Calendar className="w-4 h-4 text-slate-400" />
                              <span className="text-slate-600">Executed:</span>
                              <span className="text-slate-900">{selectedTestCase.timestamp}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <span className="text-slate-600">Duration:</span>
                              <Badge variant="outline">{selectedTestCase.duration}</Badge>
                            </div>
                          </div>
                        </div>

                        {/* Error Details */}
                        {selectedTestCase.error && (
                          <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                            <h4 className="font-semibold text-red-900 mb-3 flex items-center gap-2">
                              <XCircle className="w-4 h-4" />
                              Error Details
                            </h4>
                            <pre className="text-sm text-red-800 bg-red-100 p-3 rounded font-mono whitespace-pre-wrap leading-relaxed">
                              {selectedTestCase.error}
                            </pre>
                          </div>
                        )}

                        {/* Success Details */}
                        {selectedTestCase.status === 'passed' && (
                          <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-4">
                            <h4 className="font-semibold text-emerald-900 mb-2 flex items-center gap-2">
                              <CheckCircle2 className="w-4 h-4" />
                              Test Passed Successfully
                            </h4>
                            <p className="text-emerald-800 text-sm">
                              All assertions passed and the test completed within the expected timeframe.
                            </p>
                          </div>
                        )}

                        {/* Skip Details */}
                        {selectedTestCase.status === 'skipped' && (
                          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                            <h4 className="font-semibold text-yellow-900 mb-2 flex items-center gap-2">
                              <Clock className="w-4 h-4" />
                              Test Skipped
                            </h4>
                            <p className="text-yellow-800 text-sm">
                              This test was skipped during execution, possibly due to conditional logic or test configuration.
                            </p>
                          </div>
                        )}
                      </div>
                    </div>
                  ) : (
                    <div className="flex items-center justify-center h-full">
                      <div className="text-center">
                        <TestTube2 className="w-12 h-12 text-slate-300 mx-auto mb-3" />
                        <p className="text-slate-500">Select a test to view details</p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestCaseModal;
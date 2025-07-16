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
    <div className="fixed inset-0 z-50 flex items-center justify-end">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/40 backdrop-blur-md transition-opacity duration-500"
        onClick={onClose}
      />
      
      {/* Side Panel */}
      <div className="relative w-full max-w-6xl h-full bg-white shadow-2xl animate-slide-in-right-slow flex flex-col">

        {/* Header */}
        <div className={cn("px-8 py-6 border-b border-slate-100")}>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className={cn("p-3 rounded-2xl", statusConfig.bgColor)}>
                <StatusIcon className={cn("w-6 h-6", statusConfig.color)} />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-slate-900">{statusConfig.title}</h2>
                <div className="flex items-center gap-3 mt-1">
                  <span className="text-slate-600">
                    {filteredTestCases.length} test{filteredTestCases.length !== 1 ? 's' : ''}
                  </span>
                  {category && (
                    <>
                      <div className="w-1 h-1 bg-slate-400 rounded-full" />
                      <span className="text-slate-600">{category}</span>
                    </>
                  )}
                </div>
              </div>
            </div>
            
            <button
              onClick={onClose}
              className="p-2 hover:bg-slate-100 rounded-xl transition-colors"
            >
              <X className="w-5 h-5 text-slate-600" />
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-hidden">
          {filteredTestCases.length === 0 ? (
            <div className="flex items-center justify-center h-64">
              <div className="text-center">
                <div className={cn("w-16 h-16 rounded-2xl mx-auto mb-4 flex items-center justify-center", statusConfig.bgColor)}>
                  <TestTube2 className={cn("w-8 h-8", statusConfig.color)} />
                </div>
                <p className="text-slate-600 text-lg font-medium">No {status} tests found</p>
                {category && (
                  <p className="text-slate-500 text-sm mt-1">in {category} category</p>
                )}
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-12 h-full">
              {/* Test List */}
              <div className="col-span-5 border-r border-slate-100 overflow-auto">
                <div className="p-4">
                  <div className="space-y-2">
                    {filteredTestCases.map((testCase, index) => (
                      <div
                        key={testCase.id}
                        onClick={() => setSelectedTestCase(testCase)}
                        className={cn(
                          "p-3 rounded-lg cursor-pointer transition-all duration-200",
                          "animate-fade-in",
                          selectedTestCase?.id === testCase.id
                            ? "bg-slate-100 border-l-2 border-l-slate-900"
                            : "hover:bg-slate-50 border-l-2 border-l-transparent"
                        )}
                        style={{ animationDelay: `${index * 50}ms` }}
                      >
                        <div className="flex items-start justify-between mb-2">
                          <h3 className="font-medium text-slate-900 line-clamp-2 text-sm leading-tight">
                            {testCase.name}
                          </h3>
                          <span className="text-xs text-slate-500 ml-2 shrink-0">
                            {testCase.duration}
                          </span>
                        </div>
                        
                        <div className="flex items-center text-xs text-slate-500 mb-2">
                          <span>{testCase.suite}</span>
                          <span className="mx-1">•</span>
                          <span>{testCase.category}</span>
                        </div>
                        
                        {testCase.error && (
                          <div className="text-xs text-red-600 line-clamp-1 bg-red-50 px-2 py-1 rounded font-mono">
                            {testCase.error}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Test Details */}
              <div className="col-span-7 overflow-auto bg-white">
                {selectedTestCase ? (
                  <div className="p-6">
                    <div className="mb-6">
                      <div className="flex items-center gap-3 mb-4">
                        <div className={cn("w-2 h-2 rounded-full", 
                          selectedTestCase.status === 'passed' ? 'bg-emerald-500' :
                          selectedTestCase.status === 'failed' ? 'bg-red-500' : 'bg-yellow-500'
                        )} />
                        <h3 className="text-lg font-semibold text-slate-900">
                          {selectedTestCase.name}
                        </h3>
                      </div>
                      {selectedTestCase.description && (
                        <p className="text-slate-600 text-sm leading-relaxed mb-6">
                          {selectedTestCase.description}
                        </p>
                      )}
                    </div>

                    <div className="space-y-4">
                      {/* Test Information */}
                      <div>
                        <h4 className="text-sm font-medium text-slate-900 mb-3">Details</h4>
                        <div className="space-y-3 text-sm">
                          <div className="flex justify-between">
                            <span className="text-slate-500">Test ID</span>
                            <span className="font-mono text-slate-900 text-xs bg-slate-100 px-2 py-1 rounded">
                              {selectedTestCase.id}
                            </span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-slate-500">Suite</span>
                            <span className="text-slate-900">{selectedTestCase.suite}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-slate-500">Category</span>
                            <span className="text-slate-900">{selectedTestCase.category}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-slate-500">Duration</span>
                            <span className="text-slate-900 font-mono">{selectedTestCase.duration}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-slate-500">Executed</span>
                            <span className="text-slate-900">{selectedTestCase.timestamp}</span>
                          </div>
                        </div>
                      </div>

                      {/* Error Details */}
                      {selectedTestCase.error && (
                        <div>
                          <h4 className="text-sm font-medium text-red-900 mb-3">Error</h4>
                          <div className="bg-red-50 border border-red-100 rounded-lg p-3">
                            <pre className="text-sm text-red-800 font-mono whitespace-pre-wrap leading-relaxed">
                              {selectedTestCase.error}
                            </pre>
                          </div>
                        </div>
                      )}

                      {/* Success Details */}
                      {selectedTestCase.status === 'passed' && (
                        <div>
                          <h4 className="text-sm font-medium text-emerald-900 mb-3">Result</h4>
                          <div className="bg-emerald-50 border border-emerald-100 rounded-lg p-3">
                            <p className="text-emerald-800 text-sm">
                              All assertions passed and the test completed within the expected timeframe.
                            </p>
                          </div>
                        </div>
                      )}

                      {/* Skip Details */}
                      {selectedTestCase.status === 'skipped' && (
                        <div>
                          <h4 className="text-sm font-medium text-yellow-900 mb-3">Status</h4>
                          <div className="bg-yellow-50 border border-yellow-100 rounded-lg p-3">
                            <p className="text-yellow-800 text-sm">
                              This test was skipped during execution, possibly due to conditional logic or test configuration.
                            </p>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                ) : (
                  <div className="flex items-center justify-center h-full">
                    <div className="text-center">
                      <div className="w-12 h-12 bg-slate-100 rounded-lg mx-auto mb-3 flex items-center justify-center">
                        <TestTube2 className="w-6 h-6 text-slate-400" />
                      </div>
                      <p className="text-slate-600 text-sm">Select a test to view details</p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TestCaseModal;
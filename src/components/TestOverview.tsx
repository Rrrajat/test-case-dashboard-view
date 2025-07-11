
import { Badge } from '@/components/ui/badge';
import { CheckCircle2, XCircle, Clock, Activity, Zap } from 'lucide-react';

interface TestOverviewProps {
  passRate: number;
  failRate: number;
  skipRate: number;
  overall: {
    total: number;
    passed: number;
    failed: number;
    skipped: number;
  };
}

const TestOverview = ({ passRate, failRate, skipRate, overall }: TestOverviewProps) => {
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3">
        <div className="p-2 rounded-lg bg-blue-500/10">
          <Activity className="w-5 h-5 text-blue-600" />
        </div>
        <h2 className="text-2xl font-semibold text-foreground">Test Execution Overview</h2>
      </div>
      
      <div className="bg-gradient-to-r from-card via-card/50 to-card backdrop-blur-sm rounded-2xl border border-border/20 p-8 shadow-lg">
        {/* Status Indicators */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div className="text-center space-y-3">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-500/10 border-4 border-green-500/20">
              <CheckCircle2 className="w-8 h-8 text-green-600" />
            </div>
            <div>
              <div className="text-3xl font-bold text-green-600">{overall.passed}</div>
              <div className="text-sm text-muted-foreground">Tests Passed</div>
              <Badge className="mt-2 bg-green-100 text-green-700 border-green-200">
                {passRate}% Success
              </Badge>
            </div>
          </div>
          
          <div className="text-center space-y-3">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-red-500/10 border-4 border-red-500/20">
              <XCircle className="w-8 h-8 text-red-600" />
            </div>
            <div>
              <div className="text-3xl font-bold text-red-600">{overall.failed}</div>
              <div className="text-sm text-muted-foreground">Tests Failed</div>
              <Badge className="mt-2 bg-red-100 text-red-700 border-red-200">
                {failRate}% Failed
              </Badge>
            </div>
          </div>
          
          <div className="text-center space-y-3">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-yellow-500/10 border-4 border-yellow-500/20">
              <Clock className="w-8 h-8 text-yellow-600" />
            </div>
            <div>
              <div className="text-3xl font-bold text-yellow-600">{overall.skipped}</div>
              <div className="text-sm text-muted-foreground">Tests Skipped</div>
              <Badge className="mt-2 bg-yellow-100 text-yellow-700 border-yellow-200">
                {skipRate}% Skipped
              </Badge>
            </div>
          </div>
        </div>

        {/* Progress Visualization */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold text-foreground">Execution Progress</h3>
            <div className="flex items-center gap-2">
              <Zap className="w-4 h-4 text-primary" />
              <span className="text-sm text-muted-foreground">Overall Health: {passRate}%</span>
            </div>
          </div>
          
          {/* Modern Progress Bar */}
          <div className="relative">
            <div className="w-full bg-muted/30 rounded-full h-6 overflow-hidden backdrop-blur-sm">
              <div className="flex h-full">
                <div 
                  className="bg-gradient-to-r from-green-500 to-green-400 transition-all duration-1000 ease-out flex items-center justify-center"
                  style={{ width: `${passRate}%` }}
                >
                  {passRate > 15 && (
                    <span className="text-xs font-medium text-white">{passRate}%</span>
                  )}
                </div>
                <div 
                  className="bg-gradient-to-r from-red-500 to-red-400 transition-all duration-1000 ease-out flex items-center justify-center"
                  style={{ width: `${failRate}%` }}
                >
                  {failRate > 10 && (
                    <span className="text-xs font-medium text-white">{failRate}%</span>
                  )}
                </div>
                <div 
                  className="bg-gradient-to-r from-yellow-500 to-yellow-400 transition-all duration-1000 ease-out flex items-center justify-center"
                  style={{ width: `${skipRate}%` }}
                >
                  {skipRate > 8 && (
                    <span className="text-xs font-medium text-white">{skipRate}%</span>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Legend */}
          <div className="flex flex-wrap gap-6 pt-4">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-gradient-to-r from-green-500 to-green-400"></div>
              <span className="text-sm font-medium text-foreground">Passed ({overall.passed})</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-gradient-to-r from-red-500 to-red-400"></div>
              <span className="text-sm font-medium text-foreground">Failed ({overall.failed})</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-gradient-to-r from-yellow-500 to-yellow-400"></div>
              <span className="text-sm font-medium text-foreground">Skipped ({overall.skipped})</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestOverview;

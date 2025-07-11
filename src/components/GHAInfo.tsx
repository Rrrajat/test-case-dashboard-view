
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { GitBranch, Play, CheckCircle2, XCircle, Clock, AlertCircle, Calendar, User } from 'lucide-react';

interface GHARunInfo {
  runId: string;
  workflowName: string;
  branch: string;
  environment: string;
  status: 'success' | 'failure' | 'in_progress' | 'pending';
  progress: number;
  startTime: string;
  duration: string;
  triggeredBy: string;
  commitHash: string;
  commitMessage: string;
}

interface GHAInfoProps {
  runs: GHARunInfo[];
}

const GHAInfo = ({ runs }: GHAInfoProps) => {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'success':
        return 'bg-green-100 text-green-700 border-green-200';
      case 'failure':
        return 'bg-red-100 text-red-700 border-red-200';
      case 'in_progress':
        return 'bg-blue-100 text-blue-700 border-blue-200';
      case 'pending':
        return 'bg-yellow-100 text-yellow-700 border-yellow-200';
      default:
        return 'bg-gray-100 text-gray-700 border-gray-200';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'success':
        return <CheckCircle2 className="w-4 h-4 text-green-600" />;
      case 'failure':
        return <XCircle className="w-4 h-4 text-red-600" />;
      case 'in_progress':
        return <Play className="w-4 h-4 text-blue-600" />;
      case 'pending':
        return <Clock className="w-4 h-4 text-yellow-600" />;
      default:
        return <AlertCircle className="w-4 h-4 text-gray-600" />;
    }
  };

  const getProgressColor = (status: string) => {
    switch (status) {
      case 'success':
        return 'bg-green-500';
      case 'failure':
        return 'bg-red-500';
      case 'in_progress':
        return 'bg-blue-500';
      case 'pending':
        return 'bg-yellow-500';
      default:
        return 'bg-gray-500';
    }
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2">
        <GitBranch className="w-6 h-6 text-gray-700" />
        <h2 className="text-2xl font-semibold text-gray-900">GitHub Actions</h2>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {runs.map((run, index) => (
          <Card key={index} className="border-0 shadow-lg hover-scale transition-all duration-200">
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <CardTitle className="text-lg font-semibold text-gray-900 flex items-center gap-2">
                  {getStatusIcon(run.status)}
                  {run.workflowName}
                </CardTitle>
                <Badge className={getStatusColor(run.status)}>
                  {run.status.replace('_', ' ')}
                </Badge>
              </div>
              <div className="flex items-center gap-4 text-sm text-gray-600">
                <div className="flex items-center gap-1">
                  <GitBranch className="w-3 h-3" />
                  <span>{run.branch}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Calendar className="w-3 h-3" />
                  <span>{run.startTime}</span>
                </div>
              </div>
            </CardHeader>
            
            <CardContent className="space-y-4">
              {/* Run Details */}
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="text-gray-500">Run ID:</span>
                  <div className="font-mono text-xs bg-gray-100 px-2 py-1 rounded mt-1">
                    {run.runId}
                  </div>
                </div>
                <div>
                  <span className="text-gray-500">Environment:</span>
                  <div className="font-medium mt-1">{run.environment}</div>
                </div>
              </div>

              {/* Progress Bar */}
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Progress</span>
                  <span className="text-gray-900 font-medium">{run.progress}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className={`h-full rounded-full transition-all duration-500 ${getProgressColor(run.status)}`}
                    style={{ width: `${run.progress}%` }}
                  ></div>
                </div>
              </div>

              {/* Additional Info */}
              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2">
                  <User className="w-3 h-3 text-gray-500" />
                  <span className="text-gray-600">Triggered by:</span>
                  <span className="font-medium">{run.triggeredBy}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-3 h-3 text-gray-500" />
                  <span className="text-gray-600">Duration:</span>
                  <span className="font-medium">{run.duration}</span>
                </div>
              </div>

              {/* Commit Info */}
              <div className="border-t pt-3">
                <div className="text-xs text-gray-500 mb-1">Latest Commit</div>
                <div className="font-mono text-xs bg-gray-100 px-2 py-1 rounded mb-2">
                  {run.commitHash}
                </div>
                <div className="text-sm text-gray-700 line-clamp-2">
                  {run.commitMessage}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default GHAInfo;

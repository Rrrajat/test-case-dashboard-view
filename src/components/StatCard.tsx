
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

interface StatCardProps {
  title: string;
  value: number;
  percentage?: number;
  icon: React.ReactNode;
  color: 'blue' | 'green' | 'red' | 'yellow';
  subtitle: string;
}

const StatCard = ({ title, value, percentage, icon, color, subtitle }: StatCardProps) => {
  const colorClasses = {
    blue: {
      bg: 'bg-blue-50',
      text: 'text-blue-600',
      border: 'border-blue-200',
      badge: 'bg-blue-100 text-blue-700'
    },
    green: {
      bg: 'bg-green-50',
      text: 'text-green-600',
      border: 'border-green-200',
      badge: 'bg-green-100 text-green-700'
    },
    red: {
      bg: 'bg-red-50',
      text: 'text-red-600',
      border: 'border-red-200',
      badge: 'bg-red-100 text-red-700'
    },
    yellow: {
      bg: 'bg-yellow-50',
      text: 'text-yellow-600',
      border: 'border-yellow-200',
      badge: 'bg-yellow-100 text-yellow-700'
    }
  };

  const colors = colorClasses[color];

  return (
    <Card className={cn("border-0 shadow-lg hover-scale transition-all duration-200", colors.bg, colors.border)}>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium text-gray-700">{title}</CardTitle>
        <div className={colors.text}>
          {icon}
        </div>
      </CardHeader>
      <CardContent>
        <div className="flex items-center justify-between">
          <div>
            <div className="text-3xl font-bold text-gray-900">{value}</div>
            <p className="text-xs text-gray-600 mt-1">{subtitle}</p>
          </div>
          {percentage !== undefined && (
            <Badge className={cn("text-xs", colors.badge)}>
              {percentage}%
            </Badge>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default StatCard;

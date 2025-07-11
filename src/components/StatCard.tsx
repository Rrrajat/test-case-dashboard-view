
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
      bg: 'bg-gradient-to-br from-blue-50 to-blue-100/50',
      text: 'text-blue-600',
      border: 'border-blue-200/50',
      badge: 'bg-blue-100 text-blue-700 border-blue-200',
      iconBg: 'bg-blue-500/10'
    },
    green: {
      bg: 'bg-gradient-to-br from-green-50 to-green-100/50',
      text: 'text-green-600',
      border: 'border-green-200/50',
      badge: 'bg-green-100 text-green-700 border-green-200',
      iconBg: 'bg-green-500/10'
    },
    red: {
      bg: 'bg-gradient-to-br from-red-50 to-red-100/50',
      text: 'text-red-600',
      border: 'border-red-200/50',
      badge: 'bg-red-100 text-red-700 border-red-200',
      iconBg: 'bg-red-500/10'
    },
    yellow: {
      bg: 'bg-gradient-to-br from-yellow-50 to-yellow-100/50',
      text: 'text-yellow-600',
      border: 'border-yellow-200/50',
      badge: 'bg-yellow-100 text-yellow-700 border-yellow-200',
      iconBg: 'bg-yellow-500/10'
    }
  };

  const colors = colorClasses[color];

  return (
    <Card className={cn(
      "border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 backdrop-blur-sm",
      colors.bg,
      colors.border
    )}>
      <CardHeader className="flex flex-row items-center space-y-0 pb-3">
        <div className="flex-1">
          <CardTitle className="text-sm font-medium text-muted-foreground uppercase tracking-wide">
            {title}
          </CardTitle>
        </div>
        <div className={cn("p-2 rounded-lg", colors.iconBg, colors.text)}>
          {icon}
        </div>
      </CardHeader>
      <CardContent className="space-y-3">
        <div className="flex items-end justify-between">
          <div className="text-3xl font-bold text-foreground">{value.toLocaleString()}</div>
          {percentage !== undefined && (
            <Badge className={cn("text-xs font-semibold", colors.badge)}>
              {percentage}%
            </Badge>
          )}
        </div>
        <p className="text-sm text-muted-foreground">{subtitle}</p>
      </CardContent>
    </Card>
  );
};

export default StatCard;


import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { CheckCircle2, XCircle, Clock, Folder } from 'lucide-react';

interface Category {
  name: string;
  total: number;
  passed: number;
  failed: number;
  skipped: number;
}

interface CategoryBreakdownProps {
  categories: Category[];
}

const CategoryBreakdown = ({ categories }: CategoryBreakdownProps) => {
  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2">
        <Folder className="w-6 h-6 text-gray-700" />
        <h2 className="text-2xl font-semibold text-gray-900">Category Breakdown</h2>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {categories.map((category, index) => {
          const passRate = Math.round((category.passed / category.total) * 100);
          const failRate = Math.round((category.failed / category.total) * 100);
          const skipRate = Math.round((category.skipped / category.total) * 100);
          
          return (
            <Card key={index} className="border-0 shadow-lg hover-scale transition-all duration-200">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg font-semibold text-gray-900">
                    {category.name}
                  </CardTitle>
                  <Badge variant="outline" className="text-sm">
                    {category.total} tests
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                {/* Stats Row */}
                <div className="grid grid-cols-3 gap-4">
                  <div className="text-center">
                    <div className="flex items-center justify-center gap-1 mb-1">
                      <CheckCircle2 className="w-4 h-4 text-green-500" />
                      <span className="text-sm font-medium text-gray-600">Passed</span>
                    </div>
                    <div className="text-2xl font-bold text-green-600">{category.passed}</div>
                    <div className="text-xs text-gray-500">{passRate}%</div>
                  </div>
                  
                  <div className="text-center">
                    <div className="flex items-center justify-center gap-1 mb-1">
                      <XCircle className="w-4 h-4 text-red-500" />
                      <span className="text-sm font-medium text-gray-600">Failed</span>
                    </div>
                    <div className="text-2xl font-bold text-red-600">{category.failed}</div>
                    <div className="text-xs text-gray-500">{failRate}%</div>
                  </div>
                  
                  <div className="text-center">
                    <div className="flex items-center justify-center gap-1 mb-1">
                      <Clock className="w-4 h-4 text-yellow-500" />
                      <span className="text-sm font-medium text-gray-600">Skipped</span>
                    </div>
                    <div className="text-2xl font-bold text-yellow-600">{category.skipped}</div>
                    <div className="text-xs text-gray-500">{skipRate}%</div>
                  </div>
                </div>
                
                {/* Progress Bar */}
                <div className="space-y-2">
                  <div className="flex justify-between text-sm text-gray-600">
                    <span>Success Rate</span>
                    <span>{passRate}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
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
                </div>
                
                {/* Status Indicators */}
                <div className="flex flex-wrap gap-2">
                  <div className="flex items-center gap-1">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-xs text-gray-600">Passed</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                    <span className="text-xs text-gray-600">Failed</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                    <span className="text-xs text-gray-600">Skipped</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default CategoryBreakdown;

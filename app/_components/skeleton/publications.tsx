import { Card, CardHeader } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';

export default function PublicationsSkeleton() {
  return (
    <div className="space-y-6">
      <div>
        <Skeleton className="h-6 w-40" />
        <Skeleton className="h-4 w-64 mt-1" />
      </div>

      <div className="space-y-6">
        {[...Array(4)].map((_, i) => (
          <Card key={i}>
            <CardHeader>
              <div className="flex justify-between flex-col sm:flex-row items-start gap-3">
                <div className="flex items-start gap-3 w-full">
                  <Skeleton className="w-5 h-5 rounded-full mt-0.5 flex-shrink-0" />
                  <div className="space-y-2 w-full">
                    <Skeleton className="h-5 w-3/4" />
                    <Skeleton className="h-4 w-40" />
                  </div>
                </div>
                <div className="flex sm:flex-col items-center sm:items-end gap-2 flex-shrink-0">
                  <Skeleton className="h-5 w-20 rounded-full" />
                  <Skeleton className="h-4 w-10" />
                </div>
              </div>
            </CardHeader>
          </Card>
        ))}
      </div>
    </div>
  );
}

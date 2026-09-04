import { Card, CardContent } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';

export default function JourneySkeleton() {
  return (
    <div className="space-y-14">
      {/* Intro */}
      <div className="space-y-5 max-w-2xl">
        <Skeleton className="h-3 w-16" />
        <Skeleton className="h-8 w-40" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-2/3" />
        <div className="flex flex-wrap gap-2">
          {[...Array(6)].map((_, i) => (
            <Skeleton key={i} className="h-8 w-24 rounded-full" />
          ))}
        </div>
      </div>

      {/* Timeline */}
      <div className="relative pl-10 sm:pl-12">
        <div className="absolute left-[15px] sm:left-[17px] top-2 bottom-2 w-px bg-border" />
        <div className="space-y-10">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="relative">
              <Skeleton className="absolute -left-10 sm:-left-12 top-0 size-8 sm:size-9 rounded-full" />
              <Skeleton className="h-3 w-16 mb-2" />
              <Skeleton className="h-5 w-56 mb-2" />
              <Skeleton className="h-4 w-full" />
            </div>
          ))}
        </div>
      </div>

      {/* Moments */}
      <div className="space-y-5">
        <div className="space-y-2">
          <Skeleton className="h-3 w-20" />
          <Skeleton className="h-6 w-28" />
          <Skeleton className="h-4 w-48" />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {[...Array(4)].map((_, i) => (
            <Card key={i} className="overflow-hidden">
              <CardContent className="p-4 sm:p-5 space-y-3">
                <Skeleton className="h-4 w-32" />
                <div className="grid grid-cols-3 gap-2">
                  <Skeleton className="aspect-square w-full rounded-md" />
                  <Skeleton className="aspect-square w-full rounded-md" />
                  <Skeleton className="aspect-square w-full rounded-md" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}

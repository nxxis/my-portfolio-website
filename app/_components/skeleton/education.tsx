import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';
import React from 'react';

export default function EducationSkeleton() {
  return (
    <div className="space-y-6">
      {/* Section heading */}
      <div>
        <Skeleton className="h-6 w-40" />
        <Skeleton className="h-4 w-64 mt-1" />
      </div>

      {/* Education cards */}
      <div className="space-y-6">
        {[...Array(3)].map((_, i) => (
          <Card key={i}>
            <CardHeader className="pb-2">
              <div className="flex justify-between flex-col sm:flex-row items-start gap-2">
                <div className="space-y-2">
                  {/* Degree / Program */}
                  <CardTitle className="text-lg">
                    <Skeleton className="h-5 w-56" />
                  </CardTitle>
                  {/* Institution */}
                  <div className="text-sm text-muted-foreground">
                    <Skeleton className="h-4 w-40" />
                  </div>
                </div>
                {/* Dates / Location */}
                <div className="space-y-1 sm:text-right text-sm text-muted-foreground">
                  <Skeleton className="h-4 w-28" />
                  <Skeleton className="h-4 w-24" />
                </div>
              </div>
            </CardHeader>

            <CardContent className="space-y-4">
              {/* Meta row: GPA / Honors */}
              <div className="flex flex-wrap items-center gap-2">
                <Skeleton className="h-5 w-16 rounded-full" />
                <Skeleton className="h-5 w-28 rounded-full" />
                <Skeleton className="h-5 w-24 rounded-full" />
              </div>

              {/* Summary lines */}
              <div className="space-y-2">
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-5/6" />
              </div>

              {/* Relevant coursework */}
              <div className="space-y-2">
                <div className="text-sm font-medium">
                  <Skeleton className="h-4 w-32" />
                </div>
                <ul className="space-y-2">
                  {[...Array(3)].map((__, j) => (
                    <li key={j} className="flex items-center space-x-2">
                      <Skeleton className="w-4 h-4 rounded-full" />
                      <Skeleton className="h-3 w-3/4" />
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tech / Clubs chips */}
              <div className="flex flex-wrap gap-2">
                {[...Array(5)].map((__, k) => (
                  <Skeleton key={k} className="h-6 w-16 rounded-full" />
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}

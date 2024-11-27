import React from "react";
import { Button } from "@/components/ui/button";
import { Table } from "@tanstack/react-table";
import { ITEM_PER_PAGE } from "@/lib/setting";
import { useRouter } from "next/navigation";

export default function Pagination({
  page,
  count,
}: {
  page: number;
  count: number;
}) {
  const router = useRouter();
  const hasPrev = ITEM_PER_PAGE * (page - 1) > 0;
  const hasNext = ITEM_PER_PAGE * (page - 1) + ITEM_PER_PAGE < count;
  const changePage = (newPage: number) => {
    const params = new URLSearchParams(window.location.search);
    params.set("page", newPage.toString());
    router.push(`${window.location.pathname}?${params}`);
  };
  return (
    <div className="flex items-center justify-between space-x-2 py-4">
      <Button
        variant="outline"
        size="sm"
        onClick={() => changePage(page - 1)}
        disabled={!hasPrev}>
        Previous
      </Button>
      <div className="flex flex-row gap-1">
        {Array.from({ length: Math.ceil(count / ITEM_PER_PAGE) }).map(
          (_, i) => {
            const pageIndex = i + 1;
            return (
              <Button
                key={i}
                variant="outline"
                size="sm"
                disabled={page === pageIndex}
                onClick={() => changePage(pageIndex)}>
                {pageIndex}
              </Button>
            );
          }
        )}
      </div>
      <Button
        variant="outline"
        size="sm"
        onClick={() => changePage(page + 1)}
        disabled={!hasNext}>
        Next
      </Button>
    </div>
  );
}

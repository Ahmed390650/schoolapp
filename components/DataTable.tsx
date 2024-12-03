"use client";
import {
  ColumnDef,
  ColumnFiltersState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getSortedRowModel,
  SortingState,
  useReactTable,
} from "@tanstack/react-table";
import { getFacetedUniqueValues, TableOptions } from "@tanstack/table-core";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { MoreHorizontal } from "lucide-react";
import { useState } from "react";
import Pagination from "@/components/ui/Pagination";
import { useRouter } from "next/navigation";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Button } from "./ui/button";
import { useUser } from "@clerk/nextjs";
interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
  count: number;
  page: number;
  type?: string;
  ReactTable?: TableOptions<TData>;
  handleDelete?: (id: any) => void;
}
export function DataTable<TData, TValue>({
  columns,
  data,
  count,
  page,
  type,
  ReactTable,
  handleDelete,
}: DataTableProps<TData, TValue>) {
  const { user } = useUser();
  const [sorting, setSorting] = useState<SortingState>([]);
  const router = useRouter();
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
  const actions: ColumnDef<TData> = {
    id: "actions",
    cell: ({ row, column, table }) => {
      const id = row.id;
      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem
              onClick={() => {
                const page = window.location.pathname;
                router.push(`${page}/${row.id}`);
              }}>
              View
            </DropdownMenuItem>
            {user?.publicMetadata?.role === "admin" ? (
              <div>
                <DropdownMenuSeparator />
                <DropdownMenuItem className="text-white bg-red-500 font-bold">
                  delete
                </DropdownMenuItem>
                <DropdownMenuItem>update</DropdownMenuItem>
              </div>
            ) : (
              ""
            )}
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  };

  const col = [...columns, actions];
  const table = useReactTable({
    data,
    columns: col,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    onSortingChange: setSorting,
    getSortedRowModel: getSortedRowModel(),
    ...ReactTable,
    state: {
      sorting,
      columnFilters,
    },
    debugTable: true,
    debugHeaders: true,
    debugColumns: false,
    getFilteredRowModel: getFilteredRowModel(),
    getFacetedUniqueValues: getFacetedUniqueValues(),
  });
  if (!user) return null;
  const role = user?.publicMetadata.role;
  const currentUser = user?.id;
  const handleSearch = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      const params = new URLSearchParams(window.location.search);
      params.set("search", (e.target as HTMLInputElement).value.toString());
      router.push(`${window.location.pathname}?${params}`);
    }
  };
  return (
    <div>
      <div className="rounded-md border">
        <div className="py-1 rounded-sm flex items-center justify-between  m-2">
          <Input
            placeholder="Search..."
            onKeyDown={handleSearch}
            className="max-w-sm"
          />
        </div>
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                      {/* {header.column.getCanFilter() ? (
                        <ExcelFilter column={header.column} />
                      ) : null} */}
                    </TableHead>
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row, i) => (
                <TableRow
                  key={row.id}
                  className={`${i % 2 == 1 && "bg-gray-300"}`}
                  data-state={row.getIsSelected() && "selected"}>
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={col.length} className="h-24 text-center">
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <Pagination count={count} page={page} />
    </div>
  );
}

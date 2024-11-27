import React, { useMemo, useState } from "react";
import { Column } from "@tanstack/react-table";

export const ExcelFilter: React.FC<{ column: Column<any, unknown> }> = ({
  column,
}) => {
  const columnFilterValue = column.getFilterValue() as string;
  const sortedUniqueValues = useMemo(
    () =>
      Array.from(column.getFacetedUniqueValues().keys())
        .filter((value) => value != null) // Exclude undefined or null
        .map((value) => value.toString()) // Safely convert to string
        .sort(),
    [column.getFacetedUniqueValues()]
  );

  const [searchValue, setSearchValue] = useState("");

  const filteredValues = sortedUniqueValues.filter((value) =>
    value.toLowerCase().includes(searchValue.toLowerCase())
  );

  return (
    <div style={styles.container}>
      <select
        value={columnFilterValue ?? ""}
        onChange={(e) => column.setFilterValue(e.target.value || undefined)}
        style={styles.select}>
        <option value="">All</option>
        {filteredValues.map((value, idx) => (
          <option key={idx} value={value}>
            {value}
          </option>
        ))}
      </select>
    </div>
  );
};

const styles = {
  container: {
    border: "1px solid #ddd",
    borderRadius: "5px",
    padding: "10px",
    backgroundColor: "#f9f9f9",
    boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
    fontFamily: "Arial, sans-serif",
  },
  searchInput: {
    width: "100%",
    padding: "5px",
    marginBottom: "10px",
    borderRadius: "4px",
    border: "1px solid #ccc",
  },
  select: {
    width: "100%",
    padding: "5px",
    borderRadius: "4px",
    border: "1px solid #ccc",
  },
};

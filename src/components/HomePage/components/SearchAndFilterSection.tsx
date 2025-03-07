import {
  Box,
  FormControl,
  MenuItem,
  SelectChangeEvent,
  Typography,
} from "@mui/material";
import { SearchAndFilterSectionProps } from "@/utils/types";
import { useCallback } from "react";
import React from "react";
import {
  StyledInputLabel,
  StyledSelect,
  StyledTextField,
} from "@/styles/muiStyles";

const SearchAndFilterSection: React.FC<SearchAndFilterSectionProps> = ({
  categories,
  searchTerm,
  selectedCategory,
  selectedYear,
  selectedRating,
  onSearchChange,
  onCategoryChange,
  onYearChange,
  onRatingChange,
}) => {
  const handleSearchChangeLocal = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      onSearchChange(event);
    },
    [onSearchChange]
  );
  const handleYearChangeLocal = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      onYearChange(event);
    },
    [onYearChange]
  );
  const handleCategoryChangeLocal = useCallback(
    (event: SelectChangeEvent<unknown>) => {
      onCategoryChange(event);
    },
    [onCategoryChange]
  );

  const handleRatingChangeLocal = useCallback(
    (event: SelectChangeEvent<unknown>) => {
      onRatingChange(event);
    },
    [onRatingChange]
  );

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        flexDirection: { xs: "column", md: "row" },
        alignItems: "center",
        width: "100%",
        maxWidth: "1600px",
        paddingY: 3,
        boxSizing: "border-box",
      }}
    >
      <Typography variant="h4">Wyszukaj filmy</Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: { xs: "center", md: "flex-start" },
          mt: { xs: 2, md: 0 },
          justifyContent: { xs: "center", md: "flex-start" },
          width: "auto",
          flexWrap: "wrap",
          gap: 2,
        }}
      >
        <Box>
          <StyledTextField
            fullWidth
            label="Szukaj filmu"
            variant="outlined"
            value={searchTerm}
            sx={{ width: { xs: "250px", md: "200px" } }}
            onChange={handleSearchChangeLocal}
          />
        </Box>
        <Box sx={{ color: "#fff", width: { xs: "250px", md: "200px" } }}>
          <FormControl fullWidth>
            <StyledInputLabel>Kategoria</StyledInputLabel>
            <StyledSelect
              value={selectedCategory === null ? "" : selectedCategory}
              label="Kategoria"
              onChange={handleCategoryChangeLocal}
            >
              <MenuItem value="">
                <em>Wszystkie</em>
              </MenuItem>
              {categories.slice(0, 10).map((category) => (
                <MenuItem key={category.id} value={category.id}>
                  {category.name}
                </MenuItem>
              ))}
            </StyledSelect>
          </FormControl>
        </Box>
        <StyledTextField
          label="Rok"
          variant="outlined"
          value={selectedYear || ""}
          onChange={handleYearChangeLocal}
          sx={{ width: { xs: "250px", md: "100px" } }}
        />
        <FormControl sx={{ width: { xs: "250px", md: "100px" } }}>
          <StyledInputLabel>Ocena</StyledInputLabel>
          <StyledSelect
            value={selectedRating === null ? "" : selectedRating}
            label="Ocena"
            onChange={handleRatingChangeLocal}
          >
            <MenuItem value="">
              <em>Wszystkie</em>
            </MenuItem>
            {[5, 6, 7, 8, 9].map((rating) => (
              <MenuItem key={rating} value={rating}>
                {rating}.0+
              </MenuItem>
            ))}
          </StyledSelect>
        </FormControl>
      </Box>
    </Box>
  );
};

export default SearchAndFilterSection;

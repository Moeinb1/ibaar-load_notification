import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

let initialState = {
  value: 0,
};

const getDataFromApi = createAsyncThunk("test/getFromApi", async () => {
  const response = "some Api calling";
  return response;
});

export const testSlice = createSlice({
  name: "test",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getDataFromApi.fulfilled, (state, action) => {
      state.value = action.payload;
    });
  },
});
export const { testDispatcher } = testSlice.actions;
export { getDataFromApi };
export default testSlice.reducer;

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

let initialState = {
  permissions: {
    test: "",
    // test2: "",
    test3: "",
    test4: "",
    test45: "",
    test46: "",
    test5: "",
    test6: "",
    test67: "",
    test68: "",
    test6881: "",
    test682: "",
    test683: "",
    test69: "",
  },
};

const getDataFromApi = createAsyncThunk("test/getFromApi", async () => {
  const response = "some Api calling";

  return response;
});

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addPermission: (state) => {
      state.permissions = { ...state.permissions, test4: "read" };
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getDataFromApi.fulfilled, (state, action) => {
      state.value = action.payload;
    });
  },
});
export const { addPermission } = userSlice.actions;
export { getDataFromApi };
export default userSlice.reducer;

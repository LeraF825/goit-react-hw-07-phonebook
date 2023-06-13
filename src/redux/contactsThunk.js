import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://648846650e2469c038fd6280.mockapi.io';

export const fetchContacts = createAsyncThunk(
    'contacts',
    async (_, thunkAPI) => {
      try {
        const response = await axios('/contacts');
       
        return response.data;
      } catch (error) {
    
        return thunkAPI.rejectWithValue(error.message);
      }
    }
  );
  
  export const addContact = createAsyncThunk(
    'contacts/addContact',
    async ({ name, phone }, thunkAPI) => {
      try {
        const response = await axios.post('/contacts', { name, phone });
       
  
        return response.data;
      } catch (error) {
        
        return thunkAPI.rejectWithValue(error.message);
      }
    }
  );
  
  export const deleteContact = createAsyncThunk(
    'contacts/deleteContact',
    async (id, thunkAPI) => {
      try {
        const response = await axios.delete(`/contacts/${id}`);
        return response.data;
      } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
      }
    }
  );
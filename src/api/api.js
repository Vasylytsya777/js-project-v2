import { data } from '../data/data';
import axios from 'axios';
import {camelCase} from 'lodash';
const token = localStorage.getItem('accessToken');
axios.defaults.baseURL = 'https://callboard-backend.herokuapp.com';
axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
 
export const getCategories = async () => {
  try {
    if (data.calls.categories.length) {
      return data.calls.categories;
    } else {
      const result = await axios.get(
        'https://callboard-backend.herokuapp.com/call/categories',
      );
      data.calls.categories = [...result.data.map(item => camelCase(item))];
      result.data.forEach(item => (data.calls.specificCategory[item] = []));
      return result.data;
    }
  } catch (error) {
    console.log(error);
  }
};

export const getRussianCategories = async () => {
  try {
    if (data.calls.russianCategories.length) {
      return data.calls.russianCategories;
    } else {
      const result = await axios.get(
        'https://callboard-backend.herokuapp.com/call/russian-categories',
      );
      data.calls.russianCategories = [...result.data.map(item => item)];
    }
  } catch (error) {
    console.log(error);
  }
};

export const getCategoriesSpesific = async categoryName => {
  try {
    const result = await axios.get(
      `https://callboard-backend.herokuapp.com/call/specific/${categoryName}`,
    );
    data.calls.specificCategory[categoryName] = [...result.data];
    return result.data;
  } catch (error) {
    console.log(error);
  }
};

export const getAds = async () => {
  try {
    if (data.calls.ads.length) {
      console.log('load ads:', data.calls.ads);
      return data.calls.ads;
    } else {
      const res = await axios.get(`/call/ads`);
      data.calls.ads = [...res.data];
      return res.data;
    }
  } catch (error) {
    console.log(error);
  }
};

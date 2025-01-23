import { useState, useEffect } from 'react';
import { loadData, saveData } from '../utils/storage';

export function useStorage<T>(key: string, initialValue: T) {
  const [data, setData] = useState<T>(initialValue);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    loadStoredData();
  }, []);

  const loadStoredData = async () => {
    try {
      const storedData = await loadData<T>(key);
      if (storedData !== null) {
        setData(storedData);
      }
    } catch (err) {
      setError('Failed to load data');
    } finally {
      setLoading(false);
    }
  };

  const updateData = async (newData: T) => {
    try {
      await saveData(key, newData);
      setData(newData);
    } catch (err) {
      setError('Failed to save data');
    }
  };

  const resetData = async () => {
    try {
      await saveData(key, initialValue);
      setData(initialValue);
    } catch (err) {
      setError('Failed to reset data');
    }
  };

  return {
    data,
    setData: updateData,
    loading,
    error,
    resetData,
  };
} 
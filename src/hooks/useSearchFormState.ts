import { useState } from 'react';
import { SelectedOptions } from '@/types/api-request-types';

interface SearchParams {
  language: string;
  framework: string;
  fileFormat: string;
}

export const useSearchFormState = () => {
  const [radios, setRadios] = useState<SearchParams>({
    language: '',
    framework: '',
    fileFormat: '',
  });
  const [selectedOptions, setSelectedOptions] = useState<SelectedOptions>({
    auth: '',
    database: '',
    logging: false,
  });

  const handleRadioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {
      target: { name, value },
    } = e;
    setRadios((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleOptionChange = (category: string, value: string) => {
    setSelectedOptions((prev) => ({
      ...prev,
      [category]: value,
    }));
  };

  return {
    radios,
    selectRadios: handleRadioChange,
    selectedOptions,
    selectOptions: handleOptionChange,
  };
};

export interface SelectedOptions {
  auth: string; // "JWT"
  database: string; // "mysql"
  logging: boolean; // true
}

export interface HistoryRequest {
  language: string;
  framework: string;
  file_format: string;
  selected_options: SelectedOptions;
}

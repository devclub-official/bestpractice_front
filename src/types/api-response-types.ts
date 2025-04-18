export type HistoryContent = {
  text_content: string;
  format: '.yaml' | '.json' | '.properties' | '.py';
};

export interface History {
  id: number;
  content: HistoryContent;
  language: string;
  framework: string;
  selected_options: {
    auth: string;
    database: string;
    logging: boolean;
  };
  file_format: string;
  filename: string;
  mime_type: string;
  created_at: string;
  is_bookmarked: boolean;
  title: string | null;
}

export interface ConfigResponse {
  language: string;
  framework: string;
  features: string;
  file_format: string;
  content: string;
  finename: string;
  mime_type: string;
  created_at: string;
  is_bookmarked: boolean;
  bookmark_count: number;
  title: string;
}

export interface HistoryItem {
  id: number;
  language: string;
  framework: string;
  features: string[]; // 문자열 배열로 파싱 필요
  file_format: string;
  content: string; // 문자열 내부에 JSON 코드가 포함되어 있음
  created_at: string;
  is_bookmarked: boolean;
  bookmark_count: number;
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

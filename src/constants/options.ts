export const LANGUAGES = ['JavaScript', 'Python', 'JAVA'];
export const FRAMEWORKS = ['React', 'Spring', 'Django'];
export const FILE_FORMATS = ['yml', 'properties', 'py', 'json'];

export const FUNCTION_OPTIONS = {
  auth: ['JWT 인증', 'OAuth2 인증', '세션 기반 인증'],
  database: ['MySQL', 'PostgreSQL', 'MongoDB', 'SQLite'],
  logging: ['콘솔 로그', '파일 로그', 'Sentry 연동'],
  네트워크: ['CORS 설정', 'HTTPS 설정', 'API rate limiting'],
  이메일: ['SMTP 설정', 'Gmail 연동', '비밀번호 재설정 이메일'],
  '환경 변수 관리': ['.env 사용', '시스템 환경변수 사용'],
  '파일 업로드': ['로컬 파일 저장', 'AWS S3 업로드'],
  '캐시 / 세션 저장소': ['Redis', 'Memcached'],
  '스케줄링 / 비동기 작업': ['Celery (Python)', 'Quartz (Java)', 'cron 설정'],
  'API 문서화': ['Swagger (OpenAPI)', 'Redoc', 'Postman Export'],
  '테스트 환경 구성': ['단위 테스트 환경', '테스트 DB 설정'],
  '배포 관련 설정': ['포트 설정', 'Dockerfile 생성', 'Gunicorn, uvicorn'],
};

export const FUNCTION_LABELS: Record<string, string> = {
  auth: '보안 / 인증',
  database: '데이터베이스',
  logging: '로그 / 에러 관리',
};

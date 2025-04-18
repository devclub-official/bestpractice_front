# 설정 파일 생성기 (Configuration Generator)

이 프로젝트는 초보 개발자가 쉽게 설정 파일을 생성할 수 있도록 도와주는 서비스입니다. 다양한 프로그래밍 언어와 프레임워크에 대한 설정 파일을 AI를 활용하여 자동으로 생성합니다.

## 주요 기능

- 다양한 프로그래밍 언어 지원 (Python, JavaScript, Java 등)
- 여러 프레임워크 지원 (Django, React, Spring 등)
- 다양한 설정 옵션 제공 (인증/보안, 데이터베이스, 네트워크 등)
- JSON, YAML 등 다양한 파일 형식 지원
- 생성된 설정 파일 북마크 및 저장 기능

## 지원 언어 및 프레임워크

### 프로그래밍 언어

- Python
- JavaScript
- Java
- 기타 언어

### 프레임워크

- Django (Python)
- React (JavaScript)
- Spring (Java)
- 기타 프레임워크

## 설정 옵션 카테고리

- 인증/보안 (Authentication/Security)
- 네트워크 (Network)
- 이메일 (Email)
- 환경 변수 (Environment Variables)
- 로깅 (Logging)
- 파일 (File)
- 캐시 (Cache)
- 스케쥴링 (Scheduling)
- 테스트 (Test)
- API 문서화 (API Documentation)
- 데이터베이스 (Database)

## ⚙️ 기술 스택

| 목적 | 기술 |
|------|------|
| UI 구성 | React, TypeScript, Vite |
| 상태 관리 | Recoil |
| 서버 통신 | Axios, React Query |
| 스타일링 | styled-components, Emotion |
| 기타 도구 | ESLint, Prettier, Heroicons |

## 프로젝트 구조

```
src/
├── components/       # 공통 컴포넌트
├── features/         # 도메인 별 UI 구성
├── hooks/            # 커스텀 훅
├── constants/        # 상수
├── styles/           # 전역 스타일, 테마
├── apis/             # API 요청 모음
├── types/            # 전역 타입 정의
├── pages/            # 페이지 구성
└── App.tsx           # 루트 컴포넌트
```

## 🚀 실행 방법

```bash
# 1. 패키지 설치
npm install

# 2. 개발 서버 실행
npm run dev
```

## 커밋 컨벤션
```
feat: 기능 추가
fix: 버그 수정
style: 스타일 변경 (코드 로직 변경 없음)
refactor: 리팩토링
chore: 빌드, 패키지 관련 설정
```

## 향후 개선 예정
- 코드 다운로드 기능
- 마크다운 포맷 뷰어 및 복사 기능
- 기능 카테고리 다국어화
- 다크모드 지원

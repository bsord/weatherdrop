# Weatherdrop

![GitHub Workflow Status](<https://img.shields.io/github/workflow/status/bsord/weatherdrop/Create%20Release(s)?label=Docker%20Build>)
![GitHub top language](https://img.shields.io/github/languages/top/bsord/weatherdrop.svg)
![Docker Pulls](https://img.shields.io/docker/pulls/bsord/weatherdrop.svg)
![GitHub last commit](https://img.shields.io/github/last-commit/bsord/weatherdrop.svg)
![Lines of code](https://img.shields.io/tokei/lines/github/bsord/weatherdrop)
![License](https://img.shields.io/github/license/bsord/weatherdrop.svg?style=flat)

## Getting Started

First, copy env file :

```bash
cp .env-sample .env
```

and set OPEN_WEATHER_API_KEY

Then, run the development server:

```bash
npm install
npm run dev
# or with docker-compose
docker-compose up
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.tsx`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

# Portfolio

A monochrome personal portfolio built with Next.js, TypeScript, Tailwind CSS, Prisma, and Framer Motion.

## Setup

1. Create a PostgreSQL database and set `DATABASE_URL` in your environment.
2. Run Prisma push:

```bash
npx prisma db push
```

3. Seed a project:

```bash
node -e "const { PrismaClient } = require('@prisma/client'); const prisma = new PrismaClient(); prisma.project.create({ data: { slug: 'aurora-dashboard', title: 'Aurora Dashboard', description: 'A compact analytics workspace for product teams.', tags: ['Next.js','Design System'], featured: true } }).then(() => prisma.$disconnect())"
```

4. Start the dev server:

```bash
npm run dev
```

# user_management

Initial setup

```
npm init -y
mkdir apps packages
cd apps
mkdir frontend
mkdir backend
```

### Just a guide to create monorepo projects

create apps and packanges folders

For FE
npx create-next-app . --typescript --tailwind --eslint
For BE
npm init -y
npm install express cors dotenv mongoose bcryptjs jsonwebtoken
Your structure should look like this:
/
├── apps/
│ ├── frontend/ (Next.js app)
│ └── backend/ (Express.js app)
├── packages/ (for shared code)
├── package.json
└── turbo.json

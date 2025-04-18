# Next.js + Clerk Authentication Boilerplate

A modern, production-ready boilerplate for building web applications with Next.js and Clerk authentication.

![Next.js](https://img.shields.io/badge/Next.js-13+-000000?style=for-the-badge&logo=next.js&logoColor=white)
![Clerk](https://img.shields.io/badge/Clerk-Authentication-6C47FF?style=for-the-badge&logo=clerk&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-4.9+-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.3+-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)

## 📋 Features

- ✅ Next.js App Router
- ✅ Clerk Authentication
- ✅ Protected Routes
- ✅ TypeScript
- ✅ Tailwind CSS
- ✅ Responsive Design
- ✅ shadcn/ui Components
- ✅ User Dashboard Example
- ✅ Profile Management

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ and npm/yarn/pnpm
- Clerk account (free tier available)

### Installation

1. Clone this repository:

```bash
git clone https://github.com/DaniHRE/nextjs-clerk-boilerplate.git
cd nextjs-clerk-boilerplate
```

2. Install dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Set up environment variables:

Create a `.env.local` file in the root directory with the following variables:

```
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_publishable_key
CLERK_SECRET_KEY=your_secret_key
```

4. Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## 🔑 Clerk Setup

### Creating a Clerk Application

1. Sign up for a free account at [clerk.com](https://clerk.com)
2. Create a new application from the Clerk dashboard
3. Go to the API Keys section to get your Publishable Key and Secret Key
4. Add these keys to your `.env.local` file as shown above

### Configuring Clerk

You can customize your authentication experience in the Clerk Dashboard:

1. **Authentication methods**: Enable/disable various sign-in methods (email, social logins, etc.)
2. **Email templates**: Customize the emails sent to users
3. **Theme**: Adjust the look and feel of the authentication UI
4. **Webhooks**: Set up webhooks to respond to authentication events

## 📁 Project Structure

```
nextjs-clerk-boilerplate/
├── app/ # Next.js App Router
│   ├── layout.tsx # Root layout with Clerk Provider
│   ├── page.tsx # Home page
│   └── sample/ # Protected sample page
│       └── page.tsx
├── components/ # React components
│   ├── ui/ # shadcn/ui components
│   └── theme-provider.tsx # Theme provider
├── middleware.ts # Clerk authentication middleware
├── public/ # Static assets
└── ... # Other configuration files
```

## 🔒 Authentication Flow

This boilerplate implements authentication using Clerk:

1. The middleware (`middleware.ts`) protects routes based on authentication status
2. Public routes are accessible to all users
3. Protected routes (like `/sample`) require authentication
4. Users are redirected to sign in when trying to access protected routes
5. After authentication, users are redirected back to the requested page

## 🛠️ Customization

### Adding New Protected Routes

1. Create a new page in the `app` directory
2. The middleware will automatically protect it based on the configuration in `middleware.ts`
3. You can access the user data in your components using Clerk's hooks and functions

### Styling

This project uses Tailwind CSS for styling. You can customize the theme in `tailwind.config.ts`.

## 📚 Useful Links

### Next.js Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [App Router Documentation](https://nextjs.org/docs/app)
- [Next.js GitHub Repository](https://github.com/vercel/next.js/)

### Clerk Resources

- [Clerk Documentation](https://clerk.com/docs)
- [Clerk + Next.js Integration](https://clerk.com/docs/nextjs/get-started-with-nextjs)
- [Clerk Dashboard](https://dashboard.clerk.com/)
- [Clerk GitHub Repository](https://github.com/clerkinc/clerk-sdk-node)

### Other Resources

- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [shadcn/ui Documentation](https://ui.shadcn.com/)

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.
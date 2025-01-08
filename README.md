1. Project Overview
You will build a Single Page Application using Next.js and Tailwind CSS, displaying social media posts (aka “social cards”). The site will have:

A main feed page showing multiple cards for each post.
A page with a form that lets users add a new post (username, text, optional media, likes, etc.).
A navigation bar to move between pages.
Like buttons on each post that increment the like count.
A notification/feedback mechanism when a new post is created (success or error).
(Optional extension) A user profile page.
You plan to deploy on GitHub Pages (or Vercel) and keep your code on GitHub, using a simple workflow to lint/build/test on pull requests.

2. Folder Structure
Proposed Next.js folder structure (simplified):

arduino
Copy code
my-social-media/
  ├─ pages/
  │   ├─ index.js          // Feed page
  │   ├─ post.js           // "Add post" form page
  │   └─ profile.js        // (Optional) user profile page
  ├─ components/
  │   ├─ Layout.js         // Main layout with navigation
  │   ├─ Navbar.js         // Navigation bar
  │   ├─ PostCard.js       // Displays a post
  │   ├─ LikeButton.js     // Displays a like icon & count
  │   ├─ Notification.js   // Success/error messages
  │   └─ ...
  ├─ styles/
  │   └─ globals.css       // Tailwind base imports
  ├─ public/               // Any static images or icons
  ├─ .github/
  │   └─ workflows/
  │       └─ ci.yml        // GitHub Actions config for build/test
  ├─ package.json
  └─ tailwind.config.js
Where each file “lives”
pages/index.js: Renders the main feed (lists all posts using PostCard).
pages/post.js: Contains the form to create a new post, including username, text, optional image URL, etc.
pages/profile.js (optional extension): Shows extra user info, profile picture, etc.
components/Layout.js: Wraps each page with a consistent layout (could contain <Navbar />).
components/Navbar.js: A top navigation menu with links to “Feed” and “Post” pages.
components/PostCard.js: Displays a single “social card” with username, text, like count, etc.
components/LikeButton.js: On click, increments the like count.
components/Notification.js: Renders success/fail messages when a new post is submitted.
3. Task Assignments
Below is a suggested division of labor among the three team members so that everyone’s work is reasonably independent.

Person A: Set up Next.js & Tailwind, Layout & Navigation
Initialize the Project

Create a new Next.js app (npx create-next-app).
Configure Tailwind CSS (generate tailwind.config.js and import it in globals.css).
Set up a basic .gitignore.
Commit/push the initial project to GitHub.
Create Layout & Navbar

In components/Layout.js, create a basic layout structure with a <main> container.
In components/Navbar.js, create a top nav with Tailwind styling. Add links (e.g., Feed → /, Post → /post, Profile → /profile if used).
Ensure these are used in _app.js or each page so the navigation is consistent.
GitHub Workflow (CI/CD) Setup

In the .github/workflows folder, create ci.yml (or similarly named file).
Configure your chosen Node.js version.
Run npm install, npm run build, and possibly npm run lint.
Make sure the workflow triggers on pull requests and main branch pushes.
Deliverables for Person A: A functional Next.js setup with Tailwind, a working navbar, plus a minimal GitHub Actions config.

Person B: Build the Feed & PostCard Components
Create Data Structure or State

Decide how you’ll store posts (use React useState in index.js, or a simple context if you want global state).
Keep an array of post objects: { id, username, text, imageUrl?, likes }.
PostCard Component

In components/PostCard.js, build a card that takes props (username, text, image, likes).
Style it with Tailwind to look like a simple social media post.
LikeButton Component

Accepts current like count and a callback to increment.
When clicked, calls the callback to update the like count in parent state.
Use a heart icon or thumbs-up icon from a Tailwind-compatible icon library (Heroicons, Font Awesome, etc.).
pages/index.js (Feed)

Map over the array of posts, rendering a <PostCard> for each.
Provide the like increment function to the card or pass it directly to LikeButton.
Deliverables for Person B: A functional feed on the homepage (/) that displays all posts in PostCards, with working like increment.

Person C: Create the Form & Notifications
pages/post.js (New Post Form)

Create a form with fields for:
username (text input)
text (textarea)
imageUrl (text input, optional if you want images)
On submission, validate the form (no empty username or text).
If valid, push the new post into the shared post array.
If invalid, show an error notification.
Notification Component

Create a <Notification> that can show success or error messages.
Use Tailwind to show green for success, red for error, or hide when not applicable.
Form Reset / Confirmation

If submission is successful, show a success message, reset the form fields.
If submission fails (validation error), show an error message.
Hooking Into the Feed State

Possibly pass a function down from the parent or use context so that when a new post is created, it updates the feed array in index.js.
Deliverables for Person C: A working form page with real-time notifications for success/error, that updates the feed.

4. Collaboration & Avoiding Merge Conflicts
Branching Strategy

Each person creates a feature branch from main for their tasks (e.g., feature/layout-navbar, feature/feed-postcards, feature/form-notifications).
Commit regularly, push to the remote branch on GitHub, then open a Pull Request when the feature is ready.
Pull Request Reviews

At least one other team member reviews each PR before merging to main.
Resolve any conflicts in the PR branch before merging.
Directory/File Boundaries

Person A primarily touches Layout.js, Navbar.js, tailwind.config.js, .github/workflows/ci.yml, and sets up _app.js.
Person B primarily edits index.js, PostCard.js, LikeButton.js, and a possible posts context or array.
Person C primarily edits post.js, Notification.js, and logic for updating posts state or context.
This way, your code changes will only minimally overlap, reducing the chance of merge conflicts.

5. Next Steps
Kickoff

Person A: Generate Next.js app, set up Tailwind, push an initial commit to GitHub.
Ensure the .github/workflows/ci.yml is recognized by GitHub.
Implement Features in Parallel

Once the skeleton is in place, Person B can start on the feed and PostCard, Person C can create the post form and notifications.
Testing & Demo

After merging each feature branch, pull the latest from main locally, run npm run dev, and test that everything still works together.
If you want to set up storybook or other testing frameworks, do so as a future enhancement.
Deployment

Decide if you want to deploy on GitHub Pages or Vercel. For GitHub Pages, you may need to configure a custom script for static export. For Vercel, connect the repository to Vercel directly.
6. Wrap-Up
By following this plan:

Each team member has a clear domain (layout/nav, feed/cards, form/notifications).
You will utilize Next.js pages for routing, Tailwind for styling, and a GitHub workflow for CI.
You can optionally extend the project with user profiles or more reaction types as time allows.

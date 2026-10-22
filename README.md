# DevJobs — Job Browsing App

DevJobs is a React-based job browsing application that allows users to explore job opportunities, search and filter job listings, and save their favorite jobs for later. The application uses browser local storage to persist saved jobs across page reloads.

## ✨ Features

- **Job Listings:** Fetch and display job records from an external API.
- **Search Jobs:** Search for jobs based on relevant information.
- **Filter Jobs:** Filter job listings using available filter options.
- **Save Jobs:** Save interesting jobs for later.
- **Remove Saved Jobs:** Remove jobs from the saved list.
- **Persistent Storage:** Keep saved jobs in browser local storage.
- **Component-Based Architecture:** Organize the application into reusable React components.
- **TypeScript:** Use type definitions for job data and component props.
- **Responsive UI:** Browse job listings across different screen sizes.

## 🛠️ Technologies Used

- React
- TypeScript
- Vite
- Tailwind CSS
- Browser Local Storage
- REST API
- Git & GitHub

## 📂 Project Structure

```text
devjobs-react-app/
├── public/
├── src/
│   ├── components/
│   │   ├── FilterSection.tsx
│   │   ├── JobCard.tsx
│   │   ├── JobsSection.tsx
│   │   ├── MainComponent.tsx
│   │   ├── Navbar.tsx
│   │   └── SavedJobCard.tsx
│   ├── App.tsx
│   ├── main.tsx
│   └── ...
├── index.html
├── package.json
├── tsconfig.json
└── vite.config.ts
```


## 💾 Data Persistence

DevJobs uses the browser's `localStorage` to store saved jobs. This allows users to keep their saved job list after refreshing the page or reopening the application in the same browser.

Saved jobs are stored locally and are not automatically synchronized across different browsers or devices.

## 🧩 Architecture

The application follows a component-based architecture:

- **App.tsx:** Fetches job data and provides the data flow to the main application component.
- **MainComponent.tsx:** Manages application state, search and filter interactions, saved jobs, and local storage.
- **FilterSection.tsx:** Provides job search and filtering controls.
- **JobsSection.tsx:** Displays job listings and saved jobs.
- **JobCard.tsx:** Displays an individual job and provides the save action.
- **SavedJobCard.tsx:** Displays a saved job and provides the remove action.
- **Navbar.tsx:** Displays navigation and the saved job count.



# 📌 AI-Powered Job Match Dashboard

A Next.js-based job match dashboard that recommends jobs, calculates match scores, and allows users to apply.

## 📖 Features

- Job Listing – Displays job recommendations with company details and salaries.
- AI Match Score – Shows how well a user fits a job using a color-coded score.
- Job Details Page – Provides full job descriptions and required skills.
- Apply Button – Allows users to apply (mock action) or get skill-up suggestions.
- User Profile - Displays user details (mock user).
- Responsive Design – Works across all screen sizes.

## 🛠️ Tech Stack

- Next.js (App Router)
- Tailwind CSS (for styling)
- Context API (for state management)
- Fetch API (for data fetching)
- Mock JSON API (for job listings)

## 🚀 Run Locally

Clone the project

```bash
  git clone https://github.com/Coolhands-frank/ai-job-match-dashboard.git
```

Go to the project directory

```bash
  cd ai-job-match-dashboard
```

Install dependencies

```bash
  npm install
```

Start the development server

```bash
  npm run dev
```

## 📦 API Handling

#### The app fetches job data from mockJobs.json using Fetch API.

```http
  fetch ("/mockJobs.json")
```

## 📱 UI/UX Design

#### Mobile View
The dashboard mobile View includes a top bar, with the Projects name (Job Match Dashboard) and a profile Icon which when clicked displays a side bar with the users profile information.

#### Desktop View
The Dashboard desktop view includes a side bar that displays user Profile details and the main section where Job Recommendations are displayed.

#### AI Match scores are color-coded:
- 🟢 Green (80%+)
- 🟡 Yellow (50-79%)
- 🔴 Red (<50%)

## 🌍 Deployment

#### Deployed on Render
Live Link: https://ai-job-match-dashboard.onrender.com


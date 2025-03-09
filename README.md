AI-Powered Job Match Dashboard

A Next.js-based job match dashboard that recommends jobs, calculates match scores, and allows users to apply.

Features

✅ Job Listing – Displays job recommendations with company details and salaries.
✅ AI Match Score – Shows how well a user fits a job using a color-coded score.
✅ Job Details Page – Provides full job descriptions and required skills.
✅ Apply Button – Allows users to apply (mock action) or get skill-up suggestions.
✅ Responsive Design – Works across all screen sizes.

Tech Stack

Next.js (App Router)
Tailwind CSS (for styling)
Context API (for state management)
Fetch API (for data fetching)
Mock JSON API (for job listings)

🚀 Getting Started Locally

📌 1. Clone the Repository

git clone https://github.com/your-username/ai-job-match-dashboard.git
cd ai-job-match-dashboard

📌 2. Install Dependencies

npm install

📌 3. Start the Development Server

npm run dev
The app will be available at http://localhost:3000.

📦 API Handling

The app fetches job data from mockJobs.json using Fetch API.

Job Match scores are color-coded:
🟢 Green (80%+)
🟡 Yellow (50-79%)
🔴 Red (<50%)

Desktop View

The Dashboard desktop view includes a side bar whick displays mock user Profile details and the main section where Job Recommendations are displayed

Mobile View 

The dashboard mobile View includes a top bar, with the Projects name and a profile Icon which when clicked displays a side bar with users profile information

Deployed on Render
Live Demo: 

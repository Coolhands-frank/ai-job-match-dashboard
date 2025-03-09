import JobList from "../components/JobList";

export default function Home() {
  return (
    <div className="flex flex-col h-full">
      <div className="py-2 md:py-4 px-4 md:px-8 border-b-2 border-teal-800">
        <h1 className="font-semibold text-lg lg:text-3xl text-teal-800">Job Recommendations</h1>
      </div>

      <div className="p-4 md:p-8 bg-white md:overflow-auto text-black">
          <JobList />
      </div>
    </div>
  );
}

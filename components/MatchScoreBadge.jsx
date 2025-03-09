export default function MatchScoreBadge({ score }) {
    const getColor = (score) => {
      if (score >= 80) return "bg-green-500";
      if (score >= 50) return "bg-yellow-500";
      return "bg-red-500";
    };
  
    return (
      <div className=""  >
        <p>User Match Score: <span className={`text-center text-white py-1 px-2 rounded ${getColor(score)}`}>{score}%</span></p>
      </div>
    );
  } 
  
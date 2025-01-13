import { useAuthorization } from "@/hooks/useAuthorization";

const DashboardPage = () => {
  useAuthorization();

  return (
    <div className="container mx-auto px-4 py-8 text-black ">
      <div className="max-w-md mx-auto bg-card p-8 rounded-lg shadow-lg">
        Dashboard
      </div>
    </div>
  );
};

export default DashboardPage;

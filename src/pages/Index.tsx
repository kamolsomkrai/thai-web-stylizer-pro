import Header from "@/components/Header";
import Navigation from "@/components/Navigation";
import Dashboard from "@/components/Dashboard";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-background">
      <Header />
      <Navigation />
      <Dashboard />
    </div>
  );
};

export default Index;

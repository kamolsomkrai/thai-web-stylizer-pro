import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";

interface SystemCardProps {
  title: string;
  subtitle?: string;
  description?: string;
  icon: string;
  status?: "available" | "maintenance" | "coming-soon";
  gradient?: string;
}

const getSystemRoute = (title: string) => {
  const routes: { [key: string]: string } = {
    "Digital 506": "/systems/digital-506",
    "Digital Export System": "/systems/digital-export-system", 
    "Syndromic Surveillance": "/systems/syndromic-surveillance",
    "No case notification": "/systems/no-case-notification",
    "AEFI": "/systems/aefi",
    "R506": "/systems/r506",
    "JIT": "/systems/jit",
    "Measles": "/systems/measles"
  };
  return routes[title] || "/";
};

const SystemCard = ({ 
  title, 
  subtitle, 
  description, 
  icon, 
  status = "available",
  gradient = "from-primary/5 to-primary/10"
}: SystemCardProps) => {
  const getStatusInfo = () => {
    switch (status) {
      case "maintenance":
        return { 
          text: "อยู่ระหว่างปรับปรุง", 
          color: "text-warning",
          bgColor: "bg-warning/10",
          disabled: true 
        };
      case "coming-soon":
        return { 
          text: "เร็วๆ นี้", 
          color: "text-muted-foreground",
          bgColor: "bg-muted",
          disabled: true 
        };
      default:
        return { 
          text: "เข้าใช้งานระบบ", 
          color: "text-accent-foreground",
          bgColor: "bg-accent",
          disabled: false 
        };
    }
  };

  const statusInfo = getStatusInfo();
  const route = getSystemRoute(title);

  if (statusInfo.disabled) {
    return (
      <Card className="group relative overflow-hidden bg-gradient-card border-primary/10 hover:border-primary/20 hover:shadow-medium transition-all duration-300 hover:-translate-y-1">
        {/* Gradient background */}
        <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-50 group-hover:opacity-70 transition-opacity duration-300`}></div>
        
        {/* Content */}
        <div className="relative p-6 flex flex-col items-center text-center space-y-4 min-h-[200px]">
          {/* Icon */}
          <div className="w-16 h-16 bg-white/80 rounded-2xl flex items-center justify-center shadow-soft group-hover:shadow-medium group-hover:scale-110 transition-all duration-300">
            <span className="text-3xl">{icon}</span>
          </div>

          {/* Title and subtitle */}
          <div className="space-y-1 flex-1 flex flex-col justify-center">
            <h3 className="font-bold text-lg text-card-foreground group-hover:text-primary transition-colors duration-300">
              {title}
            </h3>
            {subtitle && (
              <p className="text-sm text-muted-foreground font-medium">
                ({subtitle})
              </p>
            )}
            {description && (
              <p className="text-xs text-muted-foreground mt-1">
                {description}
              </p>
            )}
          </div>

          {/* Action button */}
          <Button
            variant="access"
            size="sm"
            disabled={true}
            className="w-full rounded-lg font-medium transition-all duration-300 opacity-60 cursor-not-allowed"
          >
            {statusInfo.text}
          </Button>
        </div>
      </Card>
    );
  }

  return (
    <Link to={route}>
      <Card className="group relative overflow-hidden bg-gradient-card border-primary/10 hover:border-primary/20 hover:shadow-medium transition-all duration-300 hover:-translate-y-1 cursor-pointer">
        {/* Gradient background */}
        <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-50 group-hover:opacity-70 transition-opacity duration-300`}></div>
        
        {/* Content */}
        <div className="relative p-6 flex flex-col items-center text-center space-y-4 min-h-[200px]">
          {/* Icon */}
          <div className="w-16 h-16 bg-white/80 rounded-2xl flex items-center justify-center shadow-soft group-hover:shadow-medium group-hover:scale-110 transition-all duration-300">
            <span className="text-3xl">{icon}</span>
          </div>

          {/* Title and subtitle */}
          <div className="space-y-1 flex-1 flex flex-col justify-center">
            <h3 className="font-bold text-lg text-card-foreground group-hover:text-primary transition-colors duration-300">
              {title}
            </h3>
            {subtitle && (
              <p className="text-sm text-muted-foreground font-medium">
                ({subtitle})
              </p>
            )}
            {description && (
              <p className="text-xs text-muted-foreground mt-1">
                {description}
              </p>
            )}
          </div>

          {/* Action button */}
          <Button
            variant="access"
            size="sm"
            className="w-full rounded-lg font-medium transition-all duration-300 hover:scale-105"
          >
            {statusInfo.text}
          </Button>
        </div>
      </Card>
    </Link>
  );
};

export default SystemCard;
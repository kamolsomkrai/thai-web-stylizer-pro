import { Button } from "@/components/ui/button";

const Navigation = () => {
  const navItems = [
    { label: "หัวหนด", icon: "📋", active: true },
    { label: "ระบบฟังก์ชั่ว", icon: "🖥️", active: false },
    { label: "แดงบอร์ด", icon: "📊", active: false },
    { label: "ดาวน์โหลด", icon: "📥", active: false },
    { label: "อื่น", icon: "⚙️", active: false },
  ];

  return (
    <nav className="bg-white/60 backdrop-blur-md border-b border-primary/10 sticky top-0 z-40">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-center space-x-1 py-3">
          {navItems.map((item, index) => (
            <Button
              key={index}
              variant={item.active ? "default" : "ghost"}
              size="sm"
              className={`
                flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-300
                ${item.active 
                  ? "bg-gradient-primary text-white shadow-soft" 
                  : "text-muted-foreground hover:text-primary hover:bg-primary/5"
                }
              `}
            >
              <span className="text-base">{item.icon}</span>
              <span className="font-medium">{item.label}</span>
            </Button>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
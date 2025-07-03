import SystemCard from "./SystemCard";

const Dashboard = () => {
  const systems = [
    {
      title: "Digital 506",
      subtitle: "D506",
      icon: "📊",
      status: "available" as const,
      gradient: "from-blue-50 to-blue-100",
      description: "ระบบรายงานโรค 506 ดิจิทัล"
    },
    {
      title: "Digital Export System",
      subtitle: "DES",
      icon: "📤",
      status: "available" as const,
      gradient: "from-green-50 to-green-100",
      description: "ระบบส่งออกข้อมูลดิจิทัล"
    },
    {
      title: "Syndromic Surveillance",
      icon: "🔍",
      status: "available" as const,
      gradient: "from-purple-50 to-purple-100",
      description: "ระบบเฝ้าระวังกลุ่มอาการ"
    },
    {
      title: "No case notification",
      icon: "📋",
      status: "available" as const,
      gradient: "from-orange-50 to-orange-100",
      description: "ระบบแจ้งไม่พบผู้ป่วย"
    },
    {
      title: "AEFI",
      icon: "💉",
      status: "available" as const,
      gradient: "from-red-50 to-red-100",
      description: "ระบบเฝ้าระวังอาการไม่พึงประสงค์"
    },
    {
      title: "R506",
      icon: "📈",
      status: "available" as const,
      gradient: "from-indigo-50 to-indigo-100",
      description: "ระบบรายงาน R506"
    },
    {
      title: "R506",
      subtitle: "สำหรับเจ้าหน้าที่",
      icon: "👥",
      status: "available" as const,
      gradient: "from-teal-50 to-teal-100",
      description: "ระบบ R506 สำหรับเจ้าหน้าที่"
    },
    {
      title: "JIT",
      icon: "⚡",
      status: "maintenance" as const,
      gradient: "from-yellow-50 to-yellow-100",
      description: "ระบบ Just In Time"
    },
    {
      title: "Measles",
      icon: "🦠",
      status: "available" as const,
      gradient: "from-pink-50 to-pink-100",
      description: "ระบบเฝ้าระวังโรคหัด"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-background">
      <div className="container mx-auto px-6 py-8">
        {/* Title Section */}
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl font-bold text-primary mb-3">
            ระบบที่ให้บริการ
          </h2>
          <p className="text-muted-foreground text-lg">
            เลือกระบบที่ต้องการใช้งานจากด้านล่าง
          </p>
          <div className="w-24 h-1 bg-gradient-primary mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Systems Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-scale-in">
          {systems.map((system, index) => (
            <div
              key={index}
              className="animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <SystemCard {...system} />
            </div>
          ))}
        </div>

        {/* Footer Info */}
        <div className="text-center mt-16 animate-fade-in">
          <div className="bg-white/60 backdrop-blur-md rounded-2xl p-6 border border-primary/10 inline-block">
            <p className="text-sm text-muted-foreground">
              💡 <span className="font-medium">เคล็ดลับ:</span> กดที่การ์ดระบบเพื่อเข้าใช้งาน หรือดูสถานะการบำรุงรักษา
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
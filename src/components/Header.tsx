import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="bg-gradient-primary shadow-medium relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.3),transparent_50%)]"></div>
        <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_80%,rgba(255,255,255,0.2),transparent_50%)]"></div>
      </div>
      
      <div className="container mx-auto px-6 py-4 relative z-10">
        <div className="flex items-center justify-between">
          {/* Logo and Title */}
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm border border-white/30">
              <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                <div className="text-primary text-lg font-bold">⚕</div>
              </div>
            </div>
            <div className="text-white">
              <h1 className="text-xl font-bold">แพลตฟอร์มฟังก์ชั่วโรคดิจิทัล</h1>
              <p className="text-white/80 text-sm">Digital Disease Surveillance</p>
            </div>
          </div>

          {/* Action Button */}
          <Button variant="outline" className="text-white border-white/30 bg-white/10 hover:bg-white/20 backdrop-blur-sm">
            DDS คิวรี่
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
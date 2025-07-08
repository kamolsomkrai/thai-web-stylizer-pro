import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Download, Upload, Search, Settings } from "lucide-react";
import { Link } from "react-router-dom";

const Digital506 = () => {
  return (
    <div className="min-h-screen bg-gradient-background">
      <div className="container mx-auto px-6 py-8">
        {/* Header */}
        <div className="flex items-center space-x-4 mb-8">
          <Button variant="outline" size="sm" asChild>
            <Link to="/">
              <ArrowLeft className="w-4 h-4 mr-2" />
              กลับหน้าหลัก
            </Link>
          </Button>
          <div>
            <h1 className="text-3xl font-bold text-primary">Digital 506 (D506)</h1>
            <p className="text-muted-foreground">ระบบรายงานโรค 506 ดิจิทัล</p>
          </div>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Actions */}
          <div className="lg:col-span-2 space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>การดำเนินการหลัก</CardTitle>
                <CardDescription>เลือกการดำเนินการที่ต้องการใช้งาน</CardDescription>
              </CardHeader>
              <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Button className="h-20 flex-col space-y-2">
                  <Upload className="w-6 h-6" />
                  <span>ส่งรายงาน 506</span>
                </Button>
                <Button className="h-20 flex-col space-y-2" variant="outline">
                  <Search className="w-6 h-6" />
                  <span>ค้นหารายงาน</span>
                </Button>
                <Button className="h-20 flex-col space-y-2" variant="outline">
                  <Download className="w-6 h-6" />
                  <span>ดาวน์โหลดรายงาน</span>
                </Button>
                <Button className="h-20 flex-col space-y-2" variant="outline">
                  <Settings className="w-6 h-6" />
                  <span>ตั้งค่าระบบ</span>
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>สถิติการใช้งาน</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span>รายงานวันนี้</span>
                    <span className="font-bold text-primary">24</span>
                  </div>
                  <div className="flex justify-between">
                    <span>รายงานเดือนนี้</span>
                    <span className="font-bold text-primary">567</span>
                  </div>
                  <div className="flex justify-between">
                    <span>สถานะระบบ</span>
                    <span className="text-green-600 font-medium">ปกติ</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>ความช่วยเหลือ</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <Button variant="ghost" className="w-full justify-start">
                    📖 คู่มือการใช้งาน
                  </Button>
                  <Button variant="ghost" className="w-full justify-start">
                    💬 ติดต่อฝ่ายสนับสนุน
                  </Button>
                  <Button variant="ghost" className="w-full justify-start">
                    ❓ คำถามที่พบบ่อย
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Digital506;
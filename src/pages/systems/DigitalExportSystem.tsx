import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Download, Upload, Database, FileText } from "lucide-react";
import { Link } from "react-router-dom";

const DigitalExportSystem = () => {
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
            <h1 className="text-3xl font-bold text-primary">Digital Export System (DES)</h1>
            <p className="text-muted-foreground">ระบบส่งออกข้อมูลดิจิทัล</p>
          </div>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Actions */}
          <div className="lg:col-span-2 space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>การส่งออกข้อมูล</CardTitle>
                <CardDescription>เลือกประเภทข้อมูลที่ต้องการส่งออก</CardDescription>
              </CardHeader>
              <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Button className="h-20 flex-col space-y-2">
                  <Database className="w-6 h-6" />
                  <span>ส่งออกฐานข้อมูล</span>
                </Button>
                <Button className="h-20 flex-col space-y-2" variant="outline">
                  <FileText className="w-6 h-6" />
                  <span>ส่งออกรายงาน</span>
                </Button>
                <Button className="h-20 flex-col space-y-2" variant="outline">
                  <Upload className="w-6 h-6" />
                  <span>นำเข้าข้อมูล</span>
                </Button>
                <Button className="h-20 flex-col space-y-2" variant="outline">
                  <Download className="w-6 h-6" />
                  <span>ดาวน์โหลดไฟล์</span>
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>สถิติการส่งออก</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span>ไฟล์ส่งออกวันนี้</span>
                    <span className="font-bold text-primary">12</span>
                  </div>
                  <div className="flex justify-between">
                    <span>ขนาดข้อมูลรวม</span>
                    <span className="font-bold text-primary">2.3 GB</span>
                  </div>
                  <div className="flex justify-between">
                    <span>การส่งออกล่าสุด</span>
                    <span className="text-green-600 font-medium">สำเร็จ</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DigitalExportSystem;
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Search, AlertTriangle, TrendingUp, Eye } from "lucide-react";
import { Link } from "react-router-dom";

const SyndromicSurveillance = () => {
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
            <h1 className="text-3xl font-bold text-primary">Syndromic Surveillance</h1>
            <p className="text-muted-foreground">ระบบเฝ้าระวังกลุ่มอาการ</p>
          </div>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Actions */}
          <div className="lg:col-span-2 space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>การเฝ้าระวัง</CardTitle>
                <CardDescription>เลือกประเภทการเฝ้าระวังกลุ่มอาการ</CardDescription>
              </CardHeader>
              <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Button className="h-20 flex-col space-y-2">
                  <Eye className="w-6 h-6" />
                  <span>เฝ้าระวังแบบเรียลไทม์</span>
                </Button>
                <Button className="h-20 flex-col space-y-2" variant="outline">
                  <Search className="w-6 h-6" />
                  <span>ค้นหากลุ่มอาการ</span>
                </Button>
                <Button className="h-20 flex-col space-y-2" variant="outline">
                  <TrendingUp className="w-6 h-6" />
                  <span>วิเคราะห์แนวโน้ม</span>
                </Button>
                <Button className="h-20 flex-col space-y-2" variant="outline">
                  <AlertTriangle className="w-6 h-6" />
                  <span>การเตือนภัย</span>
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>สถิติการเฝ้าระวัง</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span>กลุ่มอาการใหม่วันนี้</span>
                    <span className="font-bold text-primary">8</span>
                  </div>
                  <div className="flex justify-between">
                    <span>การเตือนภัยทั้งหมด</span>
                    <span className="font-bold text-orange-600">3</span>
                  </div>
                  <div className="flex justify-between">
                    <span>สถานะระบบ</span>
                    <span className="text-green-600 font-medium">เฝ้าระวัง</span>
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

export default SyndromicSurveillance;
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Siren, FileText, Search, AlertCircle } from "lucide-react";
import { Link } from "react-router-dom";

const AEFI = () => {
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
            <h1 className="text-3xl font-bold text-primary">AEFI</h1>
            <p className="text-muted-foreground">ระบบเฝ้าระวังอาการไม่พึงประสงค์</p>
          </div>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Actions */}
          <div className="lg:col-span-2 space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>การรายงาน AEFI</CardTitle>
                <CardDescription>ระบบเฝ้าระวังอาการไม่พึงประสงค์หลังได้รับวัคซีน</CardDescription>
              </CardHeader>
              <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Button className="h-20 flex-col space-y-2">
                  <Siren className="w-6 h-6" />
                  <span>รายงาน AEFI ใหม่</span>
                </Button>
                <Button className="h-20 flex-col space-y-2" variant="outline">
                  <Search className="w-6 h-6" />
                  <span>ค้นหารายงาน</span>
                </Button>
                <Button className="h-20 flex-col space-y-2" variant="outline">
                  <FileText className="w-6 h-6" />
                  <span>รายงานที่ส่งแล้ว</span>
                </Button>
                <Button className="h-20 flex-col space-y-2" variant="outline">
                  <AlertCircle className="w-6 h-6" />
                  <span>การติดตามผล</span>
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>สถิติ AEFI</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span>รายงานใหม่วันนี้</span>
                    <span className="font-bold text-primary">2</span>
                  </div>
                  <div className="flex justify-between">
                    <span>รายงานเดือนนี้</span>
                    <span className="font-bold text-primary">47</span>
                  </div>
                  <div className="flex justify-between">
                    <span>ระดับความรุนแรง</span>
                    <span className="text-green-600 font-medium">เบา</span>
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

export default AEFI;
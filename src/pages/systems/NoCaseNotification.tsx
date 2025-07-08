import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, FileX, Search, Send, Clock } from "lucide-react";
import { Link } from "react-router-dom";

const NoCaseNotification = () => {
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
            <h1 className="text-3xl font-bold text-primary">No Case Notification</h1>
            <p className="text-muted-foreground">ระบบแจ้งไม่พบผู้ป่วย</p>
          </div>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Actions */}
          <div className="lg:col-span-2 space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>การแจ้งไม่พบผู้ป่วย</CardTitle>
                <CardDescription>ดำเนินการแจ้งไม่พบผู้ป่วยในพื้นที่</CardDescription>
              </CardHeader>
              <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Button className="h-20 flex-col space-y-2">
                  <Send className="w-6 h-6" />
                  <span>ส่งการแจ้งใหม่</span>
                </Button>
                <Button className="h-20 flex-col space-y-2" variant="outline">
                  <Search className="w-6 h-6" />
                  <span>ค้นหาการแจ้ง</span>
                </Button>
                <Button className="h-20 flex-col space-y-2" variant="outline">
                  <FileX className="w-6 h-6" />
                  <span>รายการที่แจ้งแล้ว</span>
                </Button>
                <Button className="h-20 flex-col space-y-2" variant="outline">
                  <Clock className="w-6 h-4" />
                  <span>ประวัติการแจ้ง</span>
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>สถิติการแจ้ง</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span>การแจ้งวันนี้</span>
                    <span className="font-bold text-primary">5</span>
                  </div>
                  <div className="flex justify-between">
                    <span>การแจ้งเดือนนี้</span>
                    <span className="font-bold text-primary">142</span>
                  </div>
                  <div className="flex justify-between">
                    <span>สถานะล่าสุด</span>
                    <span className="text-green-600 font-medium">ส่งแล้ว</span>
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

export default NoCaseNotification;
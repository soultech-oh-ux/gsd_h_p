import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, MapPin, Phone } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-muted/30">
      <div className="container px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
              프로젝트 문의하기
            </h2>
            <p className="text-muted-foreground text-lg mb-10 max-w-md">
              AI 도입을 고민하고 계신가요? 
              굿씨드 AI연구소의 전문가들이 여러분의 비즈니스 혁신을 도와드립니다.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold mb-1">Location</h4>
                  <p className="text-muted-foreground">
                    서울특별시 강남구 테헤란로 123 <br />
                    굿씨드빌딩 10층
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold mb-1">Email</h4>
                  <p className="text-muted-foreground">contact@goodseed.ai</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold mb-1">Phone</h4>
                  <p className="text-muted-foreground">02-1234-5678</p>
                </div>
              </div>
            </div>
          </div>

          <Card className="shadow-lg border-border/50">
            <CardContent className="p-8">
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">이름</label>
                    <Input id="name" placeholder="홍길동" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">이메일</label>
                    <Input id="email" type="email" placeholder="name@company.com" />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium">문의 유형</label>
                  <Input id="subject" placeholder="기술 제휴 / 프로젝트 의뢰 / 기타" />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">문의 내용</label>
                  <Textarea 
                    id="message" 
                    placeholder="프로젝트에 대한 자세한 내용을 적어주세요." 
                    className="min-h-[150px]"
                  />
                </div>

                <Button type="submit" className="w-full text-base py-6">
                  문의하기
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;

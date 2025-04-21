import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";

export default function Hyprform() {
  return (
    <div className="min-h-screen bg-white text-black font-sans">
      <div className="flex flex-col items-center justify-center text-center py-20 px-4 bg-black text-white">
        <Image
          src="/hyprform-logo.png"
          alt="Hyprform Logo"
          width={150}
          height={150}
        />
        <h1 className="text-5xl font-bold mt-6">Welcome to Hyprform</h1>
        <p className="mt-4 max-w-2xl text-lg">
          Online Coaching | Custom Diet Plans | Fat Loss & Performance Programs
        </p>
        <Button className="mt-6 bg-white text-black hover:bg-gray-100">
          Get Started
        </Button>
      </div>
      {/* ... rest of the content (omitted here for brevity) ... */}
    </div>
  );
}

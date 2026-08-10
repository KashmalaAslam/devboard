import Image from "next/image";
import Button from "../components/ui/Button";
import Input from "../components/ui/Input";
import Card from "../components/ui/Card";

export default function Home() {
  return (
    <div>
      <Button>Sign In</Button>
      <Button variant="secondary">Cancel</Button>
      <Button variant="outline">Continue with Google</Button>
      {/* <Input label="Email" placeholder="Enter your email" /> */}
      <Input label="Email" placeholder="john@gmail.com" />
      <Card>
        <h2 className="text-lg font-semibold">Card Title</h2>
        <p className="text-sm text-slate-600">Card content goes here.</p>
      </Card>
    </div>
  );
}

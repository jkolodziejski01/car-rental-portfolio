'use client';
import { useRouter } from "next/navigation";
export default function Home() {

    const router = useRouter();
    setTimeout(() => {
        router.push('/');
      }, 7000);
    clearTimeout(router);

  return (
    <div className="p-5 sm:px-10 md:px=20">
        <div className="bg-blue-500 text-center text-white p-5">
            <h2 className="text-2xl font-bold mb-4">Thank you for trusting us</h2>
            <p className="text-xl mb=6">Your car will be delivered soon</p>
            <p className="text-lg mt-10">You will be redirected to the home page...</p>
        </div>
    </div>
  );
}
"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function TestPage() {
  const router = useRouter();
  return (
    <>
      <div>test3</div>
      <div onClick={() => router.push(`/landing`)}>Go Back</div>
    </>
  );
}

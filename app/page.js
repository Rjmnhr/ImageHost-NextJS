import ClientUploadFile from "@/components/upload-file";

export default async function Home() {
  return (
    <>
      <main className="flex min-h-screen flex-col items-center justify-around p-10 ">
        <h1 className="text-3xl">
          <span className="text-6xl ">IMAGE.</span>HOST
        </h1>
        <ClientUploadFile />
      </main>
    </>
  );
}

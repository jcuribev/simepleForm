import UserForm from "@/app/layout/Form/userForm";

export default function Home() {
  return (
    <main
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        height: "100vh",
      }}
    >
      
      <UserForm />
    </main>
  );
}

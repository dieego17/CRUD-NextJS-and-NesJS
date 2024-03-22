'use client';

import { useSearchParams, usePathname, useRouter } from "next/navigation";
import UserForm from "./components/UserForm";
import UserList from "./components/UserList";
import { UserProvider } from "./context/UserContext";

export default function Home() {

  return (
    <div>
      <UserProvider>  
        <section className="flex justify-between items-baseline">
            <article className="w-2/4 p-4 m-2 rounded-lg">
              <UserList  /> 
            </article>
            <article className="w-2/4 p-4 m-2  rounded-lg">
              <UserForm />
            </article>
        </section>
      </UserProvider>
    </div>
  );
}

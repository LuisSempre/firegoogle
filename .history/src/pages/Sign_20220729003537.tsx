import { GoogleAuthProvider, signInWithPopup, User } from "firebase/auth";
import { auth } from "../services/firebase";
import { useState } from "react";

export function Sign() {
  const [user, setUser] = useState<User>({} as User);

  function handleSign() {
    const provider = new GoogleAuthProvider();

    signInWithPopup(auth, provider)
      .then((result) => {
        setUser(result.user);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <div className="flex flex-col gap-y-4">
      <div className="relative rounded-lg p-0.5 overflow-hidden bg-transparent shadow-sm hover:border-gray-400 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500">
        <div className="relative z-10 flex items-center w-full h-full px-6 py-5 bg-black rounded-lg">
          <div className="flex flex-col items-center justify-center">
            {user.photoURL && (
              <img
                className="w-16 h-16 rounded-full"
                src={user.photoURL}
                alt="Foto do usuario"
              />
            )}{" "}
            <strong> {user.displayName} </strong> <small> {user.email} </small>{" "}
          </div>{" "}
          <div className="flex flex-col items-center justify-center w-full max-w-6xl p-8 rounded-md gap-y-4">
            {" "}
            <h1 className="text-4xl"> Acesse sua conta </h1>{" "}
            <span> Utilizando autenticacao social </span>{" "}
            <button
              onClick={handleSign}
              className="w-full px-4 py-2 font-bold text-black rounded-full bg-gradient-to-br from-green-500 via-purple-500 to-blue-400"
            >
              {" "}
              Entrar com Google{" "}
            </button>{" "}
          </div>
        </div>
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-green-500 via-purple-500 to-blue-400"></div>
      </div>
    </div>
  );
}

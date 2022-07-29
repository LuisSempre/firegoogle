import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { auth } from '../services/firebase';
import { useState } from 'react';

export function Sign() {
	const [user, setUser] = useState<User>({} as User)

	function handleSign() {
		const provider =  new GoogleAuthProvider();

		signInWithPopup(auth, provider)
		.then((result) => {
			setUser(result.user);
		})
		.catch((error) => {
			console.log(error);
		})
	}

	return (
	
	<div className="flex flex-col gap-y-4">
		<div className="flex flex-col items-center justify-center">
		{ user.photoURL &&
			<img 
			className="w-16 h-16 rounded-full"
			src={user.photoURL} alt="Foto do usuario" />
		}
			<strong>
				{user.displayName}
			</strong>
			<small>
				{user.email}
			</small>
		</div>

		<div className="p-8 w-full max-w-6xl border border-white rounded-md flex flex-col items-center justify-center gap-y-4">
			<h1 className="text-4xl">
				Acesse sua conta
			</h1>
			<span>
				Utilizando autenticacao social
			</span>
			<button 
				onClick={handleSign}
				className="w-full px-4 py-2 bg-white text-black font-bold rounded-full">
				Entrar com Google
			</button>
		</div>
	</div>
	)
}

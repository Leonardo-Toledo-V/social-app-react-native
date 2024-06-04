import { View, TextInput, Button, ActivityIndicator, KeyboardAvoidingView } from 'react-native'
import React, { useState } from 'react'
import { FIREBASE_AUTH } from '../../../utils/FirebaseConfig'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';

export default function LoginScreen() {

    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [loading, setLoading] = useState<boolean>(false);
    const auth = FIREBASE_AUTH;

    const signIn = async () => {
        setLoading(true);
        try {
            const response = await signInWithEmailAndPassword(auth, email, password);
            alert('login success' + response)
            console.log(response)
        } catch (error: any) {
            console.log(error);
            alert('Usuario o contraseña incorrectos' + error.message)
        } finally {
            setLoading(false);
        }
    }

    const signUp = async () => {
        setLoading(true);
        try {
            const response = await createUserWithEmailAndPassword(auth, email, password);
            alert('register success' + response)
            console.log(response)
        } catch (error: any) {
            console.log(error);
            alert('Error al registrar' + error.message)
        } finally {
            setLoading(false);
        }
    }

    return (
        <View className='mx-5 flex-1 justify-center items-center'>
            <KeyboardAvoidingView className='w-full' behavior='padding'>
            <TextInput
                className='rounded-sm px-4 py-3 bg-[#ffffff] w-full'
                placeholder='Correo electrónico'
                autoCapitalize='none'
                value={email}
                onChangeText={(text) => setEmail(text)}
            />
            <TextInput
                secureTextEntry={true}
                className='rounded-sm px-4 py-3 bg-white mt-2 w-full'
                placeholder='Contraseña'
                autoCapitalize='none'
                value={password}
                onChangeText={(text) => setPassword(text)}
            />
            {loading ? <ActivityIndicator size='large' color='#0000f' className='mt-10' />
                :
                <>
                    <View className='bg-purple-800 text-white w-full mt-10'>
                        <Button title='Iniciar sesión' color='white' onPress={signIn} />
                    </View>
                    <View className='bg-purple-800 w-full mt-2'>
                        <Button title='Crear cuenta' color='white' onPress={signUp} />
                    </View>
                </>
            }
            </KeyboardAvoidingView>
        </View>
    )
}
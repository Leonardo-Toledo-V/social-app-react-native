import { View, TextInput, Button, ActivityIndicator, KeyboardAvoidingView, Text } from 'react-native'
import React, { useState } from 'react'
import { FIREBASE_AUTH } from '../../../utils/FirebaseConfig'
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { RouterProps } from '../../../interfaces/NavigatorProps';

export default function RegisterScreen({ navigation }: RouterProps) {

    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [loading, setLoading] = useState<boolean>(false);
    const auth = FIREBASE_AUTH;

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
        <View className='px-5 flex-1 justify-center items-center bg-[#151515]'>
            <View>
                <Text className='text-3xl font-bold mb-12 text-[#f1f1f1]'>Register </Text>
            </View>

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
                        <View className='bg-[#a1f949] w-full mt-6'>
                            <Button title='Crear cuenta' color='black' onPress={signUp} />
                        </View>
                    </>
                }
                <View className='w-full items-end mt-3'>
                    <Button
                        onPress={() => navigation.navigate('login')}
                        title='Ya tienes una cuenta?'
                        color='white'
                    />
                </View>
            </KeyboardAvoidingView>
        </View>
    )
}
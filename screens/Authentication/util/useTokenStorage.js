import { useAsyncStorage } from '@react-native-async-storage/async-storage';

const TOKEN_KEY = 'token';

export const useTokenStorage = () => {
    const storage = useAsyncStorage(TOKEN_KEY);

    const get = async () => {
        return JSON.parse(await storage.getItem());
    }

    const set = async (value) => {
        if(value){
        await storage.setItem(value);
        }
        
    }
    
    const del = async () => {
        await storage.removeItem();
    }

    return { get, set, del };
}
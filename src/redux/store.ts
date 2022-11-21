import { Car } from '@/models';
export interface AppStore {
    cars: Car[];
}

export default configureStore();
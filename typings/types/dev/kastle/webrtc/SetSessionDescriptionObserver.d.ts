import type { Object } from '../../../java/lang/Object.d.ts'
export interface SetSessionDescriptionObserver extends Object{
    onFailure(arg0: string): void;
    onSuccess(): void;
}
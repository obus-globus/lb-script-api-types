import type { Object } from '../java/lang/Object.d.ts'
export interface Lazy<T extends unknown> extends Object{
    readonly value: T;
    isInitialized(): boolean;
}
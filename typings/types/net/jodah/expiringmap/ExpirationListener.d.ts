import type { Object } from '../../../java/lang/Object.d.ts'
export interface ExpirationListener<K extends unknown, V extends unknown> extends Object{
    expired(arg0: K, arg1: V): void;
}
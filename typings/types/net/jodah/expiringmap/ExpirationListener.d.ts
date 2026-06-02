import type { Object } from '../../../java/lang/Object.d.ts'
export interface ExpirationListener<K extends Object | number | string | boolean, V extends Object | number | string | boolean> extends Object{
    expired(arg0: K, arg1: V): void;
}
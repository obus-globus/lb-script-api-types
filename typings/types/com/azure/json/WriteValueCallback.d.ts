import type { Object } from '../../../java/lang/Object.d.ts'
export interface WriteValueCallback<T extends unknown, U extends unknown> extends Object{
    write(arg0: T, arg1: U): void;
}
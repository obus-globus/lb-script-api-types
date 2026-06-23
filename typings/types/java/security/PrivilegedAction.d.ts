import type { Object } from '../../java/lang/Object.d.ts'
export interface PrivilegedAction<T extends unknown> extends Object{
    run(): T;
}
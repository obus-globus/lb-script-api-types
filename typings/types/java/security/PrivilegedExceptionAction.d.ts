import type { Object } from '../../java/lang/Object.d.ts'
export interface PrivilegedExceptionAction<T extends unknown> extends Object{
    run(): T;
}
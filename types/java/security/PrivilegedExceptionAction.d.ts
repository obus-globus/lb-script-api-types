import type { Object } from '../../java/lang/Object.d.ts'
export interface PrivilegedExceptionAction<T extends Object | number | string | boolean> extends Object{
    run(): T;
}
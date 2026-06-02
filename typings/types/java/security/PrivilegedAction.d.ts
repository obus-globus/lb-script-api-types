import type { Object } from '../../java/lang/Object.d.ts'
export interface PrivilegedAction<T extends Object | number | string | boolean> extends Object{
    run(): T;
}
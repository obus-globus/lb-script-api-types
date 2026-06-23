import type { Class } from '../../java/lang/Class.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
export interface Wrapper extends Object{
    isWrapperFor(arg0: Class<Object>): boolean;
    unwrap<T extends unknown>(arg0: Class<T>): T;
}
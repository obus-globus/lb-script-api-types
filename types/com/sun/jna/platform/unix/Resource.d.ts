import type { Resource$Rlimit } from '../../../../../com/sun/jna/platform/unix/Resource$Rlimit.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface Resource extends Object{
    getrlimit(arg0: number, arg1: Resource$Rlimit): number;
    setrlimit(arg0: number, arg1: Resource$Rlimit): number;
}
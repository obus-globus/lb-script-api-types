import type { Library } from '../../../../../com/sun/jna/Library.d.ts'
import type { Pointer } from '../../../../../com/sun/jna/Pointer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface XAttr extends Library, Object{
    getxattr(arg0: string, arg1: string, arg2: Pointer, arg3: number, arg4: number, arg5: number): number;
    listxattr(arg0: string, arg1: Pointer, arg2: number, arg3: number): number;
    removexattr(arg0: string, arg1: string, arg2: number): number;
    setxattr(arg0: string, arg1: string, arg2: Pointer, arg3: number, arg4: number, arg5: number): number;
}
import type { Library } from '../../../../../com/sun/jna/Library.d.ts'
import type { Pointer } from '../../../../../com/sun/jna/Pointer.d.ts'
import type { XAttr$size_t } from '../../../../../com/sun/jna/platform/linux/XAttr$size_t.d.ts'
import type { XAttr$ssize_t } from '../../../../../com/sun/jna/platform/linux/XAttr$ssize_t.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface XAttr extends Library, Object{
    fgetxattr(arg0: number, arg1: string, arg2: Pointer, arg3: XAttr$size_t): XAttr$ssize_t;
    fgetxattr(arg0: number, arg1: string, arg2: number[], arg3: XAttr$size_t): XAttr$ssize_t;
    flistxattr(arg0: number, arg1: Pointer, arg2: XAttr$size_t): XAttr$ssize_t;
    flistxattr(arg0: number, arg1: number[], arg2: XAttr$size_t): XAttr$ssize_t;
    fremovexattr(arg0: number, arg1: string): number;
    fsetxattr(arg0: number, arg1: string, arg2: Pointer, arg3: XAttr$size_t, arg4: number): number;
    fsetxattr(arg0: number, arg1: string, arg2: number[], arg3: XAttr$size_t, arg4: number): number;
    getxattr(arg0: string, arg1: string, arg2: Pointer, arg3: XAttr$size_t): XAttr$ssize_t;
    getxattr(arg0: string, arg1: string, arg2: number[], arg3: XAttr$size_t): XAttr$ssize_t;
    lgetxattr(arg0: string, arg1: string, arg2: Pointer, arg3: XAttr$size_t): XAttr$ssize_t;
    lgetxattr(arg0: string, arg1: string, arg2: number[], arg3: XAttr$size_t): XAttr$ssize_t;
    listxattr(arg0: string, arg1: Pointer, arg2: XAttr$size_t): XAttr$ssize_t;
    listxattr(arg0: string, arg1: number[], arg2: XAttr$size_t): XAttr$ssize_t;
    llistxattr(arg0: string, arg1: Pointer, arg2: XAttr$size_t): XAttr$ssize_t;
    llistxattr(arg0: string, arg1: number[], arg2: XAttr$size_t): XAttr$ssize_t;
    lremovexattr(arg0: string, arg1: string): number;
    lsetxattr(arg0: string, arg1: string, arg2: Pointer, arg3: XAttr$size_t, arg4: number): number;
    lsetxattr(arg0: string, arg1: string, arg2: number[], arg3: XAttr$size_t, arg4: number): number;
    removexattr(arg0: string, arg1: string): number;
    setxattr(arg0: string, arg1: string, arg2: Pointer, arg3: XAttr$size_t, arg4: number): number;
    setxattr(arg0: string, arg1: string, arg2: number[], arg3: XAttr$size_t, arg4: number): number;
}
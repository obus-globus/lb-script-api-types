import type { Library } from '../../../../../com/sun/jna/Library.d.ts'
import type { LibC$Statvfs } from '../../../../../com/sun/jna/platform/linux/LibC$Statvfs.d.ts'
import type { LibC$Sysinfo } from '../../../../../com/sun/jna/platform/linux/LibC$Sysinfo.d.ts'
import type { LibCAPI } from '../../../../../com/sun/jna/platform/unix/LibCAPI.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface LibC extends Library, LibCAPI, Object{
    statvfs(arg0: string, arg1: LibC$Statvfs): number;
    sysinfo(arg0: LibC$Sysinfo): number;
}
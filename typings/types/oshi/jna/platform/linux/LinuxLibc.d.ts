import type { NativeLong } from '../../../../com/sun/jna/NativeLong.d.ts'
import type { LibC } from '../../../../com/sun/jna/platform/linux/LibC.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { LinuxLibc$LinuxUtmpx } from '../../../../oshi/jna/platform/linux/LinuxLibc$LinuxUtmpx.d.ts'
import type { CLibrary } from '../../../../oshi/jna/platform/unix/CLibrary.d.ts'
export interface LinuxLibc extends LibC, Object, CLibrary{
    gettid(): number;
    getutxent(): LinuxLibc$LinuxUtmpx;
    syscall(arg0: NativeLong, arg1: Object[]): NativeLong;
}
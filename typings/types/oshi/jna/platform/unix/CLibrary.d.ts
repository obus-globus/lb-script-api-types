import type { Library } from '../../../../com/sun/jna/Library.d.ts'
import type { NativeLong } from '../../../../com/sun/jna/NativeLong.d.ts'
import type { Pointer } from '../../../../com/sun/jna/Pointer.d.ts'
import type { LibCAPI } from '../../../../com/sun/jna/platform/unix/LibCAPI.d.ts'
import type { LibCAPI$size_t } from '../../../../com/sun/jna/platform/unix/LibCAPI$size_t.d.ts'
import type { LibCAPI$size_t$ByReference } from '../../../../com/sun/jna/platform/unix/LibCAPI$size_t$ByReference.d.ts'
import type { LibCAPI$ssize_t } from '../../../../com/sun/jna/platform/unix/LibCAPI$ssize_t.d.ts'
import type { PointerByReference } from '../../../../com/sun/jna/ptr/PointerByReference.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { CLibrary$Addrinfo } from '../../../../oshi/jna/platform/unix/CLibrary$Addrinfo.d.ts'
export interface CLibrary extends Library, LibCAPI, Object{
    endutxent(): void;
    freeaddrinfo(arg0: Pointer): void;
    gai_strerror(arg0: number): string;
    getaddrinfo(arg0: string, arg1: string, arg2: CLibrary$Addrinfo, arg3: PointerByReference): number;
    getpid(): number;
    open(arg0: string, arg1: number): number;
    pread(arg0: number, arg1: Pointer, arg2: LibCAPI$size_t, arg3: NativeLong): LibCAPI$ssize_t;
    setutxent(): void;
    sysctl(arg0: number[], arg1: number, arg2: Pointer, arg3: LibCAPI$size_t$ByReference, arg4: Pointer, arg5: LibCAPI$size_t): number;
    sysctlbyname(arg0: string, arg1: Pointer, arg2: LibCAPI$size_t$ByReference, arg3: Pointer, arg4: LibCAPI$size_t): number;
    sysctlnametomib(arg0: string, arg1: Pointer, arg2: LibCAPI$size_t$ByReference): number;
}
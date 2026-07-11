import type { NativeLong } from '../../../../com/sun/jna/NativeLong.d.ts'
import type { Pointer } from '../../../../com/sun/jna/Pointer.d.ts'
import type { LibC } from '../../../../com/sun/jna/platform/linux/LibC.d.ts'
import type { LibC$Statvfs } from '../../../../com/sun/jna/platform/linux/LibC$Statvfs.d.ts'
import type { LibC$Sysinfo } from '../../../../com/sun/jna/platform/linux/LibC$Sysinfo.d.ts'
import type { LibCAPI$size_t } from '../../../../com/sun/jna/platform/unix/LibCAPI$size_t.d.ts'
import type { LibCAPI$size_t$ByReference } from '../../../../com/sun/jna/platform/unix/LibCAPI$size_t$ByReference.d.ts'
import type { LibCAPI$ssize_t } from '../../../../com/sun/jna/platform/unix/LibCAPI$ssize_t.d.ts'
import type { Resource$Rlimit } from '../../../../com/sun/jna/platform/unix/Resource$Rlimit.d.ts'
import type { PointerByReference } from '../../../../com/sun/jna/ptr/PointerByReference.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { LinuxLibc$LinuxUtmpx } from '../../../../oshi/jna/platform/linux/LinuxLibc$LinuxUtmpx.d.ts'
import type { CLibrary } from '../../../../oshi/jna/platform/unix/CLibrary.d.ts'
import type { CLibrary$Addrinfo } from '../../../../oshi/jna/platform/unix/CLibrary$Addrinfo.d.ts'
export interface LinuxLibc extends LibC, Object, CLibrary{
    close(arg0: number): number;
    endutxent(): void;
    freeaddrinfo(arg0: Pointer): void;
    gai_strerror(arg0: number): string;
    getaddrinfo(arg0: string, arg1: string, arg2: CLibrary$Addrinfo, arg3: PointerByReference): number;
    getegid(): number;
    getenv(arg0: string): string;
    geteuid(): number;
    getgid(): number;
    getpid(): number;
    getrlimit(arg0: number, arg1: Resource$Rlimit): number;
    gettid(): number;
    getuid(): number;
    getutxent(): LinuxLibc$LinuxUtmpx;
    msync(arg0: Pointer, arg1: LibCAPI$size_t, arg2: number): number;
    munmap(arg0: Pointer, arg1: LibCAPI$size_t): number;
    open(arg0: string, arg1: number): number;
    pread(arg0: number, arg1: Pointer, arg2: LibCAPI$size_t, arg3: NativeLong): LibCAPI$ssize_t;
    reboot(arg0: number): number;
    setdomainname(arg0: string, arg1: number): number;
    setegid(arg0: number): number;
    setenv(arg0: string, arg1: string, arg2: number): number;
    seteuid(arg0: number): number;
    setgid(arg0: number): number;
    sethostname(arg0: string, arg1: number): number;
    setrlimit(arg0: number, arg1: Resource$Rlimit): number;
    setuid(arg0: number): number;
    setutxent(): void;
    statvfs(arg0: string, arg1: LibC$Statvfs): number;
    syscall(arg0: NativeLong, ...arg1: Object[]): NativeLong;
    sysctlbyname(arg0: string, arg1: Pointer, arg2: LibCAPI$size_t$ByReference, arg3: Pointer, arg4: LibCAPI$size_t): number;
    sysctlnametomib(arg0: string, arg1: Pointer, arg2: LibCAPI$size_t$ByReference): number;
    sysinfo(arg0: LibC$Sysinfo): number;
    unsetenv(arg0: string): number;
}
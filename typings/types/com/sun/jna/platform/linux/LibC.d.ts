import type { Library } from '../../../../../com/sun/jna/Library.d.ts'
import type { Pointer } from '../../../../../com/sun/jna/Pointer.d.ts'
import type { LibC$Statvfs } from '../../../../../com/sun/jna/platform/linux/LibC$Statvfs.d.ts'
import type { LibC$Sysinfo } from '../../../../../com/sun/jna/platform/linux/LibC$Sysinfo.d.ts'
import type { LibCAPI } from '../../../../../com/sun/jna/platform/unix/LibCAPI.d.ts'
import type { LibCAPI$size_t } from '../../../../../com/sun/jna/platform/unix/LibCAPI$size_t.d.ts'
import type { Resource$Rlimit } from '../../../../../com/sun/jna/platform/unix/Resource$Rlimit.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface LibC extends Library, LibCAPI, Object{
    close(arg0: number): number;
    getegid(): number;
    getenv(arg0: string): string;
    geteuid(): number;
    getgid(): number;
    getrlimit(arg0: number, arg1: Resource$Rlimit): number;
    getuid(): number;
    msync(arg0: Pointer, arg1: LibCAPI$size_t, arg2: number): number;
    munmap(arg0: Pointer, arg1: LibCAPI$size_t): number;
    reboot(arg0: number): number;
    setdomainname(arg0: string, arg1: number): number;
    setegid(arg0: number): number;
    setenv(arg0: string, arg1: string, arg2: number): number;
    seteuid(arg0: number): number;
    setgid(arg0: number): number;
    sethostname(arg0: string, arg1: number): number;
    setrlimit(arg0: number, arg1: Resource$Rlimit): number;
    setuid(arg0: number): number;
    statvfs(arg0: string, arg1: LibC$Statvfs): number;
    sysinfo(arg0: LibC$Sysinfo): number;
    unsetenv(arg0: string): number;
}
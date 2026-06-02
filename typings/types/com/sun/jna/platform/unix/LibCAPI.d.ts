import type { Pointer } from '../../../../../com/sun/jna/Pointer.d.ts'
import type { LibCAPI$size_t } from '../../../../../com/sun/jna/platform/unix/LibCAPI$size_t.d.ts'
import type { Reboot } from '../../../../../com/sun/jna/platform/unix/Reboot.d.ts'
import type { Resource } from '../../../../../com/sun/jna/platform/unix/Resource.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface LibCAPI extends Reboot, Resource, Object{
    close(arg0: number): number;
    getdomainname(arg0: number[], arg1: number): number;
    getegid(): number;
    getenv(arg0: string): string;
    geteuid(): number;
    getgid(): number;
    gethostname(arg0: number[], arg1: number): number;
    getloadavg(arg0: number[], arg1: number): number;
    getuid(): number;
    msync(arg0: Pointer, arg1: LibCAPI$size_t, arg2: number): number;
    munmap(arg0: Pointer, arg1: LibCAPI$size_t): number;
    setdomainname(arg0: string, arg1: number): number;
    setegid(arg0: number): number;
    setenv(arg0: string, arg1: string, arg2: number): number;
    seteuid(arg0: number): number;
    setgid(arg0: number): number;
    sethostname(arg0: string, arg1: number): number;
    setuid(arg0: number): number;
    unsetenv(arg0: string): number;
}
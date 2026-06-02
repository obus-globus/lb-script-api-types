import type { Object } from '../../../../java/lang/Object.d.ts'
import type { CLibrary } from '../../../../oshi/jna/platform/unix/CLibrary.d.ts'
import type { SolarisLibc$SolarisUtmpx } from '../../../../oshi/jna/platform/unix/SolarisLibc$SolarisUtmpx.d.ts'
export interface SolarisLibc extends Object, CLibrary{
    getutxent(): SolarisLibc$SolarisUtmpx;
    thr_self(): number;
}
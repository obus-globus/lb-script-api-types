import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
export class LinuxOSThread$ThreadPidStat extends Enum<LinuxOSThread$ThreadPidStat> {
    static KERNEL_TIME: LinuxOSThread$ThreadPidStat;
    static MAJOR_FAULT: LinuxOSThread$ThreadPidStat;
    static MINOR_FAULTS: LinuxOSThread$ThreadPidStat;
    static PPID: LinuxOSThread$ThreadPidStat;
    static PRIORITY: LinuxOSThread$ThreadPidStat;
    static RSS: LinuxOSThread$ThreadPidStat;
    static START_CODE: LinuxOSThread$ThreadPidStat;
    static START_TIME: LinuxOSThread$ThreadPidStat;
    static THREAD_COUNT: LinuxOSThread$ThreadPidStat;
    static USER_TIME: LinuxOSThread$ThreadPidStat;
    static VSZ: LinuxOSThread$ThreadPidStat;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): LinuxOSThread$ThreadPidStat;
    static values(): LinuxOSThread$ThreadPidStat[];
    private constructor(arg2: number)
    readonly order: number;
    getOrder(): number;
    name(): "PPID" | "MINOR_FAULTS" | "MAJOR_FAULT" | "USER_TIME" | "KERNEL_TIME" | "PRIORITY" | "THREAD_COUNT" | "START_TIME" | "VSZ" | "RSS" | "START_CODE";
}
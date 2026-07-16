import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
export class LinuxOSProcess$ProcPidStat extends Enum<LinuxOSProcess$ProcPidStat> {
    static KERNEL_TIME: LinuxOSProcess$ProcPidStat;
    static MAJOR_FAULTS: LinuxOSProcess$ProcPidStat;
    static MINOR_FAULTS: LinuxOSProcess$ProcPidStat;
    static PPID: LinuxOSProcess$ProcPidStat;
    static PRIORITY: LinuxOSProcess$ProcPidStat;
    static RSS: LinuxOSProcess$ProcPidStat;
    static START_TIME: LinuxOSProcess$ProcPidStat;
    static THREAD_COUNT: LinuxOSProcess$ProcPidStat;
    static USER_TIME: LinuxOSProcess$ProcPidStat;
    static VSZ: LinuxOSProcess$ProcPidStat;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): LinuxOSProcess$ProcPidStat;
    static values(): LinuxOSProcess$ProcPidStat[];
    private constructor(arg2: number)
    readonly order: number;
    getOrder(): number;
    name(): "PPID" | "MINOR_FAULTS" | "MAJOR_FAULTS" | "USER_TIME" | "KERNEL_TIME" | "PRIORITY" | "THREAD_COUNT" | "START_TIME" | "VSZ" | "RSS";
}
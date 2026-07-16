import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
export class LinuxHWDiskStore$UdevStat extends Enum<LinuxHWDiskStore$UdevStat> {
    static ACTIVE_MS: LinuxHWDiskStore$UdevStat;
    static QUEUE_LENGTH: LinuxHWDiskStore$UdevStat;
    static READS: LinuxHWDiskStore$UdevStat;
    static READ_BYTES: LinuxHWDiskStore$UdevStat;
    static WRITES: LinuxHWDiskStore$UdevStat;
    static WRITE_BYTES: LinuxHWDiskStore$UdevStat;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): LinuxHWDiskStore$UdevStat;
    static values(): LinuxHWDiskStore$UdevStat[];
    private constructor(arg2: number)
    readonly order: number;
    getOrder(): number;
    name(): "READS" | "READ_BYTES" | "WRITES" | "WRITE_BYTES" | "QUEUE_LENGTH" | "ACTIVE_MS";
}
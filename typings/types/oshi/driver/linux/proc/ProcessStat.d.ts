import type { JavaMap } from '../../../../JavaMap.d.ts'
import type { File } from '../../../../java/io/File.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { ProcessStat$PidStat } from '../../../../oshi/driver/linux/proc/ProcessStat$PidStat.d.ts'
import type { ProcessStat$PidStatM } from '../../../../oshi/driver/linux/proc/ProcessStat$PidStatM.d.ts'
import type { OSProcess$State } from '../../../../oshi/software/os/OSProcess$State.d.ts'
import type { Triplet } from '../../../../oshi/util/tuples/Triplet.d.ts'
export class ProcessStat extends Object {
    static PROC_PID_STAT_LENGTH: number;
    static getFileDescriptorFiles(paramarg0: number): File[];
    static getPidFiles(): File[];
    static getPidStatM(paramarg0: number): JavaMap<ProcessStat$PidStatM, number>;
    static getPidStats(paramarg0: number): Triplet<string, string, JavaMap<ProcessStat$PidStat, number>>;
    static getState(paramarg0: string): OSProcess$State;
    static getThreadIds(paramarg0: number): number[];
    static querySocketToPidMap(): JavaMap<number, number>;
    private constructor()
}
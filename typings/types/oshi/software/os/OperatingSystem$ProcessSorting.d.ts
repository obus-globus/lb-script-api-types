import type { Comparator } from '../../../java/util/Comparator.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { OSProcess } from '../../../oshi/software/os/OSProcess.d.ts'
export class OperatingSystem$ProcessSorting extends Object {
    static CPU_DESC: (param0: OSProcess, param1: OSProcess) => number;
    static NAME_ASC: (param0: OSProcess, param1: OSProcess) => number;
    static NO_SORTING: (param0: OSProcess, param1: OSProcess) => number;
    static PARENTPID_ASC: (param0: OSProcess, param1: OSProcess) => number;
    static PID_ASC: (param0: OSProcess, param1: OSProcess) => number;
    static RSS_DESC: (param0: OSProcess, param1: OSProcess) => number;
    static UPTIME_ASC: (param0: OSProcess, param1: OSProcess) => number;
    static UPTIME_DESC: (param0: OSProcess, param1: OSProcess) => number;
    private constructor()
}
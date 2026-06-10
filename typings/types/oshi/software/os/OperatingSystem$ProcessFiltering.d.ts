import type { Predicate } from '../../../java/util/function/Predicate.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { OSProcess } from '../../../oshi/software/os/OSProcess.d.ts'
export class OperatingSystem$ProcessFiltering extends Object {
    static ALL_PROCESSES: (param0: OSProcess) => boolean;
    static BITNESS_32: (param0: OSProcess) => boolean;
    static BITNESS_64: (param0: OSProcess) => boolean;
    static NO_PARENT: (param0: OSProcess) => boolean;
    static VALID_PROCESS: (param0: OSProcess) => boolean;
    private constructor()
}
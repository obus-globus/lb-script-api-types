import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
export class OpenBsdOSProcess$PsThreadColumns extends Enum<OpenBsdOSProcess$PsThreadColumns> {
    static ARGS: OpenBsdOSProcess$PsThreadColumns;
    static CPUTIME: OpenBsdOSProcess$PsThreadColumns;
    static ETIME: OpenBsdOSProcess$PsThreadColumns;
    static MAJFLT: OpenBsdOSProcess$PsThreadColumns;
    static MINFLT: OpenBsdOSProcess$PsThreadColumns;
    static NIVCSW: OpenBsdOSProcess$PsThreadColumns;
    static NVCSW: OpenBsdOSProcess$PsThreadColumns;
    static PRI: OpenBsdOSProcess$PsThreadColumns;
    static STATE: OpenBsdOSProcess$PsThreadColumns;
    static TID: OpenBsdOSProcess$PsThreadColumns;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): OpenBsdOSProcess$PsThreadColumns;
    static values(): OpenBsdOSProcess$PsThreadColumns[];
    private constructor()
    name(): "TID" | "STATE" | "ETIME" | "CPUTIME" | "NIVCSW" | "NVCSW" | "MAJFLT" | "MINFLT" | "PRI" | "ARGS";
}
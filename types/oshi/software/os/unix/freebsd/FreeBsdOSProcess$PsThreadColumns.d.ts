import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
export class FreeBsdOSProcess$PsThreadColumns extends Enum<FreeBsdOSProcess$PsThreadColumns> {
    static ETIMES: FreeBsdOSProcess$PsThreadColumns;
    static LWP: FreeBsdOSProcess$PsThreadColumns;
    static MAJFLT: FreeBsdOSProcess$PsThreadColumns;
    static MINFLT: FreeBsdOSProcess$PsThreadColumns;
    static NIVCSW: FreeBsdOSProcess$PsThreadColumns;
    static NVCSW: FreeBsdOSProcess$PsThreadColumns;
    static PRI: FreeBsdOSProcess$PsThreadColumns;
    static STATE: FreeBsdOSProcess$PsThreadColumns;
    static SYSTIME: FreeBsdOSProcess$PsThreadColumns;
    static TDADDR: FreeBsdOSProcess$PsThreadColumns;
    static TDNAME: FreeBsdOSProcess$PsThreadColumns;
    static TIME: FreeBsdOSProcess$PsThreadColumns;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): FreeBsdOSProcess$PsThreadColumns;
    static values(): (Object | null)[];
    private constructor()
    name(): "TDNAME" | "LWP" | "STATE" | "ETIMES" | "SYSTIME" | "TIME" | "TDADDR" | "NIVCSW" | "NVCSW" | "MAJFLT" | "MINFLT" | "PRI";
}
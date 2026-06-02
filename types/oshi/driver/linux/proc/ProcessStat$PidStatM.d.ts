import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
export class ProcessStat$PidStatM extends Enum<ProcessStat$PidStatM> {
    static DATA: ProcessStat$PidStatM;
    static DT: ProcessStat$PidStatM;
    static LIB: ProcessStat$PidStatM;
    static RESIDENT: ProcessStat$PidStatM;
    static SHARED: ProcessStat$PidStatM;
    static SIZE: ProcessStat$PidStatM;
    static TEXT: ProcessStat$PidStatM;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): ProcessStat$PidStatM;
    static values(): (Object | null)[];
    private constructor()
    name(): "SIZE" | "RESIDENT" | "SHARED" | "TEXT" | "LIB" | "DATA" | "DT";
}
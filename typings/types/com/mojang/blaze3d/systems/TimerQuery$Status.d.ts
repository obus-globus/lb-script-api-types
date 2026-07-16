import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
export class TimerQuery$Status extends Enum<TimerQuery$Status> {
    static AWAITING_VALUES: TimerQuery$Status;
    static NOT_RECORDING: TimerQuery$Status;
    static STARTED: TimerQuery$Status;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramname: string): TimerQuery$Status;
    static values(): TimerQuery$Status[];
    private constructor()
    name(): "NOT_RECORDING" | "STARTED" | "AWAITING_VALUES";
}
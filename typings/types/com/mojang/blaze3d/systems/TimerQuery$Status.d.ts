import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
export class TimerQuery$Status extends Enum<TimerQuery$Status> {
    static AWAITING_VALUES: TimerQuery$Status;
    static NOT_RECORDING: TimerQuery$Status;
    static STARTED: TimerQuery$Status;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramname: string): TimerQuery$Status;
    static values(): TimerQuery$Status[];
    private constructor()
    name(): "NOT_RECORDING" | "STARTED" | "AWAITING_VALUES";
}
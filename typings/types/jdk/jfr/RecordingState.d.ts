import type { Class } from '../../java/lang/Class.d.ts'
import type { Enum } from '../../java/lang/Enum.d.ts'
export class RecordingState extends Enum<RecordingState> {
    static CLOSED: RecordingState;
    static DELAYED: RecordingState;
    static NEW: RecordingState;
    static RUNNING: RecordingState;
    static STOPPED: RecordingState;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): RecordingState;
    static values(): RecordingState[];
    private constructor()
    name(): "NEW" | "DELAYED" | "RUNNING" | "STOPPED" | "CLOSED";
}
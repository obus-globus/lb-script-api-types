import type { Class } from '../../java/lang/Class.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
import type { Enum } from '../../java/lang/Enum.d.ts'
export class RecordingState extends Enum<RecordingState> {
    static CLOSED: RecordingState;
    static DELAYED: RecordingState;
    static NEW: RecordingState;
    static RUNNING: RecordingState;
    static STOPPED: RecordingState;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): RecordingState;
    static values(): (Object | null)[];
    private constructor()
    name(): "NEW" | "DELAYED" | "RUNNING" | "STOPPED" | "CLOSED";
}
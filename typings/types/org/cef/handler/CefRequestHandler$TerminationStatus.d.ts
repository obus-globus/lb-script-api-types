import type { Class } from '../../../java/lang/Class.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { Enum } from '../../../java/lang/Enum.d.ts'
export class CefRequestHandler$TerminationStatus extends Enum<CefRequestHandler$TerminationStatus> {
    static TS_ABNORMAL_TERMINATION: CefRequestHandler$TerminationStatus;
    static TS_INTEGRITY_FAILURE: CefRequestHandler$TerminationStatus;
    static TS_LAUNCH_FAILED: CefRequestHandler$TerminationStatus;
    static TS_NUM_VALUES: CefRequestHandler$TerminationStatus;
    static TS_PROCESS_CRASHED: CefRequestHandler$TerminationStatus;
    static TS_PROCESS_OOM: CefRequestHandler$TerminationStatus;
    static TS_PROCESS_WAS_KILLED: CefRequestHandler$TerminationStatus;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): CefRequestHandler$TerminationStatus;
    static values(): CefRequestHandler$TerminationStatus[];
    private constructor()
    name(): "TS_ABNORMAL_TERMINATION" | "TS_PROCESS_WAS_KILLED" | "TS_PROCESS_CRASHED" | "TS_PROCESS_OOM" | "TS_LAUNCH_FAILED" | "TS_INTEGRITY_FAILURE" | "TS_NUM_VALUES";
}
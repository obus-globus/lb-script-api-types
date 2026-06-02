import type { Class } from '../../../java/lang/Class.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { Enum } from '../../../java/lang/Enum.d.ts'
export class TracyFrameCapture$Status extends Enum<TracyFrameCapture$Status> {
    static WAITING_FOR_CAPTURE: TracyFrameCapture$Status;
    static WAITING_FOR_COPY: TracyFrameCapture$Status;
    static WAITING_FOR_UPLOAD: TracyFrameCapture$Status;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramname: string): TracyFrameCapture$Status;
    static values(): (Object | null)[];
    private constructor()
    name(): "WAITING_FOR_CAPTURE" | "WAITING_FOR_COPY" | "WAITING_FOR_UPLOAD";
}
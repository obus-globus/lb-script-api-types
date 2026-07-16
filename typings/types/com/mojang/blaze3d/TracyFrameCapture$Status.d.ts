import type { Class } from '../../../java/lang/Class.d.ts'
import type { Enum } from '../../../java/lang/Enum.d.ts'
export class TracyFrameCapture$Status extends Enum<TracyFrameCapture$Status> {
    static WAITING_FOR_CAPTURE: TracyFrameCapture$Status;
    static WAITING_FOR_COPY: TracyFrameCapture$Status;
    static WAITING_FOR_UPLOAD: TracyFrameCapture$Status;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramname: string): TracyFrameCapture$Status;
    static values(): TracyFrameCapture$Status[];
    private constructor()
    name(): "WAITING_FOR_CAPTURE" | "WAITING_FOR_COPY" | "WAITING_FOR_UPLOAD";
}
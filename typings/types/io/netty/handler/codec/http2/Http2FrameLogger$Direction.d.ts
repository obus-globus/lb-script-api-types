import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
export class Http2FrameLogger$Direction extends Enum<Http2FrameLogger$Direction> {
    static INBOUND: Http2FrameLogger$Direction;
    static OUTBOUND: Http2FrameLogger$Direction;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): Http2FrameLogger$Direction;
    static values(): Http2FrameLogger$Direction[];
    private constructor()
    name(): "INBOUND" | "OUTBOUND";
}
import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
export class Http2FrameStreamEvent$Type extends Enum<Http2FrameStreamEvent$Type> {
    static State: Http2FrameStreamEvent$Type;
    static Writability: Http2FrameStreamEvent$Type;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): Http2FrameStreamEvent$Type;
    static values(): Http2FrameStreamEvent$Type[];
    private constructor()
    name(): "State" | "Writability";
}
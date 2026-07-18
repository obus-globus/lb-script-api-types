import type { Class } from '../../../java/lang/Class.d.ts'
import type { Enum } from '../../../java/lang/Enum.d.ts'
export class FrameParser$State extends Enum<FrameParser$State> {
    static BODY: FrameParser$State;
    static HEADER0: FrameParser$State;
    static LENGTH: FrameParser$State;
    static MASK_KEY: FrameParser$State;
    static getEntries(): FrameParser$State[];
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(value: string): FrameParser$State;
    static values(): FrameParser$State[];
    private constructor()
    name(): "HEADER0" | "LENGTH" | "MASK_KEY" | "BODY";
}
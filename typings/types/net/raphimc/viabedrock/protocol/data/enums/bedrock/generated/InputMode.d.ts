import type { Class } from '../../../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../../../java/lang/Enum.d.ts'
export class InputMode extends Enum<InputMode> {
    static GamePad: InputMode;
    static MotionController_Deprecated: InputMode;
    static Mouse: InputMode;
    static Touch: InputMode;
    static Undefined: InputMode;
    static getByName(paramarg0: string): InputMode;
    static getByName(paramarg0: string, paramarg1: InputMode): InputMode;
    static getByValue(paramarg0: number): InputMode;
    static getByValue(paramarg0: number, paramarg1: InputMode): InputMode;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): InputMode;
    static values(): (Object | null)[];
    private constructor(arg2: number)
    private constructor(arg2: InputMode)
    readonly value: number;
    getValue(): number;
    name(): "Undefined" | "Mouse" | "Touch" | "GamePad" | "MotionController_Deprecated";
}
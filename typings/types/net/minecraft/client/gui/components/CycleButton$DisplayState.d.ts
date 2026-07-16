import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
export class CycleButton$DisplayState extends Enum<CycleButton$DisplayState> {
    static HIDE: CycleButton$DisplayState;
    static NAME_AND_VALUE: CycleButton$DisplayState;
    static VALUE: CycleButton$DisplayState;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramname: string): CycleButton$DisplayState;
    static values(): CycleButton$DisplayState[];
    private constructor()
    name(): "NAME_AND_VALUE" | "VALUE" | "HIDE";
}
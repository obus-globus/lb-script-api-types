import type { Class } from '../../../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../../../java/lang/Enum.d.ts'
export class InputFlag extends Enum<InputFlag> {
    static BACKWARD: InputFlag;
    static FORWARD: InputFlag;
    static JUMP: InputFlag;
    static LEFT: InputFlag;
    static RIGHT: InputFlag;
    static SHIFT: InputFlag;
    static SPRINT: InputFlag;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): InputFlag;
    static values(): InputFlag[];
    private constructor()
    getBit(): number;
    name(): "FORWARD" | "BACKWARD" | "LEFT" | "RIGHT" | "JUMP" | "SHIFT" | "SPRINT";
}
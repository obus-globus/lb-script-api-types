import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
export class InputStringGenerator$State extends Enum<InputStringGenerator$State> {
    static advance: InputStringGenerator$State;
    static backtrack: InputStringGenerator$State;
    static done: InputStringGenerator$State;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramname: string): InputStringGenerator$State;
    static values(): InputStringGenerator$State[];
    private constructor()
    name(): "advance" | "backtrack" | "done";
}
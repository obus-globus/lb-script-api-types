import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
export class InputStringGenerator$State extends Enum<InputStringGenerator$State> {
    static advance: InputStringGenerator$State;
    static backtrack: InputStringGenerator$State;
    static done: InputStringGenerator$State;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramname: string): InputStringGenerator$State;
    static values(): (Object | null)[];
    private constructor()
    name(): "advance" | "backtrack" | "done";
}
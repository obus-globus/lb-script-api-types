import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../../java/lang/Enum.d.ts'
export class IsArrayNode$Kind extends Enum<IsArrayNode$Kind> {
    static AnyArray: IsArrayNode$Kind;
    static Array: IsArrayNode$Kind;
    static FastArray: IsArrayNode$Kind;
    static FastOrTypedArray: IsArrayNode$Kind;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramname: string): IsArrayNode$Kind;
    static values(): IsArrayNode$Kind[];
    private constructor()
    name(): "FastOrTypedArray" | "FastArray" | "Array" | "AnyArray";
}
import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../java/lang/Enum.d.ts'
export class IsArrayNode$Kind extends Enum<IsArrayNode$Kind> {
    static AnyArray: IsArrayNode$Kind;
    static Array: IsArrayNode$Kind;
    static FastArray: IsArrayNode$Kind;
    static FastOrTypedArray: IsArrayNode$Kind;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramname: string): IsArrayNode$Kind;
    static values(): IsArrayNode$Kind[];
    private constructor()
    name(): "FastOrTypedArray" | "FastArray" | "Array" | "AnyArray";
}
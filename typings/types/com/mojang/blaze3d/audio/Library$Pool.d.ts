import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
export class Library$Pool extends Enum<Library$Pool> {
    static STATIC: Library$Pool;
    static STREAMING: Library$Pool;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramname: string): Library$Pool;
    static values(): Library$Pool[];
    private constructor()
    name(): "STATIC" | "STREAMING";
}
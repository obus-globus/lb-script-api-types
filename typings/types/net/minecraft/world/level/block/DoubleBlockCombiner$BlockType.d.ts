import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
export class DoubleBlockCombiner$BlockType extends Enum<DoubleBlockCombiner$BlockType> {
    static FIRST: DoubleBlockCombiner$BlockType;
    static SECOND: DoubleBlockCombiner$BlockType;
    static SINGLE: DoubleBlockCombiner$BlockType;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramname: string): DoubleBlockCombiner$BlockType;
    static values(): (Object | null)[];
    private constructor()
    name(): "SINGLE" | "FIRST" | "SECOND";
}
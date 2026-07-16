import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
export class DoubleBlockCombiner$BlockType extends Enum<DoubleBlockCombiner$BlockType> {
    static FIRST: DoubleBlockCombiner$BlockType;
    static SECOND: DoubleBlockCombiner$BlockType;
    static SINGLE: DoubleBlockCombiner$BlockType;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramname: string): DoubleBlockCombiner$BlockType;
    static values(): DoubleBlockCombiner$BlockType[];
    private constructor()
    name(): "SINGLE" | "FIRST" | "SECOND";
}
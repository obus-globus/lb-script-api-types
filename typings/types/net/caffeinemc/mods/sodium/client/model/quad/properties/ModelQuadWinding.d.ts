import type { Class } from '../../../../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../../../../java/lang/Enum.d.ts'
export class ModelQuadWinding extends Enum<ModelQuadWinding> {
    static CLOCKWISE: ModelQuadWinding;
    static COUNTERCLOCKWISE: ModelQuadWinding;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): ModelQuadWinding;
    static values(): ModelQuadWinding[];
    private constructor(arg2: number[])
    readonly indices: number[];
    getIndices(): number[];
    name(): "CLOCKWISE" | "COUNTERCLOCKWISE";
}
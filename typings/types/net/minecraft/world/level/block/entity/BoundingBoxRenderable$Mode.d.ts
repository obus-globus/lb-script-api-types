import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../../java/lang/Enum.d.ts'
export class BoundingBoxRenderable$Mode extends Enum<BoundingBoxRenderable$Mode> {
    static BOX: BoundingBoxRenderable$Mode;
    static BOX_AND_INVISIBLE_BLOCKS: BoundingBoxRenderable$Mode;
    static NONE: BoundingBoxRenderable$Mode;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramname: string): BoundingBoxRenderable$Mode;
    static values(): BoundingBoxRenderable$Mode[];
    private constructor()
    name(): "NONE" | "BOX" | "BOX_AND_INVISIBLE_BLOCKS";
}
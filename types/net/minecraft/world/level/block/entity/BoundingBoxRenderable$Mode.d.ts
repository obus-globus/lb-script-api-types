import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../java/lang/Enum.d.ts'
export class BoundingBoxRenderable$Mode extends Enum<BoundingBoxRenderable$Mode> {
    static BOX: BoundingBoxRenderable$Mode;
    static BOX_AND_INVISIBLE_BLOCKS: BoundingBoxRenderable$Mode;
    static NONE: BoundingBoxRenderable$Mode;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramname: string): BoundingBoxRenderable$Mode;
    static values(): (Object | null)[];
    private constructor()
    name(): "NONE" | "BOX" | "BOX_AND_INVISIBLE_BLOCKS";
}
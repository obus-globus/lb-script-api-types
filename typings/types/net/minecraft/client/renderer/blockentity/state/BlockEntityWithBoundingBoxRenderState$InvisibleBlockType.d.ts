import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../../java/lang/Enum.d.ts'
export class BlockEntityWithBoundingBoxRenderState$InvisibleBlockType extends Enum<BlockEntityWithBoundingBoxRenderState$InvisibleBlockType> {
    static AIR: BlockEntityWithBoundingBoxRenderState$InvisibleBlockType;
    static BARRIER: BlockEntityWithBoundingBoxRenderState$InvisibleBlockType;
    static LIGHT: BlockEntityWithBoundingBoxRenderState$InvisibleBlockType;
    static STRUCTURE_VOID: BlockEntityWithBoundingBoxRenderState$InvisibleBlockType;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramname: string): BlockEntityWithBoundingBoxRenderState$InvisibleBlockType;
    static values(): BlockEntityWithBoundingBoxRenderState$InvisibleBlockType[];
    private constructor()
    name(): "AIR" | "BARRIER" | "LIGHT" | "STRUCTURE_VOID";
}
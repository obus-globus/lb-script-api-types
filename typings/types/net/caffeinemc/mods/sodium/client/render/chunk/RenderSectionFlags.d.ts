import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export class RenderSectionFlags extends Object {
    static HAS_ANIMATED_SPRITES: number;
    static HAS_BLOCK_ENTITIES: number;
    static HAS_BLOCK_GEOMETRY: number;
    static IS_BUILT: number;
    static MASK_HAS_ANIMATED_SPRITES: number;
    static MASK_HAS_BLOCK_ENTITIES: number;
    static MASK_HAS_BLOCK_GEOMETRY: number;
    static MASK_IS_BUILT: number;
    static MASK_NEEDS_RENDER: number;
    static NONE: number;
    static needsRender(paramarg0: number): boolean;
    static renderingMoreTypesNow(paramarg0: number, paramarg1: number): boolean;
    constructor()
}
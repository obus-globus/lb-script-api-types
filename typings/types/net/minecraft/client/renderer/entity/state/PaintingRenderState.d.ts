import type { EntityRenderState } from '../../../../../../net/minecraft/client/renderer/entity/state/EntityRenderState.d.ts'
import type { Direction } from '../../../../../../net/minecraft/core/Direction.d.ts'
import type { PaintingVariant } from '../../../../../../net/minecraft/world/entity/decoration/painting/PaintingVariant.d.ts'
export class PaintingRenderState extends EntityRenderState {
    static NO_OUTLINE: number;
    constructor()
    direction: Direction;
    lightCoordsPerBlock: number[];
    variant: PaintingVariant;
}
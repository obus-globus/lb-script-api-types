import type { BlockModelRenderState } from '../../../../../../net/minecraft/client/renderer/block/BlockModelRenderState.d.ts'
import type { EntityRenderState } from '../../../../../../net/minecraft/client/renderer/entity/state/EntityRenderState.d.ts'
import type { Vec3 } from '../../../../../../net/minecraft/world/phys/Vec3.d.ts'
export class MinecartRenderState extends EntityRenderState {
    static NO_OUTLINE: number;
    constructor()
    backPos: Vec3;
    damageTime: number;
    displayBlockModel: BlockModelRenderState;
    displayOffset: number;
    frontPos: Vec3;
    hurtDir: number;
    hurtTime: number;
    isNewRender: boolean;
    offsetSeed: number;
    posOnRail: Vec3;
    renderPos: Vec3;
    xRot: number;
    yRot: number;
}
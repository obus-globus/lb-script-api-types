import type { EntityRenderState } from '../../../../../../net/minecraft/client/renderer/entity/state/EntityRenderState.d.ts'
import type { Vec3 } from '../../../../../../net/minecraft/world/phys/Vec3.d.ts'
export class EndCrystalRenderState extends EntityRenderState {
    static NO_OUTLINE: number;
    constructor()
    beamOffset: Vec3;
    showsBottom: boolean;
}
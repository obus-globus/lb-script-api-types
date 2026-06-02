import type { LivingEntityRenderState } from '../../../../../../net/minecraft/client/renderer/entity/state/LivingEntityRenderState.d.ts'
import type { Vec3 } from '../../../../../../net/minecraft/world/phys/Vec3.d.ts'
export class GuardianRenderState extends LivingEntityRenderState {
    static NO_OUTLINE: number;
    constructor()
    attackScale: number;
    attackTargetPosition: Vec3;
    attackTime: number;
    eyePosition: Vec3;
    lookAtPosition: Vec3;
    lookDirection: Vec3;
    spikesAnimation: number;
    tailAnimation: number;
}
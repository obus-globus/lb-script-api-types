import type { Record } from '../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Camera } from '../../../../net/minecraft/client/Camera.d.ts'
import type { ItemPickupParticle } from '../../../../net/minecraft/client/particle/ItemPickupParticle.d.ts'
import type { EntityRenderState } from '../../../../net/minecraft/client/renderer/entity/state/EntityRenderState.d.ts'
export class ItemPickupParticleGroup$ParticleInstance extends Record {
    static fromParticle(paramparticle: ItemPickupParticle, paramcamera: Camera, parampartialTickTime: number): ItemPickupParticleGroup$ParticleInstance;
    // private itemRenderState: EntityRenderState;
    // private xOffset: number;
    // private yOffset: number;
    // private zOffset: number;
    equals(o: Object | null): boolean;
    hashCode(): number;
    itemRenderState(): EntityRenderState;
    toString(): string;
    xOffset(): number;
    yOffset(): number;
    zOffset(): number;
}
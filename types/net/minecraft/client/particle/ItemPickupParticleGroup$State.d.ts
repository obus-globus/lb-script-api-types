import type { Record } from '../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { ItemPickupParticleGroup$ParticleInstance } from '../../../../net/minecraft/client/particle/ItemPickupParticleGroup$ParticleInstance.d.ts'
import type { SubmitNodeCollector } from '../../../../net/minecraft/client/renderer/SubmitNodeCollector.d.ts'
import type { CameraRenderState } from '../../../../net/minecraft/client/renderer/state/level/CameraRenderState.d.ts'
import type { ParticleGroupRenderState } from '../../../../net/minecraft/client/renderer/state/level/ParticleGroupRenderState.d.ts'
export class ItemPickupParticleGroup$State extends Record implements ParticleGroupRenderState {
    constructor(instances: ItemPickupParticleGroup$ParticleInstance[])
    // private instances: ItemPickupParticleGroup$ParticleInstance[];
    clear(): void;
    equals(o: Object | null): boolean;
    hashCode(): number;
    instances(): ItemPickupParticleGroup$ParticleInstance[];
    submit(submitNodeCollector: SubmitNodeCollector, camera: CameraRenderState): void;
    toString(): string;
}
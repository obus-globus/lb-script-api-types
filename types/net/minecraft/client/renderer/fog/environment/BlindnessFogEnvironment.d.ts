import type { Camera } from '../../../../../../net/minecraft/client/Camera.d.ts'
import type { DeltaTracker } from '../../../../../../net/minecraft/client/DeltaTracker.d.ts'
import type { ClientLevel } from '../../../../../../net/minecraft/client/multiplayer/ClientLevel.d.ts'
import type { FogData } from '../../../../../../net/minecraft/client/renderer/fog/FogData.d.ts'
import type { MobEffectFogEnvironment } from '../../../../../../net/minecraft/client/renderer/fog/environment/MobEffectFogEnvironment.d.ts'
import type { Holder } from '../../../../../../net/minecraft/core/Holder.d.ts'
import type { MobEffect } from '../../../../../../net/minecraft/world/effect/MobEffect.d.ts'
import type { LivingEntity } from '../../../../../../net/minecraft/world/entity/LivingEntity.d.ts'
export class BlindnessFogEnvironment extends MobEffectFogEnvironment {
    constructor()
    getMobEffect(): Holder<MobEffect>;
    getModifiedDarkness(entity: LivingEntity, darkness: number, partialTickTime: number): number;
    setupFog(fog: FogData, camera: Camera, level: ClientLevel, renderDistance: number, deltaTracker: DeltaTracker): void;
}
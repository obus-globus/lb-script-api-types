import type { FogEnvironment } from '../../../../../../net/minecraft/client/renderer/fog/environment/FogEnvironment.d.ts'
import type { Holder } from '../../../../../../net/minecraft/core/Holder.d.ts'
import type { MobEffect } from '../../../../../../net/minecraft/world/effect/MobEffect.d.ts'
import type { Entity } from '../../../../../../net/minecraft/world/entity/Entity.d.ts'
import type { FogType } from '../../../../../../net/minecraft/world/level/material/FogType.d.ts'
export abstract class MobEffectFogEnvironment extends FogEnvironment {
    constructor()
    getMobEffect(): Holder<MobEffect>;
    isApplicable(fogType: FogType, entity: Entity): boolean;
    modifiesDarkness(): boolean;
    providesColor(): boolean;
}
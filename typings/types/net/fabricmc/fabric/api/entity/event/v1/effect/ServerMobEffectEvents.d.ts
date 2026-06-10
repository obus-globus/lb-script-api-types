import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { EffectEventContext } from '../../../../../../../../net/fabricmc/fabric/api/entity/event/v1/effect/EffectEventContext.d.ts'
import type { ServerMobEffectEvents$AfterAdd } from '../../../../../../../../net/fabricmc/fabric/api/entity/event/v1/effect/ServerMobEffectEvents$AfterAdd.d.ts'
import type { ServerMobEffectEvents$AfterRemove } from '../../../../../../../../net/fabricmc/fabric/api/entity/event/v1/effect/ServerMobEffectEvents$AfterRemove.d.ts'
import type { ServerMobEffectEvents$AllowAdd } from '../../../../../../../../net/fabricmc/fabric/api/entity/event/v1/effect/ServerMobEffectEvents$AllowAdd.d.ts'
import type { ServerMobEffectEvents$AllowEarlyRemove } from '../../../../../../../../net/fabricmc/fabric/api/entity/event/v1/effect/ServerMobEffectEvents$AllowEarlyRemove.d.ts'
import type { ServerMobEffectEvents$BeforeAdd } from '../../../../../../../../net/fabricmc/fabric/api/entity/event/v1/effect/ServerMobEffectEvents$BeforeAdd.d.ts'
import type { ServerMobEffectEvents$BeforeRemove } from '../../../../../../../../net/fabricmc/fabric/api/entity/event/v1/effect/ServerMobEffectEvents$BeforeRemove.d.ts'
import type { Event } from '../../../../../../../../net/fabricmc/fabric/api/event/Event.d.ts'
import type { MobEffectInstance } from '../../../../../../../../net/minecraft/world/effect/MobEffectInstance.d.ts'
import type { LivingEntity } from '../../../../../../../../net/minecraft/world/entity/LivingEntity.d.ts'
export class ServerMobEffectEvents extends Object {
    static AFTER_ADD: Event<(param0: MobEffectInstance, param1: LivingEntity, param2: EffectEventContext) => void>;
    static AFTER_REMOVE: Event<(param0: MobEffectInstance, param1: LivingEntity, param2: EffectEventContext) => void>;
    static ALLOW_ADD: Event<(param0: MobEffectInstance, param1: LivingEntity, param2: EffectEventContext) => boolean>;
    static ALLOW_EARLY_REMOVE: Event<(param0: MobEffectInstance, param1: LivingEntity, param2: EffectEventContext) => boolean>;
    static BEFORE_ADD: Event<(param0: MobEffectInstance, param1: LivingEntity, param2: EffectEventContext) => void>;
    static BEFORE_REMOVE: Event<(param0: MobEffectInstance, param1: LivingEntity, param2: EffectEventContext) => void>;
    private constructor()
}
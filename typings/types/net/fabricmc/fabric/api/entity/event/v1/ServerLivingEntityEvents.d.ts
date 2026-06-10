import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { ServerLivingEntityEvents$AfterDamage } from '../../../../../../../net/fabricmc/fabric/api/entity/event/v1/ServerLivingEntityEvents$AfterDamage.d.ts'
import type { ServerLivingEntityEvents$AfterDeath } from '../../../../../../../net/fabricmc/fabric/api/entity/event/v1/ServerLivingEntityEvents$AfterDeath.d.ts'
import type { ServerLivingEntityEvents$AllowDamage } from '../../../../../../../net/fabricmc/fabric/api/entity/event/v1/ServerLivingEntityEvents$AllowDamage.d.ts'
import type { ServerLivingEntityEvents$AllowDeath } from '../../../../../../../net/fabricmc/fabric/api/entity/event/v1/ServerLivingEntityEvents$AllowDeath.d.ts'
import type { ServerLivingEntityEvents$MobConversion } from '../../../../../../../net/fabricmc/fabric/api/entity/event/v1/ServerLivingEntityEvents$MobConversion.d.ts'
import type { Event } from '../../../../../../../net/fabricmc/fabric/api/event/Event.d.ts'
import type { DamageSource } from '../../../../../../../net/minecraft/world/damagesource/DamageSource.d.ts'
import type { ConversionParams } from '../../../../../../../net/minecraft/world/entity/ConversionParams.d.ts'
import type { LivingEntity } from '../../../../../../../net/minecraft/world/entity/LivingEntity.d.ts'
import type { Mob } from '../../../../../../../net/minecraft/world/entity/Mob.d.ts'
export class ServerLivingEntityEvents extends Object {
    static AFTER_DAMAGE: Event<(param0: LivingEntity, param1: DamageSource, param2: number, param3: number, param4: boolean) => void>;
    static AFTER_DEATH: Event<(param0: LivingEntity, param1: DamageSource) => void>;
    static ALLOW_DAMAGE: Event<(param0: LivingEntity, param1: DamageSource, param2: number) => boolean>;
    static ALLOW_DEATH: Event<(param0: LivingEntity, param1: DamageSource, param2: number) => boolean>;
    static MOB_CONVERSION: Event<(param0: Mob, param1: Mob, param2: ConversionParams) => void>;
    private constructor()
}
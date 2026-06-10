import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { ServerPlayerEvents$AfterRespawn } from '../../../../../../../net/fabricmc/fabric/api/entity/event/v1/ServerPlayerEvents$AfterRespawn.d.ts'
import type { ServerPlayerEvents$AllowDeath } from '../../../../../../../net/fabricmc/fabric/api/entity/event/v1/ServerPlayerEvents$AllowDeath.d.ts'
import type { ServerPlayerEvents$CopyFrom } from '../../../../../../../net/fabricmc/fabric/api/entity/event/v1/ServerPlayerEvents$CopyFrom.d.ts'
import type { ServerPlayerEvents$Join } from '../../../../../../../net/fabricmc/fabric/api/entity/event/v1/ServerPlayerEvents$Join.d.ts'
import type { ServerPlayerEvents$Leave } from '../../../../../../../net/fabricmc/fabric/api/entity/event/v1/ServerPlayerEvents$Leave.d.ts'
import type { Event } from '../../../../../../../net/fabricmc/fabric/api/event/Event.d.ts'
import type { ServerPlayer } from '../../../../../../../net/minecraft/server/level/ServerPlayer.d.ts'
import type { DamageSource } from '../../../../../../../net/minecraft/world/damagesource/DamageSource.d.ts'
export class ServerPlayerEvents extends Object {
    static AFTER_RESPAWN: Event<(param0: ServerPlayer, param1: ServerPlayer, param2: boolean) => void>;
    static ALLOW_DEATH: Event<(param0: ServerPlayer, param1: DamageSource, param2: number) => boolean>;
    static COPY_FROM: Event<(param0: ServerPlayer, param1: ServerPlayer, param2: boolean) => void>;
    static JOIN: Event<(param0: ServerPlayer) => void>;
    static LEAVE: Event<(param0: ServerPlayer) => void>;
    private constructor()
}
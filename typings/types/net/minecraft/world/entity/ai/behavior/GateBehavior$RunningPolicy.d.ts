import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Stream } from '../../../../../../java/util/stream/Stream.d.ts'
import type { Enum } from '../../../../../../java/lang/Enum.d.ts'
import type { ServerLevel } from '../../../../../../net/minecraft/server/level/ServerLevel.d.ts'
import type { LivingEntity } from '../../../../../../net/minecraft/world/entity/LivingEntity.d.ts'
import type { BehaviorControl } from '../../../../../../net/minecraft/world/entity/ai/behavior/BehaviorControl.d.ts'
export class GateBehavior$RunningPolicy extends Enum<GateBehavior$RunningPolicy> {
    static RUN_ONE: GateBehavior$RunningPolicy;
    static TRY_ALL: GateBehavior$RunningPolicy;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramname: string): GateBehavior$RunningPolicy;
    static values(): GateBehavior$RunningPolicy[];
    private constructor()
    apply<E extends LivingEntity>(behaviors: Stream<BehaviorControl<E>>, level: ServerLevel, body: E, timestamp: number): void;
    name(): "RUN_ONE" | "TRY_ALL";
}
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { ServerLevel } from '../../../../../../net/minecraft/server/level/ServerLevel.d.ts'
import type { LivingEntity } from '../../../../../../net/minecraft/world/entity/LivingEntity.d.ts'
import type { Behavior$Status } from '../../../../../../net/minecraft/world/entity/ai/behavior/Behavior$Status.d.ts'
import type { BehaviorControl } from '../../../../../../net/minecraft/world/entity/ai/behavior/BehaviorControl.d.ts'
import type { Trigger } from '../../../../../../net/minecraft/world/entity/ai/behavior/declarative/Trigger.d.ts'
export abstract class OneShot<E extends LivingEntity> extends Object implements BehaviorControl<E>, Trigger<E> {
    constructor()
    readonly status: Behavior$Status;
    debugString(): string;
    doStop(level: ServerLevel, body: E, timestamp: number): void;
    getStatus(): Behavior$Status;
    tickOrStop(level: ServerLevel, body: E, timestamp: number): void;
    tryStart(level: ServerLevel, body: E, timestamp: number): boolean;
}
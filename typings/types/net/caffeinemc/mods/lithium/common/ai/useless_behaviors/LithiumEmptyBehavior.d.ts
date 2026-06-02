import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { ServerLevel } from '../../../../../../../net/minecraft/server/level/ServerLevel.d.ts'
import type { LivingEntity } from '../../../../../../../net/minecraft/world/entity/LivingEntity.d.ts'
import type { Behavior$Status } from '../../../../../../../net/minecraft/world/entity/ai/behavior/Behavior$Status.d.ts'
import type { BehaviorControl } from '../../../../../../../net/minecraft/world/entity/ai/behavior/BehaviorControl.d.ts'
import type { MemoryModuleType } from '../../../../../../../net/minecraft/world/entity/ai/memory/MemoryModuleType.d.ts'
export class LithiumEmptyBehavior<E extends LivingEntity> extends Object implements BehaviorControl<E> {
    static EMPTY_BEHAVIOR_SENTINEL: LithiumEmptyBehavior<Object>;
    constructor()
    debugString(): string;
    doStop(arg0: ServerLevel, arg1: E, arg2: number): void;
    getRequiredMemories(): MemoryModuleType<Object>[];
    getStatus(): Behavior$Status;
    tickOrStop(arg0: ServerLevel, arg1: E, arg2: number): void;
    tryStart(arg0: ServerLevel, arg1: E, arg2: number): boolean;
}
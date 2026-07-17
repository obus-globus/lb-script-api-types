import type { JavaMap } from '../../../../../../JavaMap.d.ts'
import type { Pair } from '../../../../../../com/mojang/datafixers/util/Pair.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { ServerLevel } from '../../../../../../net/minecraft/server/level/ServerLevel.d.ts'
import type { LivingEntity } from '../../../../../../net/minecraft/world/entity/LivingEntity.d.ts'
import type { Behavior$Status } from '../../../../../../net/minecraft/world/entity/ai/behavior/Behavior$Status.d.ts'
import type { BehaviorControl } from '../../../../../../net/minecraft/world/entity/ai/behavior/BehaviorControl.d.ts'
import type { GateBehavior$OrderPolicy } from '../../../../../../net/minecraft/world/entity/ai/behavior/GateBehavior$OrderPolicy.d.ts'
import type { GateBehavior$RunningPolicy } from '../../../../../../net/minecraft/world/entity/ai/behavior/GateBehavior$RunningPolicy.d.ts'
import type { MemoryModuleType } from '../../../../../../net/minecraft/world/entity/ai/memory/MemoryModuleType.d.ts'
import type { MemoryStatus } from '../../../../../../net/minecraft/world/entity/ai/memory/MemoryStatus.d.ts'
export class GateBehavior<E extends LivingEntity> extends Object implements BehaviorControl<E> {
    constructor(entryCondition: JavaMap<MemoryModuleType<Object>, MemoryStatus>, exitErasedMemories: MemoryModuleType<Object>[], orderPolicy: GateBehavior$OrderPolicy, runningPolicy: GateBehavior$RunningPolicy, behaviors: Pair<BehaviorControl<E>, number>[])
    // private behaviors: BehaviorControl<E>[];
    // private entryCondition: JavaMap<MemoryModuleType<Object>, MemoryStatus>;
    // private exitErasedMemories: MemoryModuleType<Object>[];
    // private orderPolicy: GateBehavior$OrderPolicy;
    // private runningPolicy: GateBehavior$RunningPolicy;
    readonly status: Behavior$Status;
    debugString(): string;
    doStop(arg0: ServerLevel, arg1: LivingEntity, arg2: number): void;
    getRequiredMemories(): MemoryModuleType<Object>[];
    getStatus(): Behavior$Status;
    // private hasRequiredMemories(body: E): boolean;
    tickOrStop(arg0: ServerLevel, arg1: LivingEntity, arg2: number): void;
    tryStart(level: ServerLevel, body: E, timestamp: number): boolean;
}
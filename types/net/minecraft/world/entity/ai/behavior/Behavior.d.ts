import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { ServerLevel } from '../../../../../../net/minecraft/server/level/ServerLevel.d.ts'
import type { LivingEntity } from '../../../../../../net/minecraft/world/entity/LivingEntity.d.ts'
import type { Behavior$Status } from '../../../../../../net/minecraft/world/entity/ai/behavior/Behavior$Status.d.ts'
import type { BehaviorControl } from '../../../../../../net/minecraft/world/entity/ai/behavior/BehaviorControl.d.ts'
import type { MemoryModuleType } from '../../../../../../net/minecraft/world/entity/ai/memory/MemoryModuleType.d.ts'
import type { MemoryStatus } from '../../../../../../net/minecraft/world/entity/ai/memory/MemoryStatus.d.ts'
export abstract class Behavior<E extends LivingEntity> extends Object implements BehaviorControl<E> {
    static DEFAULT_DURATION: number;
    constructor(entryCondition: Map<MemoryModuleType<Object>, MemoryStatus>)
    constructor(entryCondition: Map<MemoryModuleType<Object>, MemoryStatus>, timeOutDuration: number)
    constructor(entryCondition: Map<MemoryModuleType<Object>, MemoryStatus>, minDuration: number, maxDuration: number)
    // private cachedHasRequiredMemoryState: boolean;
    // private cachedMemoryModCount: number;
    // private endTimestamp: number;
    // private entryCondition: Map<MemoryModuleType<Object>, MemoryStatus>;
    // private maxDuration: number;
    // private minDuration: number;
    readonly status: Behavior$Status;
    canStillUse(level: ServerLevel, body: E, timestamp: number): boolean;
    checkExtraStartConditions(level: ServerLevel, body: E): boolean;
    debugString(): string;
    doStop(level: ServerLevel, body: E, timestamp: number): void;
    getRequiredMemories(): MemoryModuleType<Object>[];
    getStatus(): Behavior$Status;
    hasRequiredMemories(arg0: LivingEntity): boolean;
    start(level: ServerLevel, body: E, timestamp: number): void;
    stop(level: ServerLevel, body: E, timestamp: number): void;
    tick(level: ServerLevel, body: E, timestamp: number): void;
    tickOrStop(level: ServerLevel, body: E, timestamp: number): void;
    timedOut(timestamp: number): boolean;
    tryStart(level: ServerLevel, body: E, timestamp: number): boolean;
}
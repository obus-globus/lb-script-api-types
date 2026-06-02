import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { ServerLevel } from '../../../../../../net/minecraft/server/level/ServerLevel.d.ts'
import type { LivingEntity } from '../../../../../../net/minecraft/world/entity/LivingEntity.d.ts'
import type { Behavior$Status } from '../../../../../../net/minecraft/world/entity/ai/behavior/Behavior$Status.d.ts'
import type { BehaviorControl } from '../../../../../../net/minecraft/world/entity/ai/behavior/BehaviorControl.d.ts'
import type { MemoryModuleType } from '../../../../../../net/minecraft/world/entity/ai/memory/MemoryModuleType.d.ts'
export class DoNothing extends Object implements BehaviorControl<LivingEntity> {
    constructor(minDuration: number, maxDuration: number)
    // private endTimestamp: number;
    // private maxDuration: number;
    // private minDuration: number;
    readonly status: Behavior$Status;
    debugString(): string;
    doStop(level: ServerLevel, body: LivingEntity, timestamp: number): void;
    getRequiredMemories(): MemoryModuleType<Object>[];
    getStatus(): Behavior$Status;
    tickOrStop(level: ServerLevel, body: LivingEntity, timestamp: number): void;
    tryStart(level: ServerLevel, body: LivingEntity, timestamp: number): boolean;
}
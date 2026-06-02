import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { ServerLevel } from '../../../../../../net/minecraft/server/level/ServerLevel.d.ts'
import type { LivingEntity } from '../../../../../../net/minecraft/world/entity/LivingEntity.d.ts'
import type { Behavior$Status } from '../../../../../../net/minecraft/world/entity/ai/behavior/Behavior$Status.d.ts'
import type { MemoryModuleType } from '../../../../../../net/minecraft/world/entity/ai/memory/MemoryModuleType.d.ts'
export interface BehaviorControl<E extends LivingEntity> extends Object{
    debugString(): string;
    doStop(level: ServerLevel, body: E, timestamp: number): void;
    getRequiredMemories(): MemoryModuleType<Object>[];
    getStatus(): Behavior$Status;
    tickOrStop(level: ServerLevel, body: E, timestamp: number): void;
    tryStart(level: ServerLevel, body: E, timestamp: number): boolean;
}
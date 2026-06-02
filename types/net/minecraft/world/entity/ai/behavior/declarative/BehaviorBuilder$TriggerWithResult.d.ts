import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { ServerLevel } from '../../../../../../../net/minecraft/server/level/ServerLevel.d.ts'
import type { LivingEntity } from '../../../../../../../net/minecraft/world/entity/LivingEntity.d.ts'
import type { MemoryModuleType } from '../../../../../../../net/minecraft/world/entity/ai/memory/MemoryModuleType.d.ts'
export interface BehaviorBuilder$TriggerWithResult<E extends LivingEntity, R extends Object | number | string | boolean> extends Object{
    debugString(): string;
    memories(): MemoryModuleType<Object>[];
    tryTrigger(level: ServerLevel, body: E, timestamp: number): R;
}
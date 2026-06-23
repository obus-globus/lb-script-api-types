import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { MemoryModuleType } from '../../../../../net/minecraft/world/entity/ai/memory/MemoryModuleType.d.ts'
export interface Brain$Visitor extends Object{
    accept<U extends unknown>(type: MemoryModuleType<U>, value: U): void;
    accept<U extends unknown>(type: MemoryModuleType<U>, value: U, timeToLive: number): void;
    acceptEmpty<U extends unknown>(type: MemoryModuleType<U>): void;
}
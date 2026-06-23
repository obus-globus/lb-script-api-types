import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Brain$Visitor } from '../../../../../../net/minecraft/world/entity/ai/Brain$Visitor.d.ts'
import type { MemoryModuleType } from '../../../../../../net/minecraft/world/entity/ai/memory/MemoryModuleType.d.ts'
export class MemorySlot<T extends unknown> extends Object {
    static create(): MemorySlot<Object>;
    private constructor(value: T, timeToLive: number)
    // private timeToLive: number;
    // private value: T;
    canExpire(): boolean;
    clear(): void;
    hasExpired(): boolean;
    hasValue(): boolean;
    set(value: T): void;
    set(value: T, timeToLive: number): void;
    tick(): void;
    timeToLive(): number;
    toString(): string;
    value(): T;
    visit(type: MemoryModuleType<T>, visitor: Brain$Visitor): void;
}
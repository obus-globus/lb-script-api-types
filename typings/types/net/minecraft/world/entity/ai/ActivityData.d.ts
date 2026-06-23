import type { Pair } from '../../../../../com/mojang/datafixers/util/Pair.d.ts'
import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { LivingEntity } from '../../../../../net/minecraft/world/entity/LivingEntity.d.ts'
import type { BehaviorControl } from '../../../../../net/minecraft/world/entity/ai/behavior/BehaviorControl.d.ts'
import type { MemoryModuleType } from '../../../../../net/minecraft/world/entity/ai/memory/MemoryModuleType.d.ts'
import type { MemoryStatus } from '../../../../../net/minecraft/world/entity/ai/memory/MemoryStatus.d.ts'
import type { Activity } from '../../../../../net/minecraft/world/entity/schedule/Activity.d.ts'
export class ActivityData<E extends LivingEntity> extends Record {
    static create(paramactivity: Activity, parambehaviorPriorityPairs: Pair<number, BehaviorControl<any>>[]): ActivityData<LivingEntity>;
    static create(paramactivity: Activity, parambehaviorPriorityPairs: Pair<number, BehaviorControl<any>>[], paramconditions: Pair<MemoryModuleType<Object>, MemoryStatus>[]): ActivityData<LivingEntity>;
    static create(paramactivity: Activity, parambehaviorPriorityPairs: Pair<number, BehaviorControl<any>>[], paramconditions: Pair<MemoryModuleType<Object>, MemoryStatus>[], parammemoriesToEraseWhenStopped: MemoryModuleType<Object>[]): ActivityData<LivingEntity>;
    static create(paramactivity: Activity, parampriorityOfFirstBehavior: number, parambehaviorList: BehaviorControl<any>[]): ActivityData<LivingEntity>;
    static create(paramactivity: Activity, parampriorityOfFirstBehavior: number, parambehaviorList: BehaviorControl<any>[], paramconditions: Pair<MemoryModuleType<Object>, MemoryStatus>[]): ActivityData<LivingEntity>;
    static create(paramactivity: Activity, parampriorityOfFirstBehavior: number, parambehaviorList: BehaviorControl<any>[], parammemoryThatMustHaveValueAndWillBeErasedAfter: MemoryModuleType<Object>): ActivityData<LivingEntity>;
    static createPriorityPairs(parampriorityOfFirstBehavior: number, parambehaviorList: BehaviorControl<any>[]): Pair<number, BehaviorControl<any>>[];
    constructor(activityType: Activity, behaviorPriorityPairs: Pair<number, BehaviorControl<E>>[], conditions: Pair<MemoryModuleType<Object>, MemoryStatus>[], memoriesToEraseWhenStopped: MemoryModuleType<Object>[])
    // private activityType: Activity;
    // private behaviorPriorityPairs: Pair<number, BehaviorControl<E>>[];
    // private conditions: Pair<MemoryModuleType<Object>, MemoryStatus>[];
    // private memoriesToEraseWhenStopped: MemoryModuleType<Object>[];
    activityType(): Activity;
    behaviorPriorityPairs(): Pair<number, BehaviorControl<E>>[];
    conditions(): Pair<MemoryModuleType<Object>, MemoryStatus>[];
    equals(o: Object | null): boolean;
    hashCode(): number;
    memoriesToEraseWhenStopped(): MemoryModuleType<Object>[];
    toString(): string;
}
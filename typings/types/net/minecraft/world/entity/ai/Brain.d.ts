import type { Pair } from '../../../../../com/mojang/datafixers/util/Pair.d.ts'
import type { Optional } from '../../../../../java/util/Optional.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { BrainExtended } from '../../../../../net/caffeinemc/mods/lithium/common/ai/brain/memories/BrainExtended.d.ts'
import type { MemoryModificationCounter } from '../../../../../net/caffeinemc/mods/lithium/common/ai/brain/memories/MemoryModificationCounter.d.ts'
import type { BrainAccessor } from '../../../../../net/caffeinemc/mods/lithium/mixin/ai/useless_sensors/BrainAccessor.d.ts'
import type { ServerLevel } from '../../../../../net/minecraft/server/level/ServerLevel.d.ts'
import type { RandomSource } from '../../../../../net/minecraft/util/RandomSource.d.ts'
import type { EnvironmentAttribute } from '../../../../../net/minecraft/world/attribute/EnvironmentAttribute.d.ts'
import type { EnvironmentAttributeSystem } from '../../../../../net/minecraft/world/attribute/EnvironmentAttributeSystem.d.ts'
import type { LivingEntity } from '../../../../../net/minecraft/world/entity/LivingEntity.d.ts'
import type { ActivityData } from '../../../../../net/minecraft/world/entity/ai/ActivityData.d.ts'
import type { Brain$ActivitySupplier } from '../../../../../net/minecraft/world/entity/ai/Brain$ActivitySupplier.d.ts'
import type { Brain$Packed } from '../../../../../net/minecraft/world/entity/ai/Brain$Packed.d.ts'
import type { Brain$Provider } from '../../../../../net/minecraft/world/entity/ai/Brain$Provider.d.ts'
import type { Brain$Visitor } from '../../../../../net/minecraft/world/entity/ai/Brain$Visitor.d.ts'
import type { BehaviorControl } from '../../../../../net/minecraft/world/entity/ai/behavior/BehaviorControl.d.ts'
import type { MemoryMap$Value } from '../../../../../net/minecraft/world/entity/ai/memory/MemoryMap$Value.d.ts'
import type { MemoryModuleType } from '../../../../../net/minecraft/world/entity/ai/memory/MemoryModuleType.d.ts'
import type { MemorySlot } from '../../../../../net/minecraft/world/entity/ai/memory/MemorySlot.d.ts'
import type { MemoryStatus } from '../../../../../net/minecraft/world/entity/ai/memory/MemoryStatus.d.ts'
import type { Sensor } from '../../../../../net/minecraft/world/entity/ai/sensing/Sensor.d.ts'
import type { SensorType } from '../../../../../net/minecraft/world/entity/ai/sensing/SensorType.d.ts'
import type { Activity } from '../../../../../net/minecraft/world/entity/schedule/Activity.d.ts'
import type { Vec3 } from '../../../../../net/minecraft/world/phys/Vec3.d.ts'
export class Brain<E extends LivingEntity> extends Object implements BrainExtended, MemoryModificationCounter, BrainAccessor<LivingEntity> {
    static provider(parammemoryTypes: MemoryModuleType<Object>[], paramsensorTypes: SensorType<Sensor<any>>[], paramactivities: (param0: LivingEntity | null) => ActivityData<LivingEntity>[]): Brain$Provider<LivingEntity>;
    static provider(paramsensorTypes: SensorType<Sensor<any>>[]): Brain$Provider<LivingEntity>;
    static provider(paramsensorTypes: SensorType<Sensor<any>>[], paramactivities: (param0: LivingEntity | null) => ActivityData<LivingEntity>[]): Brain$Provider<LivingEntity>;
    constructor()
    constructor(memoryTypes: MemoryModuleType<Object>[], sensorTypes: SensorType<Sensor<E>>[], activities: ActivityData<E>[], memories: MemoryMap$Value<Object>[], randomSource: RandomSource)
    readonly activeActivities: Activity[];
    // private activityMemoriesToEraseWhenStopped: Map<Activity, MemoryModuleType<Object>[]>;
    // private activityRequirements: Map<Activity, Pair<MemoryModuleType<Object>, MemoryStatus>[]>;
    // private availableBehaviorsByPriority: { [key: number]: Map<Activity, BehaviorControl<E>[]> };
    readonly coreActivities: Activity[];
    readonly defaultActivity: Activity;
    // private lastScheduleUpdate: number;
    // private memories: Map<MemoryModuleType<Object>, MemorySlot<Object>>;
    // private memoryModCount: number;
    // private possibleTasks: Object[];
    // private runningTasks: Object[];
    readonly schedule: EnvironmentAttribute<Activity>;
    readonly sensors: Map<SensorType<Sensor<E>>, Sensor<E>>;
    // private activityRequirementsAreMet(activity: Activity): boolean;
    addActivity(activity: Activity, behaviorPriorityPairs: Pair<number, BehaviorControl<E>>[], conditions: Pair<MemoryModuleType<Object>, MemoryStatus>[], memoriesToEraseWhenStopped: MemoryModuleType<Object>[]): void;
    checkMemory(type: MemoryModuleType<Object>, status: MemoryStatus): boolean;
    clearMemories(): void;
    // private eraseMemoriesForOtherActivitesThan(activity: Activity): void;
    eraseMemory<U extends unknown>(type: MemoryModuleType<U>): void;
    forEach(visitor: Brain$Visitor): void;
    // private forgetOutdatedMemories(): void;
    getActiveActivities(): Activity[];
    getActiveNonCoreActivity(): Optional<Activity>;
    // private getCurrentlyRunningTasks(): Object[];
    getMemory<U extends unknown>(type: MemoryModuleType<U>): Optional<U>;
    getMemoryInternal<U extends unknown>(type: MemoryModuleType<U>): Optional<U>;
    // private getMemorySlot<T extends unknown>(memoryType: MemoryModuleType<T>): MemorySlot<T>;
    // private getMemorySlotIfPresent<T extends unknown>(memoryType: MemoryModuleType<T>): MemorySlot<T>;
    // private getPossibleTasks(): Object[];
    getRunningBehaviors(): (Object | null)[];
    getTimeUntilExpiry<U extends unknown>(type: MemoryModuleType<U>): number;
    hasMemoryValue(type: MemoryModuleType<Object>): boolean;
    // private initCurrentlyRunningTasks(): void;
    // private initPossibleTasks(): void;
    isActive(activity: Activity): boolean;
    isBrainDead(): boolean;
    isMemoryValue<U extends unknown>(memoryType: MemoryModuleType<U>, value: U): boolean;
    lithium$getMemoryValueModCount(): number;
    lithium$onMemoryModified(): void;
    lithium$pretendAllMemoryTypesRegistered(): void;
    // private onPossibleActivitiesChanged(): void;
    // private onTasksChanged(): void;
    pack(): Brain$Packed;
    // private registerMemory(memoryType: MemoryModuleType<Object>): void;
    removeAllBehaviors(): void;
    // private setActiveActivity(activity: Activity): void;
    setActiveActivityIfPossible(activity: Activity): void;
    setActiveActivityToFirstValid(activities: Activity[]): void;
    setCoreActivities(activities: Activity[]): void;
    setDefaultActivity(activity: Activity): void;
    setMemory<U extends unknown>(type: MemoryModuleType<U>, value: U): void;
    setMemory<U extends unknown>(type: MemoryModuleType<U>, optionalValue: Optional<U>): void;
    // private setMemoryInternal<U extends unknown>(value: MemoryMap$Value<U>): void;
    // private setMemoryInternal<U extends unknown>(type: MemoryModuleType<U>, value: U): void;
    // private setMemoryInternal<U extends unknown>(type: MemoryModuleType<U>, value: U, tileToLive: number): void;
    setMemoryWithExpiry<U extends unknown>(type: MemoryModuleType<U>, value: U, timeToLive: number): void;
    setSchedule(schedule: EnvironmentAttribute<Activity>): void;
    // private startEachNonRunningBehavior(arg0: ServerLevel, arg1: LivingEntity): void;
    stopAll(level: ServerLevel, body: E): void;
    tick(level: ServerLevel, body: E): void;
    // private tickEachRunningBehavior(level: ServerLevel, body: E): void;
    // private tickSensors(level: ServerLevel, body: E): void;
    updateActivityFromSchedule(environmentAttributes: EnvironmentAttributeSystem, gameTime: number, pos: Vec3): void;
    useDefaultActivity(): void;
}
import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Predicate } from '../../../../../java/util/function/Predicate.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { DebugValueFactory } from '../../../../../net/fabricmc/fabric/api/debug/v1/DebugValueFactory.d.ts'
import type { DebugSubscription } from '../../../../../net/minecraft/util/debug/DebugSubscription.d.ts'
import type { Entity } from '../../../../../net/minecraft/world/entity/Entity.d.ts'
export class EntityDebugSubscriptionRegistryImpl$Entry extends Record {
    constructor(debugSubscription: DebugSubscription<Object>, shouldSubscribe: (param0: Entity) => boolean, valueFactory: (param0: Entity) => Object | null)
    // private debugSubscription: DebugSubscription<Object>;
    // private shouldSubscribe: (param0: Entity) => boolean;
    // private valueFactory: (param0: Entity) => Object | null;
    debugSubscription(): DebugSubscription<Object>;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    shouldSubscribe(): (param0: Entity) => boolean;
    toString(): string;
    valueFactory(): (param0: Entity) => Object | null;
}
import type { Predicate } from '../../../../../../java/util/function/Predicate.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { DebugValueFactory } from '../../../../../../net/fabricmc/fabric/api/debug/v1/DebugValueFactory.d.ts'
import type { DebugSubscription } from '../../../../../../net/minecraft/util/debug/DebugSubscription.d.ts'
import type { Entity } from '../../../../../../net/minecraft/world/entity/Entity.d.ts'
export class EntityDebugSubscriptionRegistry extends Object {
    static register(paramarg0: DebugSubscription<Object>, paramarg1: (param0: Entity) => boolean, paramarg2: (param0: Entity | null) => Object | null): void;
    static register(paramarg0: DebugSubscription<Object>, paramarg1: (param0: Entity) => boolean, paramarg2: (param0: Entity | null) => Object | null, paramarg3: boolean): void;
    constructor()
}
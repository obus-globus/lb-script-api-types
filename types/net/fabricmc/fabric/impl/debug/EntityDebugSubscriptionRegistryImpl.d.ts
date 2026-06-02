import type { Predicate } from '../../../../../java/util/function/Predicate.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { DebugValueFactory } from '../../../../../net/fabricmc/fabric/api/debug/v1/DebugValueFactory.d.ts'
import type { EntityDebugSubscriptionRegistryImpl$Entry } from '../../../../../net/fabricmc/fabric/impl/debug/EntityDebugSubscriptionRegistryImpl$Entry.d.ts'
import type { DebugSubscription } from '../../../../../net/minecraft/util/debug/DebugSubscription.d.ts'
import type { DebugValueSource$Registration } from '../../../../../net/minecraft/util/debug/DebugValueSource$Registration.d.ts'
import type { Entity } from '../../../../../net/minecraft/world/entity/Entity.d.ts'
export class EntityDebugSubscriptionRegistryImpl extends Object {
    static ENTITY_DEBUG_SUBSCRIPTIONS: EntityDebugSubscriptionRegistryImpl$Entry[];
    static addDebugValues(paramarg0: Object, paramarg1: DebugValueSource$Registration): void;
    static register(paramarg0: DebugSubscription<Object>, paramarg1: (param0: Entity) => kotlin.Boolean, paramarg2: (param0: Object | null) => Object | null): void;
    constructor()
}
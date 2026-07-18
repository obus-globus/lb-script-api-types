import type { EventDefinition } from '../../../io/ktor/events/EventDefinition.d.ts'
import type { CopyOnWriteHashMap } from '../../../io/ktor/util/collections/CopyOnWriteHashMap.d.ts'
import type { LockFreeLinkedListHead } from '../../../io/ktor/util/internal/LockFreeLinkedListHead.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { DisposableHandle } from '../../../kotlinx/coroutines/DisposableHandle.d.ts'
export class Events extends Object {
    constructor()
    // private handlers: CopyOnWriteHashMap<EventDefinition<Object>, LockFreeLinkedListHead>;
    raise<T extends unknown>(definition: EventDefinition<T>, value: T): void;
    subscribe<T extends unknown>(definition: EventDefinition<T>, handler: (param0: T) => void): DisposableHandle;
    unsubscribe<T extends unknown>(definition: EventDefinition<T>, handler: (param0: T) => void): void;
}
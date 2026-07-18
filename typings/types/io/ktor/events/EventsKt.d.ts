import type { EventDefinition } from '../../../io/ktor/events/EventDefinition.d.ts'
import type { Events } from '../../../io/ktor/events/Events.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { Logger } from '../../../org/slf4j/Logger.d.ts'
export class EventsKt extends Object {
    static raiseCatching<T extends unknown>(self: Events, definition: EventDefinition<T>, value: T, logger: Logger | null): void;
}
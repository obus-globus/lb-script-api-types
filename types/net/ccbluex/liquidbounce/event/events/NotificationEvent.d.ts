import type { Event } from '../../../../../net/ccbluex/liquidbounce/event/Event.d.ts'
import type { NotificationEvent$Severity } from '../../../../../net/ccbluex/liquidbounce/event/events/NotificationEvent$Severity.d.ts'
import type { WebSocketEvent } from '../../../../../net/ccbluex/liquidbounce/integration/interop/protocol/event/WebSocketEvent.d.ts'
export class NotificationEvent extends Event implements WebSocketEvent {
    constructor(title: string, message: string, severity: NotificationEvent$Severity)
    readonly message: string;
    readonly severity: NotificationEvent$Severity;
    readonly title: string;
}
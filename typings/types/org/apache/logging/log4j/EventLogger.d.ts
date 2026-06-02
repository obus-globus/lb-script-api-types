import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Level } from '../../../../org/apache/logging/log4j/Level.d.ts'
import type { Marker } from '../../../../org/apache/logging/log4j/Marker.d.ts'
import type { StructuredDataMessage } from '../../../../org/apache/logging/log4j/message/StructuredDataMessage.d.ts'
export class EventLogger extends Object {
    static EVENT_MARKER: Marker;
    static logEvent(parammsg: StructuredDataMessage): void;
    static logEvent(parammsg: StructuredDataMessage, paramlevel: Level): void;
    private constructor()
}
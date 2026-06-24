import type { Event } from '../../../../../../com/oracle/truffle/tools/chromeinspector/events/Event.d.ts'
import type { EventHandler } from '../../../../../../com/oracle/truffle/tools/chromeinspector/events/EventHandler.d.ts'
import type { InspectServerSession } from '../../../../../../com/oracle/truffle/tools/chromeinspector/server/InspectServerSession.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class InspectServerSession$EventHandlerImpl extends Object implements EventHandler {
    private constructor(null_: InspectServerSession)
    event(event: Event): void;
}
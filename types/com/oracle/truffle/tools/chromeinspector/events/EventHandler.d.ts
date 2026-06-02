import type { Event } from '../../../../../../com/oracle/truffle/tools/chromeinspector/events/Event.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export interface EventHandler extends Object{
    event(event: Event): void;
}
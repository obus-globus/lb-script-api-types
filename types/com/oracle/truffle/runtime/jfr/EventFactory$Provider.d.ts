import type { EventFactory } from '../../../../../com/oracle/truffle/runtime/jfr/EventFactory.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface EventFactory$Provider extends Object{
    getEventFactory(): EventFactory;
}
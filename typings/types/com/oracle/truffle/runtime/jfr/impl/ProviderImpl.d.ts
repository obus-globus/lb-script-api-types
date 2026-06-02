import type { EventFactory } from '../../../../../../com/oracle/truffle/runtime/jfr/EventFactory.d.ts'
import type { EventFactory$Provider } from '../../../../../../com/oracle/truffle/runtime/jfr/EventFactory$Provider.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class ProviderImpl extends Object implements EventFactory$Provider {
    constructor()
    getEventFactory(): EventFactory;
}
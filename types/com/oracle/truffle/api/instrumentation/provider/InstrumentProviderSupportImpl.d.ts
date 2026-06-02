import type { InternalResource } from '../../../../../../com/oracle/truffle/api/InternalResource.d.ts'
import type { Accessor$InstrumentProviderSupport } from '../../../../../../com/oracle/truffle/api/impl/Accessor$InstrumentProviderSupport.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class InstrumentProviderSupportImpl extends Accessor$InstrumentProviderSupport {
    constructor()
    create(truffleInstrumentProvider: Object): Object;
    createInternalResource(truffleInstrumentProvider: Object, resourceId: string): InternalResource;
    getInstrumentClassName(truffleInstrumentProvider: Object): string;
    getInternalResourceIds(truffleInstrumentProvider: Object): string[];
    getServicesClassNames(truffleInstrumentProvider: Object): E[];
}
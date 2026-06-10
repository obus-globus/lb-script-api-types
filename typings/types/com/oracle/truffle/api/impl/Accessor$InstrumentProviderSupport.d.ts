import type { InternalResource } from '../../../../../com/oracle/truffle/api/InternalResource.d.ts'
import type { Accessor$Support } from '../../../../../com/oracle/truffle/api/impl/Accessor$Support.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export abstract class Accessor$InstrumentProviderSupport extends Accessor$Support {
    constructor()
    create(truffleInstrumentProvider: Object): Object;
    createInternalResource(truffleInstrumentProvider: Object, resourceId: string): InternalResource;
    getInstrumentClassName(truffleInstrumentProvider: Object): string;
    getInternalResourceIds(truffleInstrumentProvider: Object): string[];
    getServicesClassNames(truffleInstrumentProvider: Object): string[];
}
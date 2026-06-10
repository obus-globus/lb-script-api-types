import type { TruffleInstrumentProvider } from '../../../../../com/oracle/truffle/api/instrumentation/provider/TruffleInstrumentProvider.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class LSPInstrumentProvider extends TruffleInstrumentProvider {
    constructor()
    create(): Object;
    createInternalResource(resourceId: string): Object;
    getInstrumentClassName(): string;
    getInternalResourceIds(): string[];
    getServicesClassNames(): string[];
}
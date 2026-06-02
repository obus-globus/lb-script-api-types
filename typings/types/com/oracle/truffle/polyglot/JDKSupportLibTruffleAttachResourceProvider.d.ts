import type { InternalResourceProvider } from '../../../../com/oracle/truffle/api/provider/InternalResourceProvider.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class JDKSupportLibTruffleAttachResourceProvider extends InternalResourceProvider {
    constructor()
    createInternalResource(): Object;
    getComponentId(): string;
    getResourceId(): string;
}
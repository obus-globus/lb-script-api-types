import type { Object } from '../../../../java/lang/Object.d.ts'
import type { AFSocketImplExtensions } from '../../../../org/newsclub/net/unix/AFSocketImplExtensions.d.ts'
import type { AFVSOCKSocketAddress } from '../../../../org/newsclub/net/unix/AFVSOCKSocketAddress.d.ts'
import type { AncillaryDataSupport } from '../../../../org/newsclub/net/unix/AncillaryDataSupport.d.ts'
export class AFVSOCKSocketImplExtensions extends Object implements AFSocketImplExtensions<AFVSOCKSocketAddress> {
    constructor(arg0: AncillaryDataSupport)
    // private ancillaryDataSupport: AncillaryDataSupport;
    getLocalCID(): number;
}
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { AFSocketImplExtensions } from '../../../../org/newsclub/net/unix/AFSocketImplExtensions.d.ts'
import type { AFTIPCSocketAddress } from '../../../../org/newsclub/net/unix/AFTIPCSocketAddress.d.ts'
import type { AncillaryDataSupport } from '../../../../org/newsclub/net/unix/AncillaryDataSupport.d.ts'
export class AFTIPCSocketImplExtensions extends Object implements AFSocketImplExtensions<AFTIPCSocketAddress> {
    constructor(arg0: AncillaryDataSupport)
    // private ancillaryDataSupport: AncillaryDataSupport;
    getTIPCDestName(): number[];
    getTIPCErrInfo(): number[];
    getTIPCLinkName(arg0: number, arg1: number): string;
    getTIPCNodeId(arg0: number): number[];
}
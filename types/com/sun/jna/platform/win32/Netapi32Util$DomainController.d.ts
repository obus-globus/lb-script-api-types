import type { Guid$GUID } from '../../../../../com/sun/jna/platform/win32/Guid$GUID.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Netapi32Util$DomainController extends Object {
    constructor()
    address: string;
    addressType: number;
    clientSiteName: string;
    dnsForestName: string;
    domainGuid: Guid$GUID;
    domainName: string;
    flags: number;
    name: string;
}
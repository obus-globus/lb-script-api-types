import type { Guid$GUID } from '../../../../../com/sun/jna/platform/win32/Guid$GUID.d.ts'
import type { WinNT$PSID } from '../../../../../com/sun/jna/platform/win32/WinNT$PSID.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Netapi32Util$DomainTrust extends Object {
    constructor()
    DnsDomainName: string;
    DomainGuid: Guid$GUID;
    DomainGuidString: string;
    DomainSid: WinNT$PSID;
    DomainSidString: string;
    NetbiosDomainName: string;
    // private flags: number;
    isInForest(): boolean;
    isInbound(): boolean;
    isNativeMode(): boolean;
    isOutbound(): boolean;
    isPrimary(): boolean;
    isRoot(): boolean;
}
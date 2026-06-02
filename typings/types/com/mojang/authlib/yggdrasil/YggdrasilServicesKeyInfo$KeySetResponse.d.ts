import type { YggdrasilServicesKeyInfo$KeyData } from '../../../../com/mojang/authlib/yggdrasil/YggdrasilServicesKeyInfo$KeyData.d.ts'
import type { Record } from '../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class YggdrasilServicesKeyInfo$KeySetResponse extends Record {
    private constructor(profilePropertyKeys: YggdrasilServicesKeyInfo$KeyData[], playerCertificateKeys: YggdrasilServicesKeyInfo$KeyData[])
    // private playerCertificateKeys: YggdrasilServicesKeyInfo$KeyData[];
    // private profilePropertyKeys: YggdrasilServicesKeyInfo$KeyData[];
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    playerCertificateKeys(): YggdrasilServicesKeyInfo$KeyData[];
    profilePropertyKeys(): YggdrasilServicesKeyInfo$KeyData[];
    toString(): string;
}
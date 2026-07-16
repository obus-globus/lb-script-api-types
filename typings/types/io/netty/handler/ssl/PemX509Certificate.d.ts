import type { ByteBuf } from '../../../../io/netty/buffer/ByteBuf.d.ts'
import type { PemEncoded } from '../../../../io/netty/handler/ssl/PemEncoded.d.ts'
import type { BigInteger } from '../../../../java/math/BigInteger.d.ts'
import type { Principal } from '../../../../java/security/Principal.d.ts'
import type { PublicKey } from '../../../../java/security/PublicKey.d.ts'
import type { X509Certificate } from '../../../../java/security/cert/X509Certificate.d.ts'
import type { Date } from '../../../../java/util/Date.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class PemX509Certificate extends X509Certificate implements PemEncoded {
    static valueOf(paramarg0: number[]): PemX509Certificate;
    static valueOf(paramarg0: ByteBuf): PemX509Certificate;
    private constructor(arg0: ByteBuf)
    // private content: ByteBuf;
    checkValidity(): void;
    checkValidity(arg0: Date): void;
    content(): ByteBuf;
    copy(): PemX509Certificate;
    duplicate(): PemX509Certificate;
    equals(arg0: Object | null): boolean;
    getBasicConstraints(): number;
    getCriticalExtensionOIDs(): string[];
    getEncoded(): number[];
    getExtensionValue(arg0: string): number[];
    getIssuerDN(): Principal;
    getIssuerUniqueID(): boolean[];
    getKeyUsage(): boolean[];
    getNonCriticalExtensionOIDs(): string[];
    getNotAfter(): Date;
    getNotBefore(): Date;
    getPublicKey(): PublicKey;
    getSerialNumber(): BigInteger;
    getSigAlgName(): string;
    getSigAlgOID(): string;
    getSigAlgParams(): number[];
    getSignature(): number[];
    getSubjectDN(): Principal;
    getSubjectUniqueID(): boolean[];
    getTBSCertificate(): number[];
    getVersion(): number;
    hasUnsupportedCriticalExtension(): boolean;
    hashCode(): number;
    isSensitive(): boolean;
    refCnt(): number;
    release(): boolean;
    release(arg0: number): boolean;
    replace(arg0: ByteBuf): PemX509Certificate;
    retain(): PemX509Certificate;
    retain(arg0: number): PemX509Certificate;
    retainedDuplicate(): PemX509Certificate;
    toString(): string;
    touch(): PemX509Certificate;
    touch(arg0: Object): PemX509Certificate;
    verify(arg0: PublicKey): void;
    verify(arg0: PublicKey, arg1: { [key: string]: any }): void;
    verify(arg0: PublicKey, arg1: string): void;
}
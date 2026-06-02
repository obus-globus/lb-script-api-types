import type { Serializable } from '../../../java/io/Serializable.d.ts'
import type { AlgorithmParameters } from '../../../java/security/AlgorithmParameters.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { DerEncoder } from '../../../sun/security/util/DerEncoder.d.ts'
import type { DerOutputStream } from '../../../sun/security/util/DerOutputStream.d.ts'
import type { DerValue } from '../../../sun/security/util/DerValue.d.ts'
import type { ObjectIdentifier } from '../../../sun/security/util/ObjectIdentifier.d.ts'
export class AlgorithmId extends Object implements Serializable, DerEncoder {
    static DSA_oid: ObjectIdentifier;
    static EC_oid: ObjectIdentifier;
    static MD2_oid: ObjectIdentifier;
    static MD2withRSA_oid: ObjectIdentifier;
    static MD5_oid: ObjectIdentifier;
    static MD5withRSA_oid: ObjectIdentifier;
    static MGF1_oid: ObjectIdentifier;
    static RSAEncryption_oid: ObjectIdentifier;
    static RSASSA_PSS_oid: ObjectIdentifier;
    static SHA1withRSA_oid: ObjectIdentifier;
    static SHA224_oid: ObjectIdentifier;
    static SHA224withRSA_oid: ObjectIdentifier;
    static SHA256_oid: ObjectIdentifier;
    static SHA256withRSA_oid: ObjectIdentifier;
    static SHA384_oid: ObjectIdentifier;
    static SHA384withRSA_oid: ObjectIdentifier;
    static SHA3_224_oid: ObjectIdentifier;
    static SHA3_224withRSA_oid: ObjectIdentifier;
    static SHA3_256_oid: ObjectIdentifier;
    static SHA3_256withRSA_oid: ObjectIdentifier;
    static SHA3_384_oid: ObjectIdentifier;
    static SHA3_384withRSA_oid: ObjectIdentifier;
    static SHA3_512_oid: ObjectIdentifier;
    static SHA3_512withRSA_oid: ObjectIdentifier;
    static SHA512$224withRSA_oid: ObjectIdentifier;
    static SHA512$256withRSA_oid: ObjectIdentifier;
    static SHA512_224_oid: ObjectIdentifier;
    static SHA512_256_oid: ObjectIdentifier;
    static SHA512_oid: ObjectIdentifier;
    static SHA512withRSA_oid: ObjectIdentifier;
    static SHA_oid: ObjectIdentifier;
    static clearAliasOidsTable(): void;
    static get(paramarg0: string): AlgorithmId;
    static get(paramarg0: AlgorithmParameters): AlgorithmId;
    static getAlgorithmId(paramarg0: string): AlgorithmId;
    static parse(paramarg0: DerValue): AlgorithmId;
    constructor()
    constructor(arg0: ObjectIdentifier)
    constructor(arg0: ObjectIdentifier, arg1: AlgorithmParameters)
    constructor(arg0: ObjectIdentifier, arg1: DerValue)
    // private algParams: AlgorithmParameters;
    // private algid: ObjectIdentifier;
    encodedParams: number[];
    decodeParams(): void;
    encode(): number[];
    encode(arg0: DerOutputStream): void;
    equals(arg0: Object | null): boolean;
    equals(arg0: ObjectIdentifier): boolean;
    equals(arg0: AlgorithmId): boolean;
    getEncodedParams(): number[];
    getName(): string;
    getOID(): ObjectIdentifier;
    getParameters(): AlgorithmParameters;
    hashCode(): number;
    paramsToString(): string;
    toString(): string;
}
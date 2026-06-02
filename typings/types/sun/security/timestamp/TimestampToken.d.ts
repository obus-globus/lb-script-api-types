import type { BigInteger } from '../../../java/math/BigInteger.d.ts'
import type { Date } from '../../../java/util/Date.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { ObjectIdentifier } from '../../../sun/security/util/ObjectIdentifier.d.ts'
import type { AlgorithmId } from '../../../sun/security/x509/AlgorithmId.d.ts'
export class TimestampToken extends Object {
    constructor(arg0: number[])
    // private genTime: Date;
    readonly hashAlgorithm: AlgorithmId;
    readonly hashedMessage: number[];
    readonly nonce: BigInteger;
    // private policy: ObjectIdentifier;
    readonly serialNumber: BigInteger;
    // private version: number;
    getDate(): Date;
    getHashAlgorithm(): AlgorithmId;
    getHashedMessage(): number[];
    getNonce(): BigInteger;
    getPolicyID(): string;
    getSerialNumber(): BigInteger;
    // private parse(arg0: number[]): void;
}
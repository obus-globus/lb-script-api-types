import type { ObjectInputStream } from '../../../java/io/ObjectInputStream.d.ts'
import type { KeySpec } from '../../../java/security/spec/KeySpec.d.ts'
import type { SecretKey } from '../../../javax/crypto/SecretKey.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class SecretKeySpec extends Object implements KeySpec, SecretKey {
    static serialVersionUID: number;
    constructor(arg0: number[], arg1: number, arg2: number, arg3: string)
    constructor(arg0: number[], arg1: string)
    readonly algorithm: string;
    // private key: number[];
    clear(): void;
    equals(arg0: Object | null): boolean;
    getAlgorithm(): string;
    getEncoded(): number[];
    getFormat(): string;
    hashCode(): number;
    // private readObject(arg0: ObjectInputStream): void;
}
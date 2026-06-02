import type { Curve } from '../../../../io/jsonwebtoken/security/Curve.d.ts'
import type { KeyPairBuilder } from '../../../../io/jsonwebtoken/security/KeyPairBuilder.d.ts'
import type { Key } from '../../../../java/security/Key.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export abstract class AbstractCurve extends Object implements Curve {
    constructor(arg0: string, arg1: string)
    // private ID: string;
    // private JCA_NAME: string;
    contains(arg0: Key): boolean;
    equals(arg0: Object | null): boolean;
    getId(): string;
    getJcaName(): string;
    hashCode(): number;
    keyPair(): KeyPairBuilder;
    toString(): string;
}
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class PKCEUtils$PKCEPair extends Object {
    constructor(codeVerifier: string, codeChallenge: string)
    readonly codeChallenge: string;
    readonly codeVerifier: string;
    component1(): string;
    component2(): string;
    copy(codeVerifier: string, codeChallenge: string): PKCEUtils$PKCEPair;
    equals(other: Object | null): boolean;
    hashCode(): number;
    toString(): string;
}
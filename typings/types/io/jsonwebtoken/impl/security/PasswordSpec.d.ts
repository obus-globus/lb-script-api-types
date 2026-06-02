import type { Password } from '../../../../io/jsonwebtoken/security/Password.d.ts'
import type { KeySpec } from '../../../../java/security/spec/KeySpec.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class PasswordSpec extends Object implements Password, KeySpec {
    static serialVersionUID: number;
    static serialVersionUID: number;
    constructor(arg0: string[])
    readonly destroyed: boolean;
    // private password: string[];
    // private assertActive(): void;
    destroy(): void;
    equals(arg0: Object | null): boolean;
    getAlgorithm(): string;
    getEncoded(): number[];
    getFormat(): string;
    hashCode(): number;
    isDestroyed(): boolean;
    toCharArray(): string[];
    toString(): string;
}
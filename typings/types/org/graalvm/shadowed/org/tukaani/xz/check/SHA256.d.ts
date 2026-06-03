import type { MessageDigest } from '../../../../../../../java/security/MessageDigest.d.ts'
import type { Check } from '../../../../../../../org/graalvm/shadowed/org/tukaani/xz/check/Check.d.ts'
export class SHA256 extends Check {
    static getInstance(paramcheckType: number): Check;
    constructor()
    // private sha256: MessageDigest;
    finish(): number[];
    update(buf: number[]): void;
    update(buf: number[], off: number, len: number): void;
}
import type { Record } from '../../../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { HashedFingerprint } from '../../../../../../../net/caffeinemc/mods/sodium/client/data/fingerprint/HashedFingerprint.d.ts'
export class FingerprintMeasure extends Record {
    static create(): FingerprintMeasure;
    constructor(uuid: string, path: string)
    // private path: string;
    // private uuid: string;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    hashed(): HashedFingerprint;
    looselyMatches(arg0: HashedFingerprint): boolean;
    path(): string;
    toString(): string;
    uuid(): string;
}
import type { Record } from '../../../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export class HashedFingerprint extends Record {
    static CURRENT_VERSION: number;
    static loadFromDisk(): HashedFingerprint;
    static writeToDisk(paramarg0: HashedFingerprint): void;
    // private pathHashHex: string;
    // private saltHex: string;
    // private timestamp: number;
    // private uuidHashHex: string;
    // private version: number;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    pathHashHex(): string;
    saltHex(): string;
    timestamp(): number;
    toString(): string;
    uuidHashHex(): string;
    version(): number;
}
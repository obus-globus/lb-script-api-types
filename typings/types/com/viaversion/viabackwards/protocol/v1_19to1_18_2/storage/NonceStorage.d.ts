import type { StorableObject } from '../../../../../../com/viaversion/viaversion/api/connection/StorableObject.d.ts'
import type { Record } from '../../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class NonceStorage extends Record implements StorableObject {
    constructor(nonce: number[])
    // private nonce: number[];
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    nonce(): number[];
    onRemove(): void;
    toString(): string;
}
import type { StorableObject } from '../../../../../../com/viaversion/viaversion/api/connection/StorableObject.d.ts'
import type { Record } from '../../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class NonceStorage1_19 extends Record implements StorableObject {
    // private nonce: number[];
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    nonce(): number[];
    onRemove(): void;
    toString(): string;
}
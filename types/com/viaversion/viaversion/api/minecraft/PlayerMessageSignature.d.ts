import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { UUID } from '../../../../../java/util/UUID.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class PlayerMessageSignature extends Record {
    // private signatureBytes: number[];
    // private uuid: UUID;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    signatureBytes(): number[];
    toString(): string;
    uuid(): UUID;
}
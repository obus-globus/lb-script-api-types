import type { Record } from '../../../../../../java/lang/Record.d.ts'
import type { UUID } from '../../../../../../java/util/UUID.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class PlayerAttributesStorage$AttributeModifier extends Record {
    // private amount: number;
    // private operation: number;
    // private uuid: UUID;
    amount(): number;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    operation(): number;
    toString(): string;
    uuid(): UUID;
}
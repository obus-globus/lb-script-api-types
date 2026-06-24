import type { Type } from '../../../../../../../com/viaversion/viaversion/api/type/Type.d.ts'
import type { Record } from '../../../../../../../java/lang/Record.d.ts'
import type { UUID } from '../../../../../../../java/util/UUID.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export class AttributeModifiers1_20_5$ModifierData extends Record {
    static TYPE: Type<AttributeModifiers1_20_5$ModifierData>;
    constructor(uuid: UUID, name: string, amount: number, operation: number)
    // private amount: number;
    // private name: string;
    // private operation: number;
    // private uuid: UUID;
    amount(): number;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    name(): string;
    operation(): number;
    toString(): string;
    uuid(): UUID;
}
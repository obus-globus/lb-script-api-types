import type { Type } from '../../../../../../../com/viaversion/viaversion/api/type/Type.d.ts'
import type { Record } from '../../../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export class Weapon extends Record {
    static TYPE: Type<Weapon>;
    constructor(itemDamagePerAttack: number, disableBlockingForSeconds: number)
    // private disableBlockingForSeconds: number;
    // private itemDamagePerAttack: number;
    disableBlockingForSeconds(): number;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    itemDamagePerAttack(): number;
    toString(): string;
}
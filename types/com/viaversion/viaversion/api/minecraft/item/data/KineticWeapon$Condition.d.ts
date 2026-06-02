import type { Type } from '../../../../../../../com/viaversion/viaversion/api/type/Type.d.ts'
import type { Record } from '../../../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export class KineticWeapon$Condition extends Record {
    static OPTIONAL_TYPE: Type<KineticWeapon$Condition>;
    static TYPE: Type<KineticWeapon$Condition>;
    // private maxDurationTicks: number;
    // private minRelativeSpeed: number;
    // private minSpeed: number;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    maxDurationTicks(): number;
    minRelativeSpeed(): number;
    minSpeed(): number;
    toString(): string;
}
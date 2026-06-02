import type { Type } from '../../../../../../../com/viaversion/viaversion/api/type/Type.d.ts'
import type { Record } from '../../../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export class DyedColor extends Record {
    static TYPE1_20_5: Type<DyedColor>;
    static TYPE1_21_5: Type<DyedColor>;
    // private rgb: number;
    // private showInTooltip: boolean;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    rgb(): number;
    showInTooltip(): boolean;
    toString(): string;
}
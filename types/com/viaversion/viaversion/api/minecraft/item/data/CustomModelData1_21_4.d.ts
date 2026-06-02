import type { Type } from '../../../../../../../com/viaversion/viaversion/api/type/Type.d.ts'
import type { Copyable } from '../../../../../../../com/viaversion/viaversion/util/Copyable.d.ts'
import type { Record } from '../../../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export class CustomModelData1_21_4 extends Record implements Copyable {
    static TYPE: Type<CustomModelData1_21_4>;
    static copy(paramarg0: Object | null): Object | null;
    // private booleans: (Object | null)[];
    // private colors: number[];
    // private floats: number[];
    // private strings: string[];
    booleans(): (Object | null)[];
    colors(): number[];
    copy(): CustomModelData1_21_4;
    equals(arg0: Object | null): boolean;
    floats(): number[];
    hashCode(): number;
    strings(): string[];
    toString(): string;
}
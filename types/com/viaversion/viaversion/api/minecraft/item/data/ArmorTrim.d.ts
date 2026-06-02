import type { UserConnection } from '../../../../../../../com/viaversion/viaversion/api/connection/UserConnection.d.ts'
import type { Holder } from '../../../../../../../com/viaversion/viaversion/api/minecraft/Holder.d.ts'
import type { ArmorTrimMaterial } from '../../../../../../../com/viaversion/viaversion/api/minecraft/item/data/ArmorTrimMaterial.d.ts'
import type { ArmorTrimPattern } from '../../../../../../../com/viaversion/viaversion/api/minecraft/item/data/ArmorTrimPattern.d.ts'
import type { Protocol } from '../../../../../../../com/viaversion/viaversion/api/protocol/Protocol.d.ts'
import type { Type } from '../../../../../../../com/viaversion/viaversion/api/type/Type.d.ts'
import type { Int2IntFunction } from '../../../../../../../com/viaversion/viaversion/libs/fastutil/ints/Int2IntFunction.d.ts'
import type { Rewritable } from '../../../../../../../com/viaversion/viaversion/util/Rewritable.d.ts'
import type { Record } from '../../../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export class ArmorTrim extends Record implements Rewritable {
    static TYPE1_20_5: Type<ArmorTrim>;
    static TYPE1_21_2: Type<ArmorTrim>;
    static TYPE1_21_4: Type<ArmorTrim>;
    static TYPE1_21_5: Type<ArmorTrim>;
    // private material: Holder<ArmorTrimMaterial>;
    // private pattern: Holder<ArmorTrimPattern>;
    // private showInTooltip: boolean;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    material(): Holder<ArmorTrimMaterial>;
    pattern(): Holder<ArmorTrimPattern>;
    rewrite(arg0: UserConnection, arg1: Protocol<Object, Object, Object, Object>, arg2: boolean): ArmorTrim;
    showInTooltip(): boolean;
    toString(): string;
}
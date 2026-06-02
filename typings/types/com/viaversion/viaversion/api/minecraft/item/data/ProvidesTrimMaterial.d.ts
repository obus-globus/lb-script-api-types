import type { UserConnection } from '../../../../../../../com/viaversion/viaversion/api/connection/UserConnection.d.ts'
import type { EitherHolder } from '../../../../../../../com/viaversion/viaversion/api/minecraft/EitherHolder.d.ts'
import type { ArmorTrimMaterial } from '../../../../../../../com/viaversion/viaversion/api/minecraft/item/data/ArmorTrimMaterial.d.ts'
import type { Protocol } from '../../../../../../../com/viaversion/viaversion/api/protocol/Protocol.d.ts'
import type { Type } from '../../../../../../../com/viaversion/viaversion/api/type/Type.d.ts'
import type { Int2IntFunction } from '../../../../../../../com/viaversion/viaversion/libs/fastutil/ints/Int2IntFunction.d.ts'
import type { Rewritable } from '../../../../../../../com/viaversion/viaversion/util/Rewritable.d.ts'
import type { Record } from '../../../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export class ProvidesTrimMaterial extends Record implements Rewritable {
    static TYPE: Type<ProvidesTrimMaterial>;
    constructor(material: EitherHolder<ArmorTrimMaterial>)
    // private material: EitherHolder<ArmorTrimMaterial>;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    material(): EitherHolder<ArmorTrimMaterial>;
    rewrite(arg0: UserConnection, arg1: Protocol<Object, Object, Object, Object>, arg2: boolean): ProvidesTrimMaterial;
    toString(): string;
}
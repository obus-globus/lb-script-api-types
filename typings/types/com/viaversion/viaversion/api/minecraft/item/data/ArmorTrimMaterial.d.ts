import type { Tag } from '../../../../../../../com/viaversion/nbt/tag/Tag.d.ts'
import type { UserConnection } from '../../../../../../../com/viaversion/viaversion/api/connection/UserConnection.d.ts'
import type { Protocol } from '../../../../../../../com/viaversion/viaversion/api/protocol/Protocol.d.ts'
import type { HolderType } from '../../../../../../../com/viaversion/viaversion/api/type/types/misc/HolderType.d.ts'
import type { Int2IntFunction } from '../../../../../../../com/viaversion/viaversion/libs/fastutil/ints/Int2IntFunction.d.ts'
import type { Copyable } from '../../../../../../../com/viaversion/viaversion/util/Copyable.d.ts'
import type { Rewritable } from '../../../../../../../com/viaversion/viaversion/util/Rewritable.d.ts'
import type { Record } from '../../../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export class ArmorTrimMaterial extends Record implements Copyable, Rewritable {
    static TYPE1_20_5: HolderType<ArmorTrimMaterial>;
    static TYPE1_21_2: HolderType<ArmorTrimMaterial>;
    static TYPE1_21_4: HolderType<ArmorTrimMaterial>;
    static TYPE1_21_5: HolderType<ArmorTrimMaterial>;
    constructor(assetName: string, itemId: number, itemModelIndex: number, overrideArmorMaterials: { [key: string]: string }, description: Tag)
    constructor(arg0: string, arg1: number, arg2: { [key: string]: string }, arg3: Tag)
    constructor(arg0: string, arg1: { [key: string]: string }, arg2: Tag)
    // private assetName: string;
    // private description: Tag;
    // private itemId: number;
    // private itemModelIndex: number;
    // private overrideArmorMaterials: { [key: string]: string };
    assetName(): string;
    copy(): ArmorTrimMaterial;
    description(): Tag;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    itemId(): number;
    itemModelIndex(): number;
    overrideArmorMaterials(): { [key: string]: string };
    rewrite(arg0: UserConnection, arg1: Protocol<any, any, any, any>, arg2: boolean): ArmorTrimMaterial;
    toString(): string;
}
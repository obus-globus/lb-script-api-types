import type { Tag } from '../../../../../../../com/viaversion/nbt/tag/Tag.d.ts'
import type { UserConnection } from '../../../../../../../com/viaversion/viaversion/api/connection/UserConnection.d.ts'
import type { Protocol } from '../../../../../../../com/viaversion/viaversion/api/protocol/Protocol.d.ts'
import type { HolderType } from '../../../../../../../com/viaversion/viaversion/api/type/types/misc/HolderType.d.ts'
import type { Int2IntFunction } from '../../../../../../../com/viaversion/viaversion/libs/fastutil/ints/Int2IntFunction.d.ts'
import type { Copyable } from '../../../../../../../com/viaversion/viaversion/util/Copyable.d.ts'
import type { Rewritable } from '../../../../../../../com/viaversion/viaversion/util/Rewritable.d.ts'
import type { Record } from '../../../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export class ArmorTrimPattern extends Record implements Copyable, Rewritable {
    static TYPE1_20_5: HolderType<ArmorTrimPattern>;
    static TYPE1_21_5: HolderType<ArmorTrimPattern>;
    // private assetName: string;
    // private decal: boolean;
    // private description: Tag;
    // private itemId: number;
    assetName(): string;
    copy(): ArmorTrimPattern;
    decal(): boolean;
    description(): Tag;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    itemId(): number;
    rewrite(arg0: UserConnection, arg1: Protocol<any, any, any, any>, arg2: boolean): ArmorTrimPattern;
    toString(): string;
}
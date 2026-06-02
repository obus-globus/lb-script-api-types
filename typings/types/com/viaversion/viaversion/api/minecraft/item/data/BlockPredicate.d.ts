import type { Tag } from '../../../../../../../com/viaversion/nbt/tag/Tag.d.ts'
import type { UserConnection } from '../../../../../../../com/viaversion/viaversion/api/connection/UserConnection.d.ts'
import type { HolderSet } from '../../../../../../../com/viaversion/viaversion/api/minecraft/HolderSet.d.ts'
import type { DataComponentMatchers } from '../../../../../../../com/viaversion/viaversion/api/minecraft/data/predicate/DataComponentMatchers.d.ts'
import type { StatePropertyMatcher } from '../../../../../../../com/viaversion/viaversion/api/minecraft/item/data/StatePropertyMatcher.d.ts'
import type { Protocol } from '../../../../../../../com/viaversion/viaversion/api/protocol/Protocol.d.ts'
import type { Type } from '../../../../../../../com/viaversion/viaversion/api/type/Type.d.ts'
import type { Int2IntFunction } from '../../../../../../../com/viaversion/viaversion/libs/fastutil/ints/Int2IntFunction.d.ts'
import type { Copyable } from '../../../../../../../com/viaversion/viaversion/util/Copyable.d.ts'
import type { Rewritable } from '../../../../../../../com/viaversion/viaversion/util/Rewritable.d.ts'
import type { Record } from '../../../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Map$Entry } from '../../../../../../../java/util/Map$Entry.d.ts'
export class BlockPredicate extends Record implements Copyable, Rewritable {
    static ARRAY_TYPE1_20_5: Type<(Object | null)[]>;
    static TYPE1_20_5: Type<BlockPredicate>;
    // private dataMatchers: DataComponentMatchers;
    // private holderSet: HolderSet;
    // private propertyMatchers: StatePropertyMatcher[];
    // private tag: Map$Entry<string, Tag>[];
    copy(): BlockPredicate;
    dataMatchers(): DataComponentMatchers;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    holderSet(): HolderSet;
    propertyMatchers(): StatePropertyMatcher[];
    rewrite(arg0: UserConnection, arg1: Protocol<Object, Object, Object, Object>, arg2: boolean): BlockPredicate;
    tag(): Map$Entry<string, Tag>[];
    toString(): string;
}
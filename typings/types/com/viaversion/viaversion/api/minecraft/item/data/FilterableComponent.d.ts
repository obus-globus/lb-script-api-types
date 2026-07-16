import type { Tag } from '../../../../../../../com/viaversion/nbt/tag/Tag.d.ts'
import type { UserConnection } from '../../../../../../../com/viaversion/viaversion/api/connection/UserConnection.d.ts'
import type { Filterable } from '../../../../../../../com/viaversion/viaversion/api/minecraft/item/data/Filterable.d.ts'
import type { Protocol } from '../../../../../../../com/viaversion/viaversion/api/protocol/Protocol.d.ts'
import type { Type } from '../../../../../../../com/viaversion/viaversion/api/type/Type.d.ts'
import type { Int2IntFunction } from '../../../../../../../com/viaversion/viaversion/libs/fastutil/ints/Int2IntFunction.d.ts'
import type { Copyable } from '../../../../../../../com/viaversion/viaversion/util/Copyable.d.ts'
import type { Rewritable } from '../../../../../../../com/viaversion/viaversion/util/Rewritable.d.ts'
export class FilterableComponent extends Filterable<Tag> implements Copyable, Rewritable {
    static ARRAY_TYPE: Type<FilterableComponent[]>;
    static TYPE: Type<FilterableComponent>;
    constructor(arg0: Tag, arg1: Tag)
    copy(): FilterableComponent;
    rewrite(arg0: UserConnection, arg1: Protocol<any, any, any, any>, arg2: boolean): FilterableComponent;
}
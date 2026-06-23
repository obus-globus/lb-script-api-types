import type { Tag } from '../../../../../../../com/viaversion/nbt/tag/Tag.d.ts'
import type { UserConnection } from '../../../../../../../com/viaversion/viaversion/api/connection/UserConnection.d.ts'
import type { Protocol } from '../../../../../../../com/viaversion/viaversion/api/protocol/Protocol.d.ts'
import type { Type } from '../../../../../../../com/viaversion/viaversion/api/type/Type.d.ts'
import type { Int2IntFunction } from '../../../../../../../com/viaversion/viaversion/libs/fastutil/ints/Int2IntFunction.d.ts'
import type { Copyable } from '../../../../../../../com/viaversion/viaversion/util/Copyable.d.ts'
import type { Rewritable } from '../../../../../../../com/viaversion/viaversion/util/Rewritable.d.ts'
import type { Record } from '../../../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Map$Entry } from '../../../../../../../java/util/Map$Entry.d.ts'
export class EntityData extends Record implements Copyable, Rewritable {
    static TYPE: Type<EntityData>;
    // private tag: Map$Entry<string, Tag>[];
    // private type: number;
    copy(): EntityData;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    rewrite(arg0: UserConnection, arg1: Protocol<any, any, any, any>, arg2: boolean): EntityData;
    tag(): Map$Entry<string, Tag>[];
    toString(): string;
    type(): number;
}
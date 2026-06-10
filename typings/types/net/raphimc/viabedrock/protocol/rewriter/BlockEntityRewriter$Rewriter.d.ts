import type { StringTag } from '../../../../../com/viaversion/nbt/tag/StringTag.d.ts'
import type { Tag } from '../../../../../com/viaversion/nbt/tag/Tag.d.ts'
import type { UserConnection } from '../../../../../com/viaversion/viaversion/api/connection/UserConnection.d.ts'
import type { BlockEntity } from '../../../../../com/viaversion/viaversion/api/minecraft/blockentity/BlockEntity.d.ts'
import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Map$Entry } from '../../../../../java/util/Map$Entry.d.ts'
import type { BedrockBlockEntity } from '../../../../../net/raphimc/viabedrock/api/chunk/BedrockBlockEntity.d.ts'
export interface BlockEntityRewriter$Rewriter extends Object{
    copy(arg0: Map$Entry<string, Tag>[], arg1: Map$Entry<string, Tag>[], arg2: string, arg3: Class<Object>): void;
    copy(arg0: Map$Entry<string, Tag>[], arg1: Map$Entry<string, Tag>[], arg2: string, arg3: string, arg4: Class<Object>): void;
    copyCustomName(arg0: UserConnection, arg1: Map$Entry<string, Tag>[], arg2: Map$Entry<string, Tag>[]): void;
    copyItem(arg0: UserConnection, arg1: Map$Entry<string, Tag>[], arg2: Map$Entry<string, Tag>[], arg3: string): void;
    copyItem(arg0: UserConnection, arg1: Map$Entry<string, Tag>[], arg2: Map$Entry<string, Tag>[], arg3: string, arg4: string): void;
    copyItemList(arg0: UserConnection, arg1: Map$Entry<string, Tag>[], arg2: Map$Entry<string, Tag>[]): void;
    rewriteCustomName(arg0: UserConnection, arg1: StringTag): StringTag;
    rewriteItem(arg0: UserConnection, arg1: Map$Entry<string, Tag>[]): Map$Entry<string, Tag>[];
    rewriteItemList(arg0: UserConnection, arg1: Map$Entry<string, Tag>[][]): Tag[];
    toJava(arg0: UserConnection, arg1: BedrockBlockEntity): BlockEntity;
}
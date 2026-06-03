import type { StringTag } from '../../../../../../com/viaversion/nbt/tag/StringTag.d.ts'
import type { Tag } from '../../../../../../com/viaversion/nbt/tag/Tag.d.ts'
import type { BackwardsProtocol } from '../../../../../../com/viaversion/viabackwards/api/BackwardsProtocol.d.ts'
import type { TranslatableRewriter } from '../../../../../../com/viaversion/viabackwards/api/rewriters/text/TranslatableRewriter.d.ts'
import type { UserConnection } from '../../../../../../com/viaversion/viaversion/api/connection/UserConnection.d.ts'
import type { ClientboundPacketType } from '../../../../../../com/viaversion/viaversion/api/protocol/packet/ClientboundPacketType.d.ts'
import type { JsonObject } from '../../../../../../com/viaversion/viaversion/libs/gson/JsonObject.d.ts'
import type { NBTComponentRewriter as NBTComponentRewriter_2 } from '../../../../../../com/viaversion/viaversion/rewriter/text/NBTComponentRewriter.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Map$Entry } from '../../../../../../java/util/Map$Entry.d.ts'
export class NBTComponentRewriter<C extends ClientboundPacketType> extends NBTComponentRewriter_2<C> implements TranslatableRewriter {
    constructor(arg0: BackwardsProtocol<C, Object, Object, Object>)
    constructor(arg0: BackwardsProtocol<C, Object, Object, Object>, arg1: string)
    // private translatables: { [key: string]: string };
    handleTranslate(arg0: UserConnection, arg1: Map$Entry<string, Tag>[], arg2: StringTag): void;
    handleTranslate(arg0: JsonObject, arg1: string): void;
    mappedTranslationKey(arg0: string): string;
}
import type { JavaMap } from '../../../../../../JavaMap.d.ts'
import type { StringTag } from '../../../../../../com/viaversion/nbt/tag/StringTag.d.ts'
import type { Tag } from '../../../../../../com/viaversion/nbt/tag/Tag.d.ts'
import type { BackwardsProtocol } from '../../../../../../com/viaversion/viabackwards/api/BackwardsProtocol.d.ts'
import type { TranslatableRewriter } from '../../../../../../com/viaversion/viabackwards/api/rewriters/text/TranslatableRewriter.d.ts'
import type { UserConnection } from '../../../../../../com/viaversion/viaversion/api/connection/UserConnection.d.ts'
import type { ClientboundPacketType } from '../../../../../../com/viaversion/viaversion/api/protocol/packet/ClientboundPacketType.d.ts'
import type { JsonObject } from '../../../../../../com/viaversion/viaversion/libs/gson/JsonObject.d.ts'
import type { ComponentRewriterBase$ReadType } from '../../../../../../com/viaversion/viaversion/rewriter/text/ComponentRewriterBase$ReadType.d.ts'
import type { JsonNBTComponentRewriter as JsonNBTComponentRewriter_2 } from '../../../../../../com/viaversion/viaversion/rewriter/text/JsonNBTComponentRewriter.d.ts'
import type { Map$Entry } from '../../../../../../java/util/Map$Entry.d.ts'
export class JsonNBTComponentRewriter<C extends ClientboundPacketType> extends JsonNBTComponentRewriter_2<C> implements TranslatableRewriter {
    constructor(arg0: BackwardsProtocol<C, any, any, any>, arg1: ComponentRewriterBase$ReadType)
    constructor(arg0: BackwardsProtocol<C, any, any, any>, arg1: ComponentRewriterBase$ReadType, arg2: string)
    // private translatables: JavaMap<string, string>;
    handleTranslate(arg0: UserConnection, arg1: Map$Entry<string, Tag>[], arg2: StringTag): void;
    handleTranslate(arg0: JsonObject, arg1: string): void;
    mappedTranslationKey(arg0: string): string;
}
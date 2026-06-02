import type { StringTag } from '../../../../../../com/viaversion/nbt/tag/StringTag.d.ts'
import type { Tag } from '../../../../../../com/viaversion/nbt/tag/Tag.d.ts'
import type { Protocol25w14craftmineTo1_21_5 } from '../../../../../../com/viaversion/viaaprilfools/protocol/s25w14craftminetov1_21_5/Protocol25w14craftmineTo1_21_5.d.ts'
import type { MappingData25w14craftmine } from '../../../../../../com/viaversion/viaaprilfools/protocol/s25w14craftminetov1_21_5/data/MappingData25w14craftmine.d.ts'
import type { ClientboundPacket25w14craftmine } from '../../../../../../com/viaversion/viaaprilfools/protocol/v1_21_5to25w14craftmine/packet/ClientboundPacket25w14craftmine.d.ts'
import type { TranslatableRewriter } from '../../../../../../com/viaversion/viabackwards/api/rewriters/text/TranslatableRewriter.d.ts'
import type { UserConnection } from '../../../../../../com/viaversion/viaversion/api/connection/UserConnection.d.ts'
import type { JsonObject } from '../../../../../../com/viaversion/viaversion/libs/gson/JsonObject.d.ts'
import type { NBTComponentRewriter } from '../../../../../../com/viaversion/viaversion/rewriter/text/NBTComponentRewriter.d.ts'
import type { Map$Entry } from '../../../../../../java/util/Map$Entry.d.ts'
export class ComponentRewriter25w14craftmine extends NBTComponentRewriter<ClientboundPacket25w14craftmine> implements TranslatableRewriter {
    constructor(arg0: Protocol25w14craftmineTo1_21_5)
    // private mappingData: MappingData25w14craftmine;
    handleShowItem(arg0: UserConnection, arg1: Map$Entry<string, Tag>[], arg2: Map$Entry<string, Tag>[]): void;
    handleTranslate(arg0: UserConnection, arg1: Map$Entry<string, Tag>[], arg2: StringTag): void;
    handleTranslate(arg0: JsonObject, arg1: string): void;
    mappedTranslationKey(arg0: string): string;
}
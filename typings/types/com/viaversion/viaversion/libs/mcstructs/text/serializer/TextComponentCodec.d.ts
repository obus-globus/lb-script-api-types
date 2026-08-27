import type { Tag } from '../../../../../../../com/viaversion/nbt/tag/Tag.d.ts'
import type { JsonElement } from '../../../../../../../com/viaversion/viaversion/libs/gson/JsonElement.d.ts'
import type { DataConverter } from '../../../../../../../com/viaversion/viaversion/libs/mcstructs/converter/DataConverter.d.ts'
import type { Codec } from '../../../../../../../com/viaversion/viaversion/libs/mcstructs/converter/codec/Codec.d.ts'
import type { SNbt } from '../../../../../../../com/viaversion/viaversion/libs/mcstructs/snbt/SNbt.d.ts'
import type { Style } from '../../../../../../../com/viaversion/viaversion/libs/mcstructs/text/Style.d.ts'
import type { TextComponent } from '../../../../../../../com/viaversion/viaversion/libs/mcstructs/text/TextComponent.d.ts'
import type { TextComponentSerializer } from '../../../../../../../com/viaversion/viaversion/libs/mcstructs/text/serializer/TextComponentSerializer.d.ts'
import type { TextVerifier } from '../../../../../../../com/viaversion/viaversion/libs/mcstructs/text/serializer/verify/TextVerifier.d.ts'
import type { Supplier } from '../../../../../../../java/util/function/Supplier.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Map$Entry } from '../../../../../../../java/util/Map$Entry.d.ts'
export class TextComponentCodec extends Object {
    static LATEST: TextComponentCodec;
    static V1_20_3: TextComponentCodec;
    static V1_20_5: TextComponentCodec;
    static V1_21_2: TextComponentCodec;
    static V1_21_4: TextComponentCodec;
    static V1_21_5: TextComponentCodec;
    static V1_21_6: TextComponentCodec;
    static V1_21_9: TextComponentCodec;
    static V26_1: TextComponentCodec;
    static V26_2: TextComponentCodec;
    constructor(arg0: () => SNbt<Map$Entry<string, Tag>[]>, arg1: () => Codec<TextComponent>, arg2: () => Codec<Style>, arg3: DataConverter<JsonElement>, arg4: DataConverter<Tag>)
    readonly jsonConverter: DataConverter<JsonElement>;
    readonly nbtConverter: DataConverter<Tag>;
    // private sNbt: SNbt<Map$Entry<string, Tag>[]>;
    // private sNbtSupplier: () => SNbt<Map$Entry<string, Tag>[]>;
    readonly styleCodec: Codec<Style>;
    // private styleCodecSupplier: () => Codec<Style>;
    readonly textCodec: Codec<TextComponent>;
    // private textCodecSupplier: () => Codec<TextComponent>;
    asSerializer(): TextComponentSerializer;
    deserialize(arg0: Tag): TextComponent;
    deserialize(arg0: JsonElement): TextComponent;
    deserializeJson(arg0: string): TextComponent;
    deserializeJsonReader(arg0: string): TextComponent;
    deserializeJsonTree(arg0: JsonElement): TextComponent;
    deserializeLenientJson(arg0: string): TextComponent;
    deserializeNbt(arg0: string): TextComponent;
    deserializeNbtTree(arg0: Tag): TextComponent;
    getJsonConverter(): DataConverter<JsonElement>;
    getNbtConverter(): DataConverter<Tag>;
    // private getSNbtSerializer(): SNbt<Map$Entry<string, Tag>[]>;
    getStyleCodec(): Codec<Style>;
    getTextCodec(): Codec<TextComponent>;
    serializeJsonString(arg0: TextComponent): string;
    serializeJsonTree(arg0: TextComponent): JsonElement;
    serializeNbtString(arg0: TextComponent): string;
    serializeNbtTree(arg0: TextComponent): Tag;
    withVerifier(arg0: TextVerifier): TextComponentCodec;
}
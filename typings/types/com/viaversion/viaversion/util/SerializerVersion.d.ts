import type { Tag } from '../../../../com/viaversion/nbt/tag/Tag.d.ts'
import type { JsonElement } from '../../../../com/viaversion/viaversion/libs/gson/JsonElement.d.ts'
import type { SNbt } from '../../../../com/viaversion/viaversion/libs/mcstructs/snbt/SNbt.d.ts'
import type { TextComponent } from '../../../../com/viaversion/viaversion/libs/mcstructs/text/TextComponent.d.ts'
import type { TextComponentCodec } from '../../../../com/viaversion/viaversion/libs/mcstructs/text/serializer/TextComponentCodec.d.ts'
import type { TextComponentSerializer } from '../../../../com/viaversion/viaversion/libs/mcstructs/text/serializer/TextComponentSerializer.d.ts'
import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
export class SerializerVersion extends Enum<SerializerVersion> {
    static V1_12: SerializerVersion;
    static V1_13: SerializerVersion;
    static V1_14: SerializerVersion;
    static V1_15: SerializerVersion;
    static V1_16: SerializerVersion;
    static V1_17: SerializerVersion;
    static V1_18: SerializerVersion;
    static V1_19_4: SerializerVersion;
    static V1_20_3: SerializerVersion;
    static V1_20_5: SerializerVersion;
    static V1_21_4: SerializerVersion;
    static V1_21_6: SerializerVersion;
    static V1_6: SerializerVersion;
    static V1_7: SerializerVersion;
    static V1_8: SerializerVersion;
    static V1_9: SerializerVersion;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): SerializerVersion;
    static values(): SerializerVersion[];
    private constructor(arg2: TextComponentCodec, arg3: SNbt<Tag>)
    private constructor(arg2: TextComponentSerializer, arg3: SNbt<Tag>)
    // private codec: TextComponentCodec;
    // private jsonSerializer: TextComponentSerializer;
    // private sNbt: SNbt<Tag>;
    toComponent(arg0: Tag): TextComponent;
    toComponent(arg0: JsonElement): TextComponent;
    toComponent(arg0: string): TextComponent;
    toJson(arg0: TextComponent): JsonElement;
    toSNBT(arg0: Tag): string;
    toString(): string;
    toString(arg0: TextComponent): string;
    toTag(arg0: TextComponent): Tag;
    toTag(arg0: string): Tag;
    name(): "V1_6" | "V1_7" | "V1_8" | "V1_9" | "V1_12" | "V1_13" | "V1_14" | "V1_15" | "V1_16" | "V1_17" | "V1_18" | "V1_19_4" | "V1_20_3" | "V1_20_5" | "V1_21_4" | "V1_21_6";
}
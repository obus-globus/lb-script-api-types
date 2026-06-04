import type { Gson } from '../../../../../../../com/viaversion/viaversion/libs/gson/Gson.d.ts'
import type { JsonElement } from '../../../../../../../com/viaversion/viaversion/libs/gson/JsonElement.d.ts'
import type { ConsumerTracking } from '../../../../../../../com/viaversion/viaversion/libs/mcstructs/converter/ConsumerTracking.d.ts'
import type { TextComponent } from '../../../../../../../com/viaversion/viaversion/libs/mcstructs/text/TextComponent.d.ts'
import type { TextComponentCodec } from '../../../../../../../com/viaversion/viaversion/libs/mcstructs/text/serializer/TextComponentCodec.d.ts'
import type { Consumer } from '../../../../../../../java/util/function/Consumer.d.ts'
import type { Supplier } from '../../../../../../../java/util/function/Supplier.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export class TextComponentSerializer extends Object implements ConsumerTracking {
    static LATEST: TextComponentSerializer;
    static V1_12: TextComponentSerializer;
    static V1_14: TextComponentSerializer;
    static V1_15: TextComponentSerializer;
    static V1_16: TextComponentSerializer;
    static V1_17: TextComponentSerializer;
    static V1_18: TextComponentSerializer;
    static V1_19_4: TextComponentSerializer;
    static V1_20_3: TextComponentSerializer;
    static V1_20_5: TextComponentSerializer;
    static V1_21_2: TextComponentSerializer;
    static V1_21_4: TextComponentSerializer;
    static V1_21_5: TextComponentSerializer;
    static V1_21_6: TextComponentSerializer;
    static V1_21_9: TextComponentSerializer;
    static V1_6: TextComponentSerializer;
    static V1_7: TextComponentSerializer;
    static V1_8: TextComponentSerializer;
    static V1_9: TextComponentSerializer;
    static V26_1: TextComponentSerializer;
    constructor(arg0: TextComponentCodec, arg1: () => Gson)
    private constructor(arg0: TextComponentCodec, arg1: () => Gson, arg2: boolean)
    constructor(arg0: () => Gson)
    constructor(arg0: () => Gson, arg1: boolean)
    readonly gson: Gson;
    // private gsonSupplier: () => Gson;
    // private isDefault: boolean;
    // private legacyGson: boolean;
    readonly parentCodec: TextComponentCodec;
    // private stringConsumer: (param0: string) => void;
    currentConsumer(): (param0: string) => void;
    deserialize(arg0: JsonElement): TextComponent;
    deserialize(arg0: string): TextComponent;
    deserializeLenientReader(arg0: string): TextComponent;
    deserializeParser(arg0: string): TextComponent;
    deserializeReader(arg0: string): TextComponent;
    deserializeReader(arg0: string, arg1: boolean): TextComponent;
    forkIfDefault(): ConsumerTracking;
    forkIfDefault(): TextComponentSerializer;
    getGson(): Gson;
    getParentCodec(): TextComponentCodec;
    isCodec(): boolean;
    serialize(arg0: TextComponent): string;
    serializeJson(arg0: TextComponent): JsonElement;
    setCurrentConsumer(arg0: (param0: string) => void): void;
}
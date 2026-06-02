import type { Tag } from '../../../../../com/viaversion/nbt/tag/Tag.d.ts'
import type { JsonElement } from '../../../../../com/viaversion/viaversion/libs/gson/JsonElement.d.ts'
import type { TextComponent } from '../../../../../com/viaversion/viaversion/libs/mcstructs/text/TextComponent.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Map$Entry } from '../../../../../java/util/Map$Entry.d.ts'
export class TextUtil extends Object {
    static ensureCompoundTag(paramarg0: Tag): Map$Entry<string, Tag>[];
    static stringToGson(paramarg0: string): JsonElement;
    static stringToJson(paramarg0: string): string;
    static stringToNbt(paramarg0: string): Tag;
    static stringToTextComponent(paramarg0: string): TextComponent;
    static textComponentToGson(paramarg0: TextComponent): JsonElement;
    static textComponentToJson(paramarg0: TextComponent): string;
    static textComponentToNbt(paramarg0: TextComponent): Tag;
    constructor()
}
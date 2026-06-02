import type { Tag } from '../../../../com/viaversion/nbt/tag/Tag.d.ts'
import type { JsonElement } from '../../../../com/viaversion/viaversion/libs/gson/JsonElement.d.ts'
import type { JsonObject } from '../../../../com/viaversion/viaversion/libs/gson/JsonObject.d.ts'
import type { SerializerVersion } from '../../../../com/viaversion/viaversion/util/SerializerVersion.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Map$Entry } from '../../../../java/util/Map$Entry.d.ts'
export class ComponentUtil extends Object {
    static convertJson(paramarg0: JsonElement, paramarg1: SerializerVersion, paramarg2: SerializerVersion): JsonElement;
    static convertJson(paramarg0: string, paramarg1: SerializerVersion, paramarg2: SerializerVersion): JsonElement;
    static convertJsonOrEmpty(paramarg0: string, paramarg1: SerializerVersion, paramarg2: SerializerVersion): JsonElement;
    static deserializeLegacyShowItem(paramarg0: JsonElement, paramarg1: SerializerVersion): Map$Entry<string, Tag>[];
    static deserializeShowItem(paramarg0: Tag, paramarg1: SerializerVersion): Map$Entry<string, Tag>[];
    static emptyJsonComponent(): JsonObject;
    static emptyJsonComponentString(): string;
    static jsonStringToTag(paramarg0: string): Tag;
    static jsonStringToTag(paramarg0: string, paramarg1: SerializerVersion, paramarg2: SerializerVersion): Tag;
    static jsonToLegacy(paramarg0: JsonElement): string;
    static jsonToLegacy(paramarg0: string): string;
    static jsonToTag(paramarg0: JsonElement): Tag;
    static legacyToJson(paramarg0: string): JsonElement;
    static legacyToJsonString(paramarg0: string): string;
    static legacyToJsonString(paramarg0: string, paramarg1: boolean): string;
    static plainToJson(paramarg0: string): JsonObject;
    static tagToJson(paramarg0: Tag): JsonElement;
    static tagToJsonString(paramarg0: Tag): string;
    static trimStrings(paramarg0: Tag): Tag;
    constructor()
}
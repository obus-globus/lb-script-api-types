import type { Tag } from '../../../../../../../com/viaversion/nbt/tag/Tag.d.ts'
import type { JsonElement } from '../../../../../../../com/viaversion/viaversion/libs/gson/JsonElement.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export class JsonNbtConverter extends Object {
    static toJson(paramarg0: Tag): JsonElement;
    static toNbt(paramarg0: JsonElement): Tag;
    constructor()
}
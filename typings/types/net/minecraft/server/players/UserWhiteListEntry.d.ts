import type { JsonObject } from '../../../../com/google/gson/JsonObject.d.ts'
import type { NameAndId } from '../../../../net/minecraft/server/players/NameAndId.d.ts'
import type { StoredUserEntry } from '../../../../net/minecraft/server/players/StoredUserEntry.d.ts'
export class UserWhiteListEntry extends StoredUserEntry<NameAndId> {
    constructor(object: JsonObject)
    constructor(user: NameAndId)
    serialize(object: JsonObject): void;
}
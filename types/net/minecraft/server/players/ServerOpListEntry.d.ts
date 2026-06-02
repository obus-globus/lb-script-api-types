import type { JsonObject } from '../../../../com/google/gson/JsonObject.d.ts'
import type { LevelBasedPermissionSet } from '../../../../net/minecraft/server/permissions/LevelBasedPermissionSet.d.ts'
import type { NameAndId } from '../../../../net/minecraft/server/players/NameAndId.d.ts'
import type { StoredUserEntry } from '../../../../net/minecraft/server/players/StoredUserEntry.d.ts'
export class ServerOpListEntry extends StoredUserEntry<NameAndId> {
    constructor(object: JsonObject)
    constructor(user: NameAndId, permissions: LevelBasedPermissionSet, bypassesPlayerLimit: boolean)
    readonly bypassesPlayerLimit: boolean;
    // private permissions: LevelBasedPermissionSet;
    getBypassesPlayerLimit(): boolean;
    permissions(): LevelBasedPermissionSet;
    serialize(object: JsonObject): void;
}
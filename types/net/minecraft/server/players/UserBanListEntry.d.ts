import type { JsonObject } from '../../../../com/google/gson/JsonObject.d.ts'
import type { SimpleDateFormat } from '../../../../java/text/SimpleDateFormat.d.ts'
import type { Date } from '../../../../java/util/Date.d.ts'
import type { Component } from '../../../../net/minecraft/network/chat/Component.d.ts'
import type { BanListEntry } from '../../../../net/minecraft/server/players/BanListEntry.d.ts'
import type { NameAndId } from '../../../../net/minecraft/server/players/NameAndId.d.ts'
export class UserBanListEntry extends BanListEntry<NameAndId> {
    static DATE_FORMAT: SimpleDateFormat;
    static EXPIRES_NEVER: string;
    constructor(object: JsonObject)
    constructor(user: NameAndId)
    constructor(user: NameAndId, created: Date, source: string, expires: Date, reason: string)
    getDisplayName(): Component;
    serialize(object: JsonObject): void;
}
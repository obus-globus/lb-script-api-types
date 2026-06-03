import type { JsonObject } from '../../../../com/google/gson/JsonObject.d.ts'
import type { File } from '../../../../java/io/File.d.ts'
import type { NotificationService } from '../../../../net/minecraft/server/notifications/NotificationService.d.ts'
import type { NameAndId } from '../../../../net/minecraft/server/players/NameAndId.d.ts'
import type { StoredUserEntry } from '../../../../net/minecraft/server/players/StoredUserEntry.d.ts'
import type { StoredUserList } from '../../../../net/minecraft/server/players/StoredUserList.d.ts'
import type { UserBanListEntry } from '../../../../net/minecraft/server/players/UserBanListEntry.d.ts'
export class UserBanList extends StoredUserList<NameAndId, UserBanListEntry> {
    constructor(file: File, notificationService: NotificationService)
    add(infos: UserBanListEntry): boolean;
    clear(): void;
    createEntry(object: JsonObject): StoredUserEntry<NameAndId>;
    getKeyForUser(user: NameAndId): string;
    getUserList(): string[];
    isBanned(user: NameAndId): boolean;
    remove(user: NameAndId): boolean;
    remove(infos: StoredUserEntry<NameAndId>): boolean;
}
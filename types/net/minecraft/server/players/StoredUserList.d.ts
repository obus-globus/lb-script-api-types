import type { JsonObject } from '../../../../com/google/gson/JsonObject.d.ts'
import type { File } from '../../../../java/io/File.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { NotificationService } from '../../../../net/minecraft/server/notifications/NotificationService.d.ts'
import type { StoredUserEntry } from '../../../../net/minecraft/server/players/StoredUserEntry.d.ts'
export abstract class StoredUserList<K extends Object | number | string | boolean, V extends StoredUserEntry<K>> extends Object {
    constructor(file: File, notificationService: NotificationService)
    readonly file: File;
    // private map: { [key: string]: V };
    // private notificationService: NotificationService;
    add(infos: V): boolean;
    clear(): void;
    contains(user: K): boolean;
    createEntry(object: JsonObject): StoredUserEntry<K>;
    get(user: K): V;
    getEntries(): E[];
    getFile(): File;
    getKeyForUser(user: K): string;
    getUserList(): string[];
    isEmpty(): boolean;
    load(): void;
    remove(user: K): boolean;
    remove(infos: StoredUserEntry<K>): boolean;
    // private removeExpired(): void;
    save(): void;
}
import type { JsonObject } from '../../../../com/google/gson/JsonObject.d.ts'
import type { File } from '../../../../java/io/File.d.ts'
import type { SocketAddress } from '../../../../java/net/SocketAddress.d.ts'
import type { NotificationService } from '../../../../net/minecraft/server/notifications/NotificationService.d.ts'
import type { IpBanListEntry } from '../../../../net/minecraft/server/players/IpBanListEntry.d.ts'
import type { StoredUserEntry } from '../../../../net/minecraft/server/players/StoredUserEntry.d.ts'
import type { StoredUserList } from '../../../../net/minecraft/server/players/StoredUserList.d.ts'
export class IpBanList extends StoredUserList<string, IpBanListEntry> {
    constructor(file: File, notificationService: NotificationService)
    add(infos: IpBanListEntry): boolean;
    clear(): void;
    createEntry(object: JsonObject): StoredUserEntry<string>;
    get(address: SocketAddress): IpBanListEntry;
    // private getIpFromAddress(address: SocketAddress): string;
    isBanned(address: SocketAddress): boolean;
    isBanned(ip: string): boolean;
    remove(ip: string): boolean;
}
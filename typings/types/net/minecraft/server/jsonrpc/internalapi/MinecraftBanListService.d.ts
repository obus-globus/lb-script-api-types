import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { ClientInfo } from '../../../../../net/minecraft/server/jsonrpc/methods/ClientInfo.d.ts'
import type { IpBanListEntry } from '../../../../../net/minecraft/server/players/IpBanListEntry.d.ts'
import type { NameAndId } from '../../../../../net/minecraft/server/players/NameAndId.d.ts'
import type { UserBanListEntry } from '../../../../../net/minecraft/server/players/UserBanListEntry.d.ts'
export interface MinecraftBanListService extends Object{
    addIpBan(ipBanEntry: IpBanListEntry, clientInfo: ClientInfo): void;
    addUserBan(ban: UserBanListEntry, clientInfo: ClientInfo): void;
    clearIpBans(clientInfo: ClientInfo): void;
    clearUserBans(clientInfo: ClientInfo): void;
    getIpBanEntries(): E[];
    getUserBanEntries(): E[];
    removeIpBan(ip: string, clientInfo: ClientInfo): void;
    removeUserBan(nameAndId: NameAndId, clientInfo: ClientInfo): void;
}
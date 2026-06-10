import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { ClientInfo } from '../../../../../net/minecraft/server/jsonrpc/methods/ClientInfo.d.ts'
import type { NameAndId } from '../../../../../net/minecraft/server/players/NameAndId.d.ts'
import type { UserWhiteListEntry } from '../../../../../net/minecraft/server/players/UserWhiteListEntry.d.ts'
export interface MinecraftAllowListService extends Object{
    add(infos: UserWhiteListEntry, clientInfo: ClientInfo): boolean;
    clear(clientInfo: ClientInfo): void;
    getEntries(): UserWhiteListEntry[];
    kickUnlistedPlayers(clientInfo: ClientInfo): void;
    remove(nameAndId: NameAndId, clientInfo: ClientInfo): void;
}
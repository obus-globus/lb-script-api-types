import type { File } from '../../../../java/io/File.d.ts'
import type { UUID } from '../../../../java/util/UUID.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { MinecraftServer } from '../../../../net/minecraft/server/MinecraftServer.d.ts'
import type { DedicatedServer } from '../../../../net/minecraft/server/dedicated/DedicatedServer.d.ts'
export class OldUsersConverter extends Object {
    static OLD_IPBANLIST: File;
    static OLD_OPLIST: File;
    static OLD_USERBANLIST: File;
    static OLD_WHITELIST: File;
    static areOldUserlistsRemoved(): boolean;
    static convertIpBanlist(paramserver: MinecraftServer): boolean;
    static convertMobOwnerIfNecessary(paramserver: MinecraftServer, paramowner: string): UUID;
    static convertOpsList(paramserver: MinecraftServer): boolean;
    static convertPlayers(paramserver: DedicatedServer): boolean;
    static convertUserBanlist(paramserver: MinecraftServer): boolean;
    static convertWhiteList(paramserver: MinecraftServer): boolean;
    constructor()
}
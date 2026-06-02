import type { File } from '../../../../java/io/File.d.ts'
import type { SocketAddress } from '../../../../java/net/SocketAddress.d.ts'
import type { IntegratedServer } from '../../../../net/minecraft/client/server/IntegratedServer.d.ts'
import type { LayeredRegistryAccess } from '../../../../net/minecraft/core/LayeredRegistryAccess.d.ts'
import type { Component } from '../../../../net/minecraft/network/chat/Component.d.ts'
import type { RegistryLayer } from '../../../../net/minecraft/server/RegistryLayer.d.ts'
import type { NameAndId } from '../../../../net/minecraft/server/players/NameAndId.d.ts'
import type { PlayerList } from '../../../../net/minecraft/server/players/PlayerList.d.ts'
import type { PlayerDataStorage } from '../../../../net/minecraft/world/level/storage/PlayerDataStorage.d.ts'
export class IntegratedPlayerList extends PlayerList {
    static CHAT_FILTERED_FULL: Component;
    static DUPLICATE_LOGIN_DISCONNECT_MESSAGE: Component;
    static IPBANLIST_FILE: File;
    static OPLIST_FILE: File;
    static USERBANLIST_FILE: File;
    static WHITELIST_FILE: File;
    constructor(server: IntegratedServer, registryHolder: LayeredRegistryAccess<RegistryLayer>, playerDataStorage: PlayerDataStorage)
    canPlayerLogin(address: SocketAddress, nameAndId: NameAndId): Component;
    getServer(): IntegratedServer;
}
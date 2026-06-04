import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Connection } from '../../../../../net/minecraft/network/Connection.d.ts'
import type { Packet } from '../../../../../net/minecraft/network/protocol/Packet.d.ts'
import type { MinecraftServer } from '../../../../../net/minecraft/server/MinecraftServer.d.ts'
import type { ServerPlayer } from '../../../../../net/minecraft/server/level/ServerPlayer.d.ts'
import type { LevelLoadListener } from '../../../../../net/minecraft/server/level/progress/LevelLoadListener.d.ts'
import type { CommonListenerCookie } from '../../../../../net/minecraft/server/network/CommonListenerCookie.d.ts'
import type { ConfigurationTask } from '../../../../../net/minecraft/server/network/ConfigurationTask.d.ts'
import type { ConfigurationTask$Type } from '../../../../../net/minecraft/server/network/ConfigurationTask$Type.d.ts'
import type { PrepareSpawnTask$State } from '../../../../../net/minecraft/server/network/config/PrepareSpawnTask$State.d.ts'
import type { NameAndId } from '../../../../../net/minecraft/server/players/NameAndId.d.ts'
export class PrepareSpawnTask extends Object implements ConfigurationTask {
    static PREPARE_CHUNK_RADIUS: number;
    static TYPE: ConfigurationTask$Type;
    constructor(server: MinecraftServer, nameAndId: NameAndId)
    // private loadListener: LevelLoadListener;
    // private nameAndId: NameAndId;
    // private server: MinecraftServer;
    // private state: PrepareSpawnTask$State;
    close(): void;
    keepAlive(): void;
    spawnPlayer(connection: Connection, cookie: CommonListenerCookie): ServerPlayer;
    start(connection: (param0: Packet<Object>) => void): void;
    tick(): boolean;
    type(): ConfigurationTask$Type;
}
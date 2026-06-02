import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Packet } from '../../../../../net/minecraft/network/protocol/Packet.d.ts'
import type { MinecraftServer$ServerResourcePackInfo } from '../../../../../net/minecraft/server/MinecraftServer$ServerResourcePackInfo.d.ts'
import type { ConfigurationTask } from '../../../../../net/minecraft/server/network/ConfigurationTask.d.ts'
import type { ConfigurationTask$Type } from '../../../../../net/minecraft/server/network/ConfigurationTask$Type.d.ts'
export class ServerResourcePackConfigurationTask extends Object implements ConfigurationTask {
    static TYPE: ConfigurationTask$Type;
    constructor(info: MinecraftServer$ServerResourcePackInfo)
    // private info: MinecraftServer$ServerResourcePackInfo;
    start(connection: (param0: Packet<Object>) => void): void;
    tick(): boolean;
    type(): ConfigurationTask$Type;
}
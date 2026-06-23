import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Packet } from '../../../../../net/minecraft/network/protocol/Packet.d.ts'
import type { ConfigurationTask } from '../../../../../net/minecraft/server/network/ConfigurationTask.d.ts'
import type { ConfigurationTask$Type } from '../../../../../net/minecraft/server/network/ConfigurationTask$Type.d.ts'
export class JoinWorldTask extends Object implements ConfigurationTask {
    static TYPE: ConfigurationTask$Type;
    constructor()
    start(connection: (param0: Packet<any>) => void): void;
    tick(): boolean;
    type(): ConfigurationTask$Type;
}
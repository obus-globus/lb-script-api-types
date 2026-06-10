import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { ConnectionProtocol } from '../../../../../net/minecraft/network/ConnectionProtocol.d.ts'
import type { Identifier } from '../../../../../net/minecraft/resources/Identifier.d.ts'
export interface ChannelInfoHolder extends Object{
    fabric_getPendingChannelsNames(arg0: ConnectionProtocol): Identifier[];
}
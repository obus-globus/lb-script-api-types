import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { ConnectionProtocol } from '../../../../../net/minecraft/network/ConnectionProtocol.d.ts'
export interface ChannelInfoHolder extends Object{
    fabric_getPendingChannelsNames(arg0: ConnectionProtocol): E[];
}
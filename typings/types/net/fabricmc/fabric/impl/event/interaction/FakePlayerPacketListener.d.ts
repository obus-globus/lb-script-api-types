import type { ChannelFutureListener } from '../../../../../../io/netty/channel/ChannelFutureListener.d.ts'
import type { UntrackedPacketListener } from '../../../../../../net/fabricmc/fabric/impl/networking/UntrackedPacketListener.d.ts'
import type { Packet } from '../../../../../../net/minecraft/network/protocol/Packet.d.ts'
import type { ServerPlayer } from '../../../../../../net/minecraft/server/level/ServerPlayer.d.ts'
import type { ServerGamePacketListenerImpl } from '../../../../../../net/minecraft/server/network/ServerGamePacketListenerImpl.d.ts'
import type { Logger } from '../../../../../../org/slf4j/Logger.d.ts'
export class FakePlayerPacketListener extends ServerGamePacketListenerImpl implements UntrackedPacketListener {
    static CLIENT_LOADED_TIMEOUT_TIME: number;
    static LATENCY_CHECK_INTERVAL: number;
    static LOGGER: Logger;
    constructor(arg0: ServerPlayer)
    send(packet: Packet<any>): void;
    send(arg0: Packet<any>, arg1: ChannelFutureListener): void;
}
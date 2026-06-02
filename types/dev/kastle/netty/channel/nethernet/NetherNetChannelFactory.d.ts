import type { NetherNetClientChannel } from '../../../../../dev/kastle/netty/channel/nethernet/NetherNetClientChannel.d.ts'
import type { NetherNetServerChannel } from '../../../../../dev/kastle/netty/channel/nethernet/NetherNetServerChannel.d.ts'
import type { NetherNetClientSignaling } from '../../../../../dev/kastle/netty/channel/nethernet/signaling/NetherNetClientSignaling.d.ts'
import type { NetherNetServerSignaling } from '../../../../../dev/kastle/netty/channel/nethernet/signaling/NetherNetServerSignaling.d.ts'
import type { PeerConnectionFactory } from '../../../../../dev/kastle/webrtc/PeerConnectionFactory.d.ts'
import type { Channel } from '../../../../../io/netty/channel/Channel.d.ts'
import type { ChannelFactory } from '../../../../../io/netty/channel/ChannelFactory.d.ts'
import type { Supplier } from '../../../../../java/util/function/Supplier.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class NetherNetChannelFactory<T extends Channel> extends Object implements ChannelFactory<T> {
    static client(paramarg0: PeerConnectionFactory, paramarg1: NetherNetClientSignaling): ChannelFactory<NetherNetClientChannel>;
    static server(paramarg0: PeerConnectionFactory, paramarg1: NetherNetServerSignaling): ChannelFactory<NetherNetServerChannel>;
    private constructor(arg0: () => T)
    // private channelCreator: () => T;
    newChannel(): T;
}
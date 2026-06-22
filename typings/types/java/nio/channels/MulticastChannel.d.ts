import type { InetAddress } from '../../../java/net/InetAddress.d.ts'
import type { NetworkInterface } from '../../../java/net/NetworkInterface.d.ts'
import type { SocketAddress } from '../../../java/net/SocketAddress.d.ts'
import type { MembershipKey } from '../../../java/nio/channels/MembershipKey.d.ts'
import type { NetworkChannel } from '../../../java/nio/channels/NetworkChannel.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export interface MulticastChannel extends NetworkChannel, Object{
    bind(arg0: SocketAddress): NetworkChannel;
    close(): void;
    getLocalAddress(): SocketAddress;
    isOpen(): boolean;
    join(arg0: InetAddress, arg1: NetworkInterface): MembershipKey;
    join(arg0: InetAddress, arg1: NetworkInterface, arg2: InetAddress): MembershipKey;
}
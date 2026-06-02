import type { InetAddress } from '../../../java/net/InetAddress.d.ts'
import type { NetworkInterface } from '../../../java/net/NetworkInterface.d.ts'
import type { MembershipKey } from '../../../java/nio/channels/MembershipKey.d.ts'
import type { NetworkChannel } from '../../../java/nio/channels/NetworkChannel.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export interface MulticastChannel extends NetworkChannel, Object{
    close(): void;
    join(arg0: InetAddress, arg1: NetworkInterface): MembershipKey;
    join(arg0: InetAddress, arg1: NetworkInterface, arg2: InetAddress): MembershipKey;
}
import type { InetAddress } from '../../../java/net/InetAddress.d.ts'
import type { NetworkInterface } from '../../../java/net/NetworkInterface.d.ts'
import type { MulticastChannel } from '../../../java/nio/channels/MulticastChannel.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export abstract class MembershipKey extends Object {
    constructor()
    block(arg0: InetAddress): MembershipKey;
    channel(): MulticastChannel;
    drop(): void;
    group(): InetAddress;
    isValid(): boolean;
    networkInterface(): NetworkInterface;
    sourceAddress(): InetAddress;
    unblock(arg0: InetAddress): MembershipKey;
}
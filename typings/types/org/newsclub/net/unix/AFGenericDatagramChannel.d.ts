import type { ProtocolFamily } from '../../../../java/net/ProtocolFamily.d.ts'
import type { DatagramChannel } from '../../../../java/nio/channels/DatagramChannel.d.ts'
import type { AFDatagramChannel } from '../../../../org/newsclub/net/unix/AFDatagramChannel.d.ts'
import type { AFGenericDatagramSocket } from '../../../../org/newsclub/net/unix/AFGenericDatagramSocket.d.ts'
import type { AFGenericSocketAddress } from '../../../../org/newsclub/net/unix/AFGenericSocketAddress.d.ts'
import type { AFGenericSocketExtensions } from '../../../../org/newsclub/net/unix/AFGenericSocketExtensions.d.ts'
export class AFGenericDatagramChannel extends AFDatagramChannel<AFGenericSocketAddress> implements AFGenericSocketExtensions {
    static open(): DatagramChannel;
    static open(paramarg0: ProtocolFamily): DatagramChannel;
    constructor(arg0: AFGenericDatagramSocket)
}
import type { JavaMap } from '../../../../JavaMap.d.ts'
import type { Field } from '../../../../java/lang/reflect/Field.d.ts'
import type { Method } from '../../../../java/lang/reflect/Method.d.ts'
import type { DatagramChannel } from '../../../../java/nio/channels/DatagramChannel.d.ts'
import type { ServerSocketChannel } from '../../../../java/nio/channels/ServerSocketChannel.d.ts'
import type { SocketChannel } from '../../../../java/nio/channels/SocketChannel.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class SocketOptionsPlatformCapabilities extends Object {
    static INSTANCE: SocketOptionsPlatformCapabilities;
    // private channelSetOption: Method | null;
    // private datagramSetOption: Method | null;
    // private serverChannelSetOption: Method | null;
    // private standardSocketOptions: JavaMap<string, Field>;
    setReusePort(channel: DatagramChannel): void;
    setReusePort(channel: ServerSocketChannel): void;
    setReusePort(channel: SocketChannel): void;
    // private socketOption(name: string): Object;
}
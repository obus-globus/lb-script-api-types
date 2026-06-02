import type { InetSocketAddress } from '../../../../../../java/net/InetSocketAddress.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class TcpSocketManager$HostResolver extends Object {
    static INSTANCE: TcpSocketManager$HostResolver;
    constructor()
    resolveHost(host: string, port: number): InetSocketAddress[];
}
import type { InetSocketAddress } from '../../../../../java/net/InetSocketAddress.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface ResolvedServerAddress extends Object{
    asInetSocketAddress(): InetSocketAddress;
    getHostIp(): string;
    getHostName(): string;
    getPort(): number;
}
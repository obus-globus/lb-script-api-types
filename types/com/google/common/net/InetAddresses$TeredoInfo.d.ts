import type { Inet4Address } from '../../../../java/net/Inet4Address.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class InetAddresses$TeredoInfo extends Object {
    constructor(server: Inet4Address, client: Inet4Address, port: number, flags: number)
    readonly client: Inet4Address;
    readonly flags: number;
    readonly port: number;
    readonly server: Inet4Address;
    getClient(): Inet4Address;
    getFlags(): number;
    getPort(): number;
    getServer(): Inet4Address;
}
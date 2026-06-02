import type { SocketAddress } from '../../../../java/net/SocketAddress.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class VSockAddress extends SocketAddress {
    static VMADDR_CID_ANY: number;
    static VMADDR_CID_HOST: number;
    static VMADDR_CID_HYPERVISOR: number;
    static VMADDR_CID_LOCAL: number;
    static VMADDR_PORT_ANY: number;
    constructor(arg0: number, arg1: number)
    readonly cid: number;
    readonly port: number;
    equals(arg0: Object | null): boolean;
    getCid(): number;
    getPort(): number;
    hashCode(): number;
    toString(): string;
}
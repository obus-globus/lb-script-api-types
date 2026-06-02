import type { InetAddress } from '../../java/net/InetAddress.d.ts'
import type { SocketAddress } from '../../java/net/SocketAddress.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
export class DatagramPacket extends Object {
    constructor(arg0: number[], arg1: number)
    constructor(arg0: number[], arg1: number, arg2: InetAddress, arg3: number)
    constructor(arg0: number[], arg1: number, arg2: SocketAddress)
    constructor(arg0: number[], arg1: number, arg2: number)
    constructor(arg0: number[], arg1: number, arg2: number, arg3: InetAddress, arg4: number)
    constructor(arg0: number[], arg1: number, arg2: number, arg3: SocketAddress)
    address: InetAddress;
    // private buf: number[];
    // private bufLength: number;
    length: number;
    offset: number;
    port: number;
    getAddress(): InetAddress;
    getData(): number[];
    getLength(): number;
    getOffset(): number;
    getPort(): number;
    getSocketAddress(): SocketAddress;
    setAddress(arg0: InetAddress): void;
    setData(arg0: number[]): void;
    setData(arg0: number[], arg1: number, arg2: number): void;
    setLength(arg0: number): void;
    setPort(arg0: number): void;
    setSocketAddress(arg0: SocketAddress): void;
}
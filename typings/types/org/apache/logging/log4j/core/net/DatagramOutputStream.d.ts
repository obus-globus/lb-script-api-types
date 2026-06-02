import type { OutputStream } from '../../../../../../java/io/OutputStream.d.ts'
import type { DatagramSocket } from '../../../../../../java/net/DatagramSocket.d.ts'
import type { InetAddress } from '../../../../../../java/net/InetAddress.d.ts'
export class DatagramOutputStream extends OutputStream {
    static nullOutputStream(): OutputStream;
    constructor(host: string, port: number, header: number[], footer: number[])
    // private data: number[];
    // private datagramSocket: DatagramSocket;
    // private footer: number[];
    // private header: number[];
    // private inetAddress: InetAddress;
    // private port: number;
    close(): void;
    // private copy(bytes: number[], offset: number, length: number): void;
    flush(): void;
    write(bytes: number[]): void;
    write(bytes: number[], offset: number, length: number): void;
    write(i: number): void;
}
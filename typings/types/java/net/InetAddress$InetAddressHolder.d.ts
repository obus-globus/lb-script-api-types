import type { Object } from '../../java/lang/Object.d.ts'
export class InetAddress$InetAddressHolder extends Object {
    constructor()
    constructor(arg0: string, arg1: number, arg2: number)
    // private address: number;
    // private family: number;
    // private hostName: string;
    // private originalHostName: string;
    getAddress(): number;
    getFamily(): number;
    getHostName(): string;
    getOriginalHostName(): string;
    init(arg0: string, arg1: number): void;
}
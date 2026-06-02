import type { Object } from '../../../../java/lang/Object.d.ts'
export class LanServer extends Object {
    constructor(motd: string, address: string)
    readonly address: string;
    readonly motd: string;
    // private pingTime: number;
    getAddress(): string;
    getMotd(): string;
    updatePingTime(): void;
}
import type { Packet } from '../../../com/jcraft/jogg/Packet.d.ts'
import type { Page } from '../../../com/jcraft/jogg/Page.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class StreamState extends Object {
    constructor()
    constructor(arg0: number)
    // private b_o_s: number;
    // private body_data: number[];
    // private body_fill: number;
    // private body_returned: number;
    // private body_storage: number;
    e_o_s: number;
    // private granule_vals: number[];
    // private granulepos: number;
    // private header: number[];
    // private header_fill: number;
    // private lacing_fill: number;
    // private lacing_packet: number;
    // private lacing_returned: number;
    // private lacing_storage: number;
    // private lacing_vals: number[];
    // private packetno: number;
    // private pageno: number;
    // private serialno: number;
    body_expand(arg0: number): void;
    clear(): void;
    destroy(): void;
    eof(): number;
    flush(arg0: Page): number;
    init(): void;
    init(arg0: number): void;
    lacing_expand(arg0: number): void;
    packetin(arg0: Packet): number;
    packetout(arg0: Packet): number;
    pagein(arg0: Page): number;
    pageout(arg0: Page): number;
    reset(): number;
}
import type { Buffer } from '../../../com/jcraft/jogg/Buffer.d.ts'
import type { Packet } from '../../../com/jcraft/jogg/Packet.d.ts'
import type { DspState } from '../../../com/jcraft/jorbis/DspState.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class Block extends Object {
    constructor(arg0: DspState)
    // private W: number;
    // private eofflag: number;
    // private floor_bits: number;
    // private glue_bits: number;
    // private granulepos: number;
    // private lW: number;
    // private mode: number;
    // private nW: number;
    // private opb: Buffer;
    // private pcm: number[][];
    // private pcmend: number;
    // private res_bits: number;
    // private sequence: number;
    // private time_bits: number;
    // private vd: DspState;
    clear(): number;
    init(arg0: DspState): void;
    synthesis(arg0: Packet): number;
}
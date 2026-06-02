import type { Block } from '../../../com/jcraft/jorbis/Block.d.ts'
import type { CodeBook } from '../../../com/jcraft/jorbis/CodeBook.d.ts'
import type { Info } from '../../../com/jcraft/jorbis/Info.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class DspState extends Object {
    constructor()
    constructor(arg0: Info)
    // private W: number;
    // private analysisp: number;
    // private centerW: number;
    // private envelope_current: number;
    // private envelope_storage: number;
    // private eofflag: number;
    // private floor_bits: number;
    // private fullbooks: CodeBook[];
    // private glue_bits: number;
    // private granulepos: number;
    // private header: number[];
    // private header1: number[];
    // private header2: number[];
    // private lW: number;
    // private mode: Object[];
    // private modebits: number;
    // private multipliers: number[];
    // private nW: number;
    // private pcm: number[][];
    // private pcm_current: number;
    // private pcm_returned: number;
    // private pcm_storage: number;
    // private res_bits: number;
    // private sequence: number;
    // private time_bits: number;
    // private transform: Object[][];
    // private vi: Info;
    // private window: number[][][][][];
    clear(): void;
    init(arg0: Info, arg1: boolean): number;
    synthesis_blockin(arg0: Block): number;
    synthesis_init(arg0: Info): number;
    synthesis_pcmout(arg0: number[][][], arg1: number[]): number;
    synthesis_read(arg0: number): number;
}
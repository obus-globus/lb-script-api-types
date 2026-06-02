import type { Buffer } from '../../../com/jcraft/jogg/Buffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class StaticCodeBook extends Object {
    constructor()
    // private dim: number;
    // private entries: number;
    // private lengthlist: number[];
    // private maptype: number;
    // private q_delta: number;
    // private q_min: number;
    // private q_quant: number;
    // private q_sequencep: number;
    // private quantlist: number[];
    clear(): void;
    // private maptype1_quantvals(): number;
    pack(arg0: Buffer): number;
    unpack(arg0: Buffer): number;
    unquantize(): number[];
}
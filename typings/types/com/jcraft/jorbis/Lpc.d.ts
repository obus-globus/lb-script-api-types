import type { Drft } from '../../../com/jcraft/jorbis/Drft.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class Lpc extends Object {
    constructor()
    // private fft: Drft;
    // private ln: number;
    // private m: number;
    clear(): void;
    init(arg0: number, arg1: number): void;
    lpc_from_curve(arg0: number[], arg1: number[]): number;
    lpc_to_curve(arg0: number[], arg1: number[], arg2: number): void;
}
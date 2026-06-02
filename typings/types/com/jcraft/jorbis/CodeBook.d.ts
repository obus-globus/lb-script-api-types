import type { Buffer } from '../../../com/jcraft/jogg/Buffer.d.ts'
import type { CodeBook$DecodeAux } from '../../../com/jcraft/jorbis/CodeBook$DecodeAux.d.ts'
import type { StaticCodeBook } from '../../../com/jcraft/jorbis/StaticCodeBook.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class CodeBook extends Object {
    constructor()
    // private c: StaticCodeBook;
    // private codelist: number[];
    // private decode_tree: CodeBook$DecodeAux;
    // private dim: number;
    // private entries: number;
    // private t: number[];
    // private valuelist: number[];
    best(arg0: number[], arg1: number): number;
    besterror(arg0: number[], arg1: number, arg2: number): number;
    clear(): void;
    decode(arg0: Buffer): number;
    decodev_add(arg0: number[], arg1: number, arg2: Buffer, arg3: number): number;
    decodev_set(arg0: number[], arg1: number, arg2: Buffer, arg3: number): number;
    decodevs(arg0: number[], arg1: number, arg2: Buffer, arg3: number, arg4: number): number;
    decodevs_add(arg0: number[], arg1: number, arg2: Buffer, arg3: number): number;
    decodevv_add(arg0: number[][], arg1: number, arg2: number, arg3: Buffer, arg4: number): number;
    encode(arg0: number, arg1: Buffer): number;
    encodev(arg0: number, arg1: number[], arg2: Buffer): number;
    encodevs(arg0: number[], arg1: Buffer, arg2: number, arg3: number): number;
    errorv(arg0: number[]): number;
    init_decode(arg0: StaticCodeBook): number;
    make_decode_tree(): CodeBook$DecodeAux;
}
import type { Object } from '../../../java/lang/Object.d.ts'
export class Huffman$Node extends Object {
    constructor()
    constructor(symbol: number, bits: number)
    readonly children: (Huffman$Node | null)[] | null;
    readonly symbol: number;
    readonly terminalBitCount: number;
}
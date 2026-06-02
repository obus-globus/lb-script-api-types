import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
export class Bzip2Decoder$State extends Enum<Bzip2Decoder$State> {
    static DECODE_HUFFMAN_DATA: Bzip2Decoder$State;
    static EOF: Bzip2Decoder$State;
    static INIT: Bzip2Decoder$State;
    static INIT_BLOCK: Bzip2Decoder$State;
    static INIT_BLOCK_PARAMS: Bzip2Decoder$State;
    static RECEIVE_HUFFMAN_LENGTH: Bzip2Decoder$State;
    static RECEIVE_HUFFMAN_USED_BITMAPS: Bzip2Decoder$State;
    static RECEIVE_HUFFMAN_USED_MAP: Bzip2Decoder$State;
    static RECEIVE_SELECTORS: Bzip2Decoder$State;
    static RECEIVE_SELECTORS_NUMBER: Bzip2Decoder$State;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): Bzip2Decoder$State;
    static values(): (Object | null)[];
    private constructor()
    name(): "INIT" | "INIT_BLOCK" | "INIT_BLOCK_PARAMS" | "RECEIVE_HUFFMAN_USED_MAP" | "RECEIVE_HUFFMAN_USED_BITMAPS" | "RECEIVE_SELECTORS_NUMBER" | "RECEIVE_SELECTORS" | "RECEIVE_HUFFMAN_LENGTH" | "DECODE_HUFFMAN_DATA" | "EOF";
}
import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../java/lang/Enum.d.ts'
export class LZ77Compressor$Block$BlockType extends Enum<LZ77Compressor$Block$BlockType> {
    static BACK_REFERENCE: LZ77Compressor$Block$BlockType;
    static EOD: LZ77Compressor$Block$BlockType;
    static LITERAL: LZ77Compressor$Block$BlockType;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): LZ77Compressor$Block$BlockType;
    static values(): LZ77Compressor$Block$BlockType[];
    private constructor()
    name(): "LITERAL" | "BACK_REFERENCE" | "EOD";
}
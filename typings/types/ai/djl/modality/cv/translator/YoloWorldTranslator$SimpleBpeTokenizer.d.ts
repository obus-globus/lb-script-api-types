import type { JavaMap } from '../../../../../JavaMap.d.ts'
import type { Pair } from '../../../../../ai/djl/util/Pair.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class YoloWorldTranslator$SimpleBpeTokenizer extends Object {
    constructor(arg0: JavaMap<string, number>, arg1: JavaMap<Pair<string, string>, number>)
    // private eot: number;
    // private ranks: JavaMap<Pair<string, string>, number>;
    // private sot: number;
    // private vocabulary: JavaMap<string, number>;
    batchEncode(arg0: string[]): number[][];
    // private bpe(arg0: string): string;
    encode(arg0: string): number[];
    // private getPairs(arg0: string[]): Pair<string, string>[];
}
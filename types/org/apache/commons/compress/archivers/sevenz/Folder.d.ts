import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { BindPair } from '../../../../../../org/apache/commons/compress/archivers/sevenz/BindPair.d.ts'
import type { Coder } from '../../../../../../org/apache/commons/compress/archivers/sevenz/Coder.d.ts'
export class Folder extends Object {
    constructor()
    // private bindPairs: BindPair[];
    // private coders: Coder[];
    // private crc: number;
    // private hasCrc: boolean;
    // private numUnpackSubStreams: number;
    // private packedStreams: number[];
    // private totalInputStreams: number;
    // private totalOutputStreams: number;
    // private unpackSizes: number[];
    findBindPairForInStream(arg0: number): number;
    findBindPairForOutStream(arg0: number): number;
    getOrderedCoders(): Coder[];
    getUnpackSize(): number;
    getUnpackSizeForCoder(arg0: Coder): number;
    toString(): string;
}
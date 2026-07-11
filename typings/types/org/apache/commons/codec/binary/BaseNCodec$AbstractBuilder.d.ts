import type { Supplier } from '../../../../../java/util/function/Supplier.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { CodecPolicy } from '../../../../../org/apache/commons/codec/CodecPolicy.d.ts'
export abstract class BaseNCodec$AbstractBuilder<T extends unknown, B extends BaseNCodec$AbstractBuilder<T, B>> extends Object implements Supplier<T> {
    constructor(arg0: number[])
    // private decodeTable: number[];
    // private decodingPolicy: CodecPolicy;
    // private defaultEncodeTable: number[];
    // private encodeTable: number[];
    // private encodedBlockSize: number;
    // private lineLength: number;
    // private lineSeparator: number[];
    // private padding: number;
    // private unencodedBlockSize: number;
    asThis(): B;
    getDecodeTable(): number[];
    getDecodingPolicy(): CodecPolicy;
    getEncodeTable(): number[];
    getEncodedBlockSize(): number;
    getLineLength(): number;
    getLineSeparator(): number[];
    getPadding(): number;
    getUnencodedBlockSize(): number;
    setDecodeTable(arg0: number[]): B;
    setDecodeTableRaw(arg0: number[]): B;
    setDecodingPolicy(arg0: CodecPolicy): B;
    setEncodeTable(...arg0: number[]): B;
    setEncodeTableRaw(...arg0: number[]): B;
    setEncodedBlockSize(arg0: number): B;
    setLineLength(arg0: number): B;
    setLineSeparator(...arg0: number[]): B;
    setPadding(arg0: number): B;
    setUnencodedBlockSize(arg0: number): B;
}
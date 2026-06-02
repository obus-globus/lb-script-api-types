import type { BytesTrie$Entry } from '../../../../com/ibm/icu/util/BytesTrie$Entry.d.ts'
import type { StringTrieBuilder } from '../../../../com/ibm/icu/util/StringTrieBuilder.d.ts'
import type { StringTrieBuilder$Option } from '../../../../com/ibm/icu/util/StringTrieBuilder$Option.d.ts'
import type { ByteBuffer } from '../../../../java/nio/ByteBuffer.d.ts'
export class BytesTrieBuilder extends StringTrieBuilder {
    static internalEncodeDelta(paramarg0: number, paramarg1: number[]): number;
    constructor()
    // private bytes: number[];
    // private bytesLength: number;
    // private intBytes: number[];
    add(arg0: number[], arg1: number, arg2: number): BytesTrieBuilder;
    build(arg0: StringTrieBuilder$Option): BytesTrie$Entry[];
    buildByteBuffer(arg0: StringTrieBuilder$Option): ByteBuffer;
    // private buildBytes(arg0: StringTrieBuilder$Option): void;
    clear(): BytesTrieBuilder;
    // private ensureCapacity(arg0: number): void;
    getMaxBranchLinearSubNodeLength(): number;
    getMaxLinearMatchLength(): number;
    getMinLinearMatch(): number;
    matchNodesCanHaveValues(): boolean;
    // private write(arg0: number[], arg1: number): number;
    write(arg0: number): number;
    write(arg0: number, arg1: number): number;
    writeDeltaTo(arg0: number): number;
    writeValueAndFinal(arg0: number, arg1: boolean): number;
    writeValueAndType(arg0: boolean, arg1: number, arg2: number): number;
}
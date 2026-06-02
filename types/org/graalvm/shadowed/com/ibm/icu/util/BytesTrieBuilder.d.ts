import type { ByteBuffer } from '../../../../../../../java/nio/ByteBuffer.d.ts'
import type { BytesTrie$Entry } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/util/BytesTrie$Entry.d.ts'
import type { StringTrieBuilder } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/util/StringTrieBuilder.d.ts'
import type { StringTrieBuilder$Option } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/util/StringTrieBuilder$Option.d.ts'
export class BytesTrieBuilder extends StringTrieBuilder {
    static internalEncodeDelta(parami: number, paramintBytes: number[]): number;
    constructor()
    // private bytes: number[];
    // private bytesLength: number;
    // private intBytes: number[];
    add(sequence: number[], length: number, value: number): BytesTrieBuilder;
    build(buildOption: StringTrieBuilder$Option): BytesTrie$Entry[];
    buildByteBuffer(buildOption: StringTrieBuilder$Option): ByteBuffer;
    // private buildBytes(buildOption: StringTrieBuilder$Option): void;
    clear(): BytesTrieBuilder;
    // private ensureCapacity(length: number): void;
    getMaxBranchLinearSubNodeLength(): number;
    getMaxLinearMatchLength(): number;
    getMinLinearMatch(): number;
    matchNodesCanHaveValues(): boolean;
    // private write(b: number[], length: number): number;
    write(b: number): number;
    write(offset: number, length: number): number;
    writeDeltaTo(jumpTarget: number): number;
    writeValueAndFinal(i: number, isFinal: boolean): number;
    writeValueAndType(hasValue: boolean, value: number, node: number): number;
}
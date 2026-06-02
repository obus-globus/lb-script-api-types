import type { ByteBuffer } from '../../../../../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export class UBiDiProps extends Object {
    static INSTANCE: UBiDiProps;
    private constructor()
    // private indexes: number[];
    // private jgArray: number[];
    // private jgArray2: number[];
    // private mirrors: number[];
    // private trie: (Object | null)[];
    addPropertyStarts(set: string[]): void;
    getClass(c: number): number;
    getJoiningGroup(c: number): number;
    getJoiningType(c: number): number;
    getMaxValue(which: number): number;
    getMirror(c: number): number;
    // private getMirror(c: number, props: number): number;
    getPairedBracket(c: number): number;
    getPairedBracketType(c: number): number;
    isBidiControl(c: number): boolean;
    isJoinControl(c: number): boolean;
    isMirrored(c: number): boolean;
    // private readData(bytes: ByteBuffer): void;
}
import type { ByteBuffer } from '../../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class UBiDiProps extends Object {
    static INSTANCE: UBiDiProps;
    private constructor()
    // private indexes: number[];
    // private jgArray: number[];
    // private jgArray2: number[];
    // private mirrors: number[];
    // private trie: (Object | null)[];
    addPropertyStarts(arg0: string[]): void;
    getClass(arg0: number): number;
    getJoiningGroup(arg0: number): number;
    getJoiningType(arg0: number): number;
    getMaxValue(arg0: number): number;
    getMirror(arg0: number): number;
    // private getMirror(arg0: number, arg1: number): number;
    getPairedBracket(arg0: number): number;
    getPairedBracketType(arg0: number): number;
    isBidiControl(arg0: number): boolean;
    isJoinControl(arg0: number): boolean;
    isMirrored(arg0: number): boolean;
    // private readData(arg0: ByteBuffer): void;
}
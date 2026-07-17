import type { AbstractPublicNode } from '../../../../../com/oracle/truffle/api/strings/AbstractPublicNode.d.ts'
import type { AbstractTruffleString } from '../../../../../com/oracle/truffle/api/strings/AbstractTruffleString.d.ts'
import type { TruffleString$CodePointSet } from '../../../../../com/oracle/truffle/api/strings/TruffleString$CodePointSet.d.ts'
export abstract class TruffleString$ByteIndexOfCodePointSetNode extends AbstractPublicNode {
    static create(): TruffleString$ByteIndexOfCodePointSetNode;
    static getUncached(): TruffleString$ByteIndexOfCodePointSetNode;
    constructor()
    execute(a: AbstractTruffleString, fromByteIndex: number, toByteIndex: number, codePointSet: TruffleString$CodePointSet): number;
    execute(a: AbstractTruffleString, fromByteIndex: number, toByteIndex: number, codePointSet: TruffleString$CodePointSet, usePreciseCodeRange: boolean): number;
}
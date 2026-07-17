import type { JavaMap } from '../../../../../JavaMap.d.ts'
import type { TruffleString } from '../../../../../com/oracle/truffle/api/strings/TruffleString.d.ts'
import type { AbstractConstantKeysObject } from '../../../../../com/oracle/truffle/regex/AbstractConstantKeysObject.d.ts'
import type { AbstractRegexObject } from '../../../../../com/oracle/truffle/regex/AbstractRegexObject.d.ts'
import type { TruffleReadOnlyKeysArray } from '../../../../../com/oracle/truffle/regex/util/TruffleReadOnlyKeysArray.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class InputStringGenerator$InputString extends AbstractConstantKeysObject {
    static createNamedCaptureGroupMapInt(paramnamedCaptureGroups: JavaMap<string, number[]>): AbstractRegexObject;
    static createNamedCaptureGroupMapListInt(paramnamedCaptureGroups: JavaMap<string, number[]>): AbstractRegexObject;
    constructor(input: TruffleString, fromIndex: number, matchStart: number)
    // private fromIndex: number;
    // private input: TruffleString;
    // private matchStart: number;
    fromIndex(): number;
    getKeys(): TruffleReadOnlyKeysArray;
    input(): TruffleString;
    isMemberReadableImpl(symbol: string): boolean;
    matchStart(): number;
    readMemberImpl(symbol: string): Object;
}
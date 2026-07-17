import type { JavaMap } from '../../../../../JavaMap.d.ts'
import type { CallTarget } from '../../../../../com/oracle/truffle/api/CallTarget.d.ts'
import type { TruffleString } from '../../../../../com/oracle/truffle/api/strings/TruffleString.d.ts'
import type { AbstractConstantKeysObject } from '../../../../../com/oracle/truffle/regex/AbstractConstantKeysObject.d.ts'
import type { AbstractRegexObject } from '../../../../../com/oracle/truffle/regex/AbstractRegexObject.d.ts'
import type { RegexResult$InvokeCacheNode } from '../../../../../com/oracle/truffle/regex/result/RegexResult$InvokeCacheNode.d.ts'
import type { ToIntNode } from '../../../../../com/oracle/truffle/regex/runtime/nodes/ToIntNode.d.ts'
import type { TruffleReadOnlyKeysArray } from '../../../../../com/oracle/truffle/regex/util/TruffleReadOnlyKeysArray.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class RegexResult extends AbstractConstantKeysObject {
    static create(paramstart: number, paramend: number): RegexResult;
    static create(paramresult: number[]): RegexResult;
    static createFromExecutorResult(paramexecutorResult: Object): RegexResult;
    static createLazy(paraminput: TruffleString, paramfromIndex: number, paramregionFrom: number, paramregionTo: number, paramstart: number, paramend: number, paramlazyCallTarget: CallTarget): RegexResult;
    static createNamedCaptureGroupMapInt(paramnamedCaptureGroups: JavaMap<string, number[]>): AbstractRegexObject;
    static createNamedCaptureGroupMapListInt(paramnamedCaptureGroups: JavaMap<string, number[]>): AbstractRegexObject;
    static getBooleanMatchInstance(): RegexResult;
    static getNoMatchInstance(): RegexResult;
    constructor(input: TruffleString, fromIndex: number, regionFrom: number, regionTo: number, start: number, end: number, result: number[], lazyCallTarget: CallTarget)
    readonly end: number;
    readonly fromIndex: number;
    readonly input: TruffleString;
    // private lazyCallTarget: CallTarget;
    readonly regionFrom: number;
    readonly regionTo: number;
    readonly result: number[];
    readonly start: number;
    debugForceEvaluation(): void;
    getEnd(): number;
    getEnd(groupNumber: number): number;
    getFromIndex(): number;
    getInput(): TruffleString;
    getKeys(): TruffleReadOnlyKeysArray;
    getLastGroup(): number;
    getMembers(includeInternal: boolean): Object;
    getRegionFrom(): number;
    getRegionTo(): number;
    getStart(): number;
    getStart(groupNumber: number): number;
    invokeMember(member: string, args: Object[], toIntNode: ToIntNode, invokeCache: RegexResult$InvokeCacheNode): Object;
    isMemberReadableImpl(symbol: string): boolean;
    readMemberImpl(symbol: string): Object;
    setResult(result: number[]): void;
    toDisplayString(allowSideEffects: boolean): Object;
    toString(): string;
}
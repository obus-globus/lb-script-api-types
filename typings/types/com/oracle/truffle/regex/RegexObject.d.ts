import type { JavaMap } from '../../../../JavaMap.d.ts'
import type { CallTarget } from '../../../../com/oracle/truffle/api/CallTarget.d.ts'
import type { RootCallTarget } from '../../../../com/oracle/truffle/api/RootCallTarget.d.ts'
import type { TruffleObject } from '../../../../com/oracle/truffle/api/interop/TruffleObject.d.ts'
import type { AbstractConstantKeysObject } from '../../../../com/oracle/truffle/regex/AbstractConstantKeysObject.d.ts'
import type { AbstractRegexObject } from '../../../../com/oracle/truffle/regex/AbstractRegexObject.d.ts'
import type { RegexExecNode } from '../../../../com/oracle/truffle/regex/RegexExecNode.d.ts'
import type { RegexLanguage } from '../../../../com/oracle/truffle/regex/RegexLanguage.d.ts'
import type { RegexObject$InvokeCacheNode } from '../../../../com/oracle/truffle/regex/RegexObject$InvokeCacheNode.d.ts'
import type { RegexObject$RegexObjectExecBooleanMethod } from '../../../../com/oracle/truffle/regex/RegexObject$RegexObjectExecBooleanMethod.d.ts'
import type { RegexObject$RegexObjectExecMethod } from '../../../../com/oracle/truffle/regex/RegexObject$RegexObjectExecMethod.d.ts'
import type { RegexSource } from '../../../../com/oracle/truffle/regex/RegexSource.d.ts'
import type { TruffleReadOnlyKeysArray } from '../../../../com/oracle/truffle/regex/util/TruffleReadOnlyKeysArray.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class RegexObject extends AbstractConstantKeysObject {
    static createNamedCaptureGroupMapInt(paramnamedCaptureGroups: JavaMap<string, number[]>): AbstractRegexObject;
    static createNamedCaptureGroupMapListInt(paramnamedCaptureGroups: JavaMap<string, number[]>): AbstractRegexObject;
    constructor(execNode: RegexExecNode, source: RegexSource, flags: AbstractRegexObject, numberOfCaptureGroups: number, namedCaptureGroups: AbstractRegexObject)
    readonly backtracking: boolean;
    // private execBooleanRootCallTarget: RootCallTarget;
    // private execRootCallTarget: RootCallTarget;
    readonly flags: AbstractRegexObject;
    readonly language: RegexLanguage;
    readonly namedCaptureGroups: AbstractRegexObject;
    readonly numberOfCaptureGroups: number;
    readonly source: RegexSource;
    getExecBooleanCallTarget(): CallTarget;
    getExecBooleanMethod(): RegexObject$RegexObjectExecBooleanMethod;
    getExecCallTarget(): CallTarget;
    getExecMethod(): RegexObject$RegexObjectExecMethod;
    getFlags(): TruffleObject;
    getKeys(): TruffleReadOnlyKeysArray;
    getLabel(): string;
    getNamedCaptureGroups(): TruffleObject;
    getNumberOfCaptureGroups(): number;
    getSource(): RegexSource;
    invokeMember(member: string, args: Object[], invokeCache: RegexObject$InvokeCacheNode): Object;
    isBacktracking(): boolean;
    isMemberReadableImpl(symbol: string): boolean;
    readMemberImpl(symbol: string): Object;
    toString(): string;
}
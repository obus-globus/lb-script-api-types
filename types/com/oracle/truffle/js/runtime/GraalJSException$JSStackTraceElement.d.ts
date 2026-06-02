import type { SourceSection } from '../../../../../com/oracle/truffle/api/source/SourceSection.d.ts'
import type { TruffleString } from '../../../../../com/oracle/truffle/api/strings/TruffleString.d.ts'
import type { JSContext } from '../../../../../com/oracle/truffle/js/runtime/JSContext.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class GraalJSException$JSStackTraceElement extends Object {
    private constructor(fileName: TruffleString, functionName: TruffleString, sourceSection: SourceSection, thisObj: Object, functionObj: Object, targetSourceSection: SourceSection, strict: boolean, eval: boolean, global: boolean, inNashornMode: boolean, async: boolean, hasPath: boolean, promiseIndex: number)
    readonly async: boolean;
    readonly eval: boolean;
    readonly fileName: TruffleString;
    readonly functionName: TruffleString;
    // private functionObj: Object;
    // private global: boolean;
    // private hasPath: boolean;
    // private inNashornMode: boolean;
    readonly promiseIndex: number;
    // private sourceSection: SourceSection;
    readonly strict: boolean;
    // private targetSourceSection: SourceSection;
    // private thisObj: Object;
    getCharLength(): number;
    getClassName(): TruffleString;
    getColumnNumber(): number;
    getEvalOrigin(): TruffleString;
    getFileName(): TruffleString;
    getFileNameForStackTrace(context: JSContext): TruffleString;
    getFunction(): Object;
    getFunctionName(): TruffleString;
    getLine(): TruffleString;
    getLineNumber(): number;
    getMethodName(): string;
    getMethodName(context: JSContext): TruffleString;
    getPosition(): number;
    getPromiseIndex(): number;
    getThis(): Object;
    getThisOrGlobal(): Object;
    getTypeName(): TruffleString;
    getTypeName(checkGlobal: boolean): TruffleString;
    hasPath(): boolean;
    isAsync(): boolean;
    isConstructor(): boolean;
    isEval(): boolean;
    isPromiseAll(): boolean;
    isStrict(): boolean;
    toString(): string;
    toString(context: JSContext): TruffleString;
}
import type { TruffleLanguage } from '../../../../../com/oracle/truffle/api/TruffleLanguage.d.ts'
import type { AbstractTruffleException } from '../../../../../com/oracle/truffle/api/exception/AbstractTruffleException.d.ts'
import type { InteropLibrary } from '../../../../../com/oracle/truffle/api/interop/InteropLibrary.d.ts'
import type { Node } from '../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { SourceSection } from '../../../../../com/oracle/truffle/api/source/SourceSection.d.ts'
import type { GraalJSException$JSStackTraceElement } from '../../../../../com/oracle/truffle/js/runtime/GraalJSException$JSStackTraceElement.d.ts'
import type { JSDynamicObject } from '../../../../../com/oracle/truffle/js/runtime/objects/JSDynamicObject.d.ts'
import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Throwable } from '../../../../../java/lang/Throwable.d.ts'
export abstract class GraalJSException extends AbstractTruffleException {
    static UNLIMITED_STACK_TRACE: number;
    static getJSStackTrace(paramoriginatingNode: Node): (Object | null)[];
    static getJSStackTrace(paramoriginatingNode: Node, paramstackTraceLimit: number): (Object | null)[];
    static printJSStackTrace(paramoriginatingNode: Node): void;
    constructor(message: string, node: Node, stackTraceLimit: number)
    constructor(message: string, cause: Throwable, node: Node, stackTraceLimit: number)
    constructor(message: string, cause: Throwable, location: SourceSection, stackTraceLimit: number)
    // private jsStackTrace: GraalJSException$JSStackTraceElement[];
    readonly location: Object;
    // private stackTraceLimit: number;
    fillInStackTrace(capture: boolean, skipFramesUpTo: JSDynamicObject, customSkip: boolean): GraalJSException;
    getErrorObject(): Object;
    getErrorObjectLazy(): Object;
    getJSStackTrace(): GraalJSException$JSStackTraceElement[];
    // private getJSStackTrace(skipUpTo: JSDynamicObject, customSkip: boolean): GraalJSException$JSStackTraceElement[];
    getLanguage(): Class<TruffleLanguage<Object>>;
    getSourceLocationInterop(): SourceSection;
    hasLanguage(): boolean;
    hasSourceLocation(): boolean;
    identityHashCode(thisLib: InteropLibrary): number;
    // private materializeJSStackTrace(): GraalJSException$JSStackTraceElement[];
    printJSStackTrace(): void;
    setJSStackTrace(jsStackTrace: GraalJSException$JSStackTraceElement[]): void;
    toDisplayString(allowSideEffects: boolean): Object;
}
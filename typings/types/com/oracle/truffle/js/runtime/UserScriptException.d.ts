import type { ExceptionType } from '../../../../../com/oracle/truffle/api/interop/ExceptionType.d.ts'
import type { Node } from '../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { GraalJSException } from '../../../../../com/oracle/truffle/js/runtime/GraalJSException.d.ts'
import type { GraalJSException$JSStackTraceElement } from '../../../../../com/oracle/truffle/js/runtime/GraalJSException$JSStackTraceElement.d.ts'
import type { JSDynamicObject } from '../../../../../com/oracle/truffle/js/runtime/objects/JSDynamicObject.d.ts'
import type { RuntimeException } from '../../../../../java/lang/RuntimeException.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Throwable } from '../../../../../java/lang/Throwable.d.ts'
export class UserScriptException extends GraalJSException {
    static UNLIMITED_STACK_TRACE: number;
    static create(paramexceptionObject: Object): UserScriptException;
    static create(paramexceptionObject: Object, paramoriginatingNode: Node, paramstackTraceLimit: number): UserScriptException;
    static createCapture(paramexceptionObject: Object, paramoriginatingNode: Node, paramstackTraceLimit: number): UserScriptException;
    static createCapture(paramexceptionObject: Object, paramoriginatingNode: Node, paramstackTraceLimit: number, paramskipFramesUpTo: JSDynamicObject, paramcustomSkip: boolean): UserScriptException;
    static getJSStackTrace(paramoriginatingNode: Node): GraalJSException$JSStackTraceElement[];
    static getJSStackTrace(paramoriginatingNode: Node, paramstackTraceLimit: number): GraalJSException$JSStackTraceElement[];
    static printJSStackTrace(paramoriginatingNode: Node): void;
    private constructor(exceptionObject: Object, originatingNode: Node, stackTraceLimit: number)
    private constructor(exception: Throwable, originatingNode: Node, stackTraceLimit: number)
    // private exceptionObject: Object;
    getErrorObject(): Object;
    getErrorObjectLazy(): Object;
    getExceptionMessage(): Object;
    getExceptionType(): ExceptionType;
    hasExceptionMessage(): boolean;
    isException(): boolean;
    isExceptionIncompleteSource(): boolean;
    throwException(): RuntimeException;
}
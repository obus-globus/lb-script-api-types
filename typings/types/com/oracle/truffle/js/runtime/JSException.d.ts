import type { ExceptionType } from '../../../../../com/oracle/truffle/api/interop/ExceptionType.d.ts'
import type { InteropLibrary } from '../../../../../com/oracle/truffle/api/interop/InteropLibrary.d.ts'
import type { Node } from '../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { SourceSection } from '../../../../../com/oracle/truffle/api/source/SourceSection.d.ts'
import type { GraalJSException } from '../../../../../com/oracle/truffle/js/runtime/GraalJSException.d.ts'
import type { GraalJSException$JSStackTraceElement } from '../../../../../com/oracle/truffle/js/runtime/GraalJSException$JSStackTraceElement.d.ts'
import type { JSErrorType } from '../../../../../com/oracle/truffle/js/runtime/JSErrorType.d.ts'
import type { JSRealm } from '../../../../../com/oracle/truffle/js/runtime/JSRealm.d.ts'
import type { JSDynamicObject } from '../../../../../com/oracle/truffle/js/runtime/objects/JSDynamicObject.d.ts'
import type { JSObject } from '../../../../../com/oracle/truffle/js/runtime/objects/JSObject.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Throwable } from '../../../../../java/lang/Throwable.d.ts'
export class JSException extends GraalJSException {
    static UNLIMITED_STACK_TRACE: number;
    static create(paramtype: JSErrorType, parammessage: string): JSException;
    static create(paramtype: JSErrorType, parammessage: string, paramoriginatingNode: Node): JSException;
    static create(paramtype: JSErrorType, parammessage: string, paramoriginatingNode: Node, paramexceptionObj: JSObject, paramrealm: JSRealm): JSException;
    static create(paramtype: JSErrorType, parammessage: string, paramsourceLocation: SourceSection, paramisIncompleteSource: boolean): JSException;
    static create(paramtype: JSErrorType, parammessage: string, paramexceptionObj: JSObject, paramrealm: JSRealm): JSException;
    static create(paramtype: JSErrorType, parammessage: string, paramcause: Throwable, paramoriginatingNode: Node): JSException;
    static create(paramtype: JSErrorType, parammessage: string, paramcause: Throwable, paramsourceLocation: SourceSection, paramisIncompleteSource: boolean): JSException;
    static createCapture(paramtype: JSErrorType, parammessage: string, paramexceptionObj: JSObject, paramrealm: JSRealm): JSException;
    static createCapture(paramtype: JSErrorType, parammessage: string, paramexceptionObj: JSObject, paramrealm: JSRealm, paramstackTraceLimit: number, paramskipFramesUpTo: JSDynamicObject, paramcustomSkip: boolean): JSException;
    static ensureInitialized(): void;
    static getJSStackTrace(paramoriginatingNode: Node): GraalJSException$JSStackTraceElement[];
    static getJSStackTrace(paramoriginatingNode: Node, paramstackTraceLimit: number): GraalJSException$JSStackTraceElement[];
    static getStackTraceLimit(paramrealm: JSRealm): number;
    static printJSStackTrace(paramoriginatingNode: Node): void;
    private constructor(type: JSErrorType, message: string, originatingNode: Node, exceptionObj: JSObject, realm: JSRealm, stackTraceLimit: number)
    private constructor(type: JSErrorType, message: string, sourceLocation: SourceSection, realm: JSRealm, stackTraceLimit: number, isIncompleteSource: boolean)
    private constructor(type: JSErrorType, message: string, cause: Throwable, originatingNode: Node, realm: JSRealm, stackTraceLimit: number)
    private constructor(type: JSErrorType, message: string, cause: Throwable, sourceLocation: SourceSection, realm: JSRealm, stackTraceLimit: number, isIncompleteSource: boolean)
    // private exceptionObj: JSObject;
    // private isIncompleteSource: boolean;
    readonly message: string | null;
    readonly realm: JSRealm;
    // private type: JSErrorType;
    getErrorObject(): Object;
    getErrorObjectLazy(): JSObject;
    getErrorType(): JSErrorType;
    getExceptionType(): ExceptionType;
    getMembers(internal: boolean, delegateLib: InteropLibrary): Object;
    getMetaObject(delegateLib: InteropLibrary): Object;
    getRawMessage(): string;
    getRealm(): JSRealm;
    hasMemberReadSideEffects(key: string, delegateLib: InteropLibrary): boolean;
    hasMemberWriteSideEffects(key: string, delegateLib: InteropLibrary): boolean;
    hasMembers(): boolean;
    hasMetaObject(delegateLib: InteropLibrary): boolean;
    invokeMember(key: string, args: Object[], delegateLib: InteropLibrary): Object;
    isExceptionIncompleteSource(): boolean;
    isMemberInsertable(key: string, delegateLib: InteropLibrary): boolean;
    isMemberInvocable(key: string, delegateLib: InteropLibrary): boolean;
    isMemberModifiable(key: string, delegateLib: InteropLibrary): boolean;
    isMemberReadable(key: string, delegateLib: InteropLibrary): boolean;
    isMemberRemovable(key: string, delegateLib: InteropLibrary): boolean;
    readMember(key: string, delegateLib: InteropLibrary): Object;
    removeMember(key: string, delegateLib: InteropLibrary): void;
    setErrorObject(exceptionObj: JSObject): void;
    writeMember(key: string, value: Object, delegateLib: InteropLibrary): void;
}
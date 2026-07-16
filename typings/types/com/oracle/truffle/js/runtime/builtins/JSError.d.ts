import type { HiddenKey } from '../../../../../../com/oracle/truffle/api/object/HiddenKey.d.ts'
import type { Property } from '../../../../../../com/oracle/truffle/api/object/Property.d.ts'
import type { Shape } from '../../../../../../com/oracle/truffle/api/object/Shape.d.ts'
import type { TruffleString } from '../../../../../../com/oracle/truffle/api/strings/TruffleString.d.ts'
import type { GraalJSException } from '../../../../../../com/oracle/truffle/js/runtime/GraalJSException.d.ts'
import type { GraalJSException$JSStackTraceElement } from '../../../../../../com/oracle/truffle/js/runtime/GraalJSException$JSStackTraceElement.d.ts'
import type { JSContext } from '../../../../../../com/oracle/truffle/js/runtime/JSContext.d.ts'
import type { JSErrorType } from '../../../../../../com/oracle/truffle/js/runtime/JSErrorType.d.ts'
import type { JSException } from '../../../../../../com/oracle/truffle/js/runtime/JSException.d.ts'
import type { JSRealm } from '../../../../../../com/oracle/truffle/js/runtime/JSRealm.d.ts'
import type { JSClass } from '../../../../../../com/oracle/truffle/js/runtime/builtins/JSClass.d.ts'
import type { JSConstructor } from '../../../../../../com/oracle/truffle/js/runtime/builtins/JSConstructor.d.ts'
import type { JSErrorObject } from '../../../../../../com/oracle/truffle/js/runtime/builtins/JSErrorObject.d.ts'
import type { JSNonProxy } from '../../../../../../com/oracle/truffle/js/runtime/builtins/JSNonProxy.d.ts'
import type { JSDynamicObject } from '../../../../../../com/oracle/truffle/js/runtime/objects/JSDynamicObject.d.ts'
import type { JSObject } from '../../../../../../com/oracle/truffle/js/runtime/objects/JSObject.d.ts'
import type { PropertyDescriptor } from '../../../../../../com/oracle/truffle/js/runtime/objects/PropertyDescriptor.d.ts'
import type { PropertyProxy } from '../../../../../../com/oracle/truffle/js/runtime/objects/PropertyProxy.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class JSError extends JSNonProxy {
    static ANONYMOUS_FUNCTION_NAME: TruffleString;
    static ANONYMOUS_FUNCTION_NAME_NASHORN: TruffleString;
    static CALL_SITE_PROTOTYPE_NAME: TruffleString;
    static CLASS_NAME: TruffleString;
    static COLUMN_NUMBER_PROPERTY_NAME: TruffleString;
    static DEFAULT_COLUMN_NUMBER: number;
    static ERRORS_ATTRIBUTES: number;
    static ERRORS_NAME: TruffleString;
    static EXCEPTION_PROPERTY_NAME: HiddenKey;
    static FORMATTED_STACK_NAME: HiddenKey;
    static GET_SYMBOL_SPECIES_NAME: TruffleString;
    static INSTANCE: JSError;
    static LINE_NUMBER_PROPERTY_NAME: TruffleString;
    static MESSAGE: TruffleString;
    static MESSAGE_ATTRIBUTES: number;
    static NAME: TruffleString;
    static PREPARE_STACK_TRACE_NAME: TruffleString;
    static PROTOTYPE_NAME: TruffleString;
    static SPACES_AT: TruffleString;
    static STACK_NAME: TruffleString;
    static STACK_PROXY: PropertyProxy;
    static STACK_TRACE_ELEMENT_PROPERTY_NAME: HiddenKey;
    static STACK_TRACE_LIMIT_PROPERTY_NAME: TruffleString;
    static TAB_AT: TruffleString;
    static checkProtoCycle(paramthisObj: JSDynamicObject, paramnewPrototype: JSDynamicObject): boolean;
    static correctMethodName(parammethodName: TruffleString, paramcontext: JSContext): TruffleString;
    static create(paramerrorType: JSErrorType, paramrealm: JSRealm, parammessage: Object): JSErrorObject;
    static createCallSiteConstructor(paramrealm: JSRealm): JSConstructor;
    static createErrorConstructor(paramrealm: JSRealm, paramerrorType: JSErrorType): JSConstructor;
    static createErrorObject(paramcontext: JSContext, paramrealm: JSRealm, paramerrorType: JSErrorType): JSErrorObject;
    static createErrorObject(paramcontext: JSContext, paramrealm: JSRealm, paramerrorType: JSErrorType, paramproto: JSDynamicObject): JSErrorObject;
    static createForeignErrorPrototype(paramrealm: JSRealm): JSObject;
    static createFromJSException(paramexception: JSException, paramrealm: JSRealm, parammessage: string): JSErrorObject;
    static filterOwnPropertyKeys(paramownPropertyKeys: Object[], paramstrings: boolean, paramsymbols: boolean): Object[];
    static getAnonymousFunctionNameStackTrace(paramcontext: JSContext): TruffleString;
    static getException(paramerrorObj: JSErrorObject): GraalJSException;
    static getException(paramerrorObj: JSObject): GraalJSException;
    static isInstance(paramobject: JSDynamicObject, paramjsclass: JSClass): boolean;
    static isInstance(paramobject: Object, paramjsclass: JSClass): boolean;
    static isJSError(paramobj: Object): boolean;
    static makeInitialCallSiteShape(paramcontext: JSContext, paramcallSitePrototype: JSDynamicObject): Shape;
    static ordinaryGetOwnProperty(paramthisObj: JSDynamicObject, paramkey: Object): PropertyDescriptor;
    static ordinaryGetOwnPropertyIntl(paramthisObj: JSDynamicObject, paramkey: Object, paramprop: Property): PropertyDescriptor;
    static ordinaryIsExtensible(paramthisObj: JSDynamicObject): boolean;
    static ordinaryOwnPropertyKeys(paramthisObj: JSDynamicObject): Object[];
    static ordinaryPreventExtensions(paramthisObj: JSDynamicObject, paramextraFlags: number): boolean;
    static prepareStack(paramrealm: JSRealm, paramerrorObj: JSDynamicObject, paramexception: GraalJSException): Object;
    static prepareStackNoCallback(paramrealm: JSRealm, paramerrorObj: JSDynamicObject, paramjsStackTrace: GraalJSException$JSStackTraceElement[]): Object;
    static setColumnNumber(paramcontext: JSContext, paramerrorObj: JSDynamicObject, paramcolumnNumber: Object): void;
    static setException(paramrealm: JSRealm, paramerrorObj: JSErrorObject, paramexception: GraalJSException, paramdefaultColumnNumber: boolean): JSDynamicObject;
    static setIntegrityLevelFast(paramthisObj: JSDynamicObject, paramfreeze: boolean): boolean;
    static setLineNumber(paramcontext: JSContext, paramerrorObj: JSDynamicObject, paramlineNumber: Object): void;
    static setMessage(paramobj: JSDynamicObject, parammessage: TruffleString): void;
    static testIntegrityLevelFast(paramobj: JSDynamicObject, paramfrozen: boolean): boolean;
    private constructor()
    hasOnlyShapeProperties(obj: JSDynamicObject): boolean;
    makeInitialShape(context: JSContext, errorPrototype: JSDynamicObject): Shape;
}
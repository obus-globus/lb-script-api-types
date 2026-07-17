import type { AbstractTruffleException } from '../../../../../com/oracle/truffle/api/exception/AbstractTruffleException.d.ts'
import type { TruffleObject } from '../../../../../com/oracle/truffle/api/interop/TruffleObject.d.ts'
import type { Node } from '../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { RootNode } from '../../../../../com/oracle/truffle/api/nodes/RootNode.d.ts'
import type { HiddenKey } from '../../../../../com/oracle/truffle/api/object/HiddenKey.d.ts'
import type { BranchProfile } from '../../../../../com/oracle/truffle/api/profiles/BranchProfile.d.ts'
import type { InlinedConditionProfile } from '../../../../../com/oracle/truffle/api/profiles/InlinedConditionProfile.d.ts'
import type { TruffleString } from '../../../../../com/oracle/truffle/api/strings/TruffleString.d.ts'
import type { TruffleString$EqualNode } from '../../../../../com/oracle/truffle/api/strings/TruffleString$EqualNode.d.ts'
import type { TruffleString$ReadCharUTF16Node } from '../../../../../com/oracle/truffle/api/strings/TruffleString$ReadCharUTF16Node.d.ts'
import type { JSToPrimitiveNode$Hint } from '../../../../../com/oracle/truffle/js/nodes/cast/JSToPrimitiveNode$Hint.d.ts'
import type { BigInt } from '../../../../../com/oracle/truffle/js/runtime/BigInt.d.ts'
import type { JSContext } from '../../../../../com/oracle/truffle/js/runtime/JSContext.d.ts'
import type { JSRealm } from '../../../../../com/oracle/truffle/js/runtime/JSRealm.d.ts'
import type { ToDisplayStringFormat } from '../../../../../com/oracle/truffle/js/runtime/ToDisplayStringFormat.d.ts'
import type { ByteBufferAccess } from '../../../../../com/oracle/truffle/js/runtime/array/ByteBufferAccess.d.ts'
import type { TypedArrayFactory } from '../../../../../com/oracle/truffle/js/runtime/array/TypedArrayFactory.d.ts'
import type { IteratorRecord } from '../../../../../com/oracle/truffle/js/runtime/objects/IteratorRecord.d.ts'
import type { JSDynamicObject } from '../../../../../com/oracle/truffle/js/runtime/objects/JSDynamicObject.d.ts'
import type { JSObject } from '../../../../../com/oracle/truffle/js/runtime/objects/JSObject.d.ts'
import type { PropertyDescriptor } from '../../../../../com/oracle/truffle/js/runtime/objects/PropertyDescriptor.d.ts'
import type { JSHashMap } from '../../../../../com/oracle/truffle/js/runtime/util/JSHashMap.d.ts'
import type { RuntimeException } from '../../../../../java/lang/RuntimeException.d.ts'
import type { BigInteger } from '../../../../../java/math/BigInteger.d.ts'
import type { ByteBuffer } from '../../../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Number } from '../../../../../java/lang/Number.d.ts'
import type { Throwable } from '../../../../../java/lang/Throwable.d.ts'
export class JSRuntime extends Object {
    static ENUMERATE_ITERATOR_ID: HiddenKey;
    static INVALID_ARRAY_INDEX: number;
    static INVALID_INTEGER_INDEX: number;
    static INVALID_SAFE_INTEGER: number;
    static ITERATION_KIND_KEY: number;
    static ITERATION_KIND_KEY_PLUS_VALUE: number;
    static ITERATION_KIND_VALUE: number;
    static MAX_ARRAY_LENGTH: number;
    static MAX_INTEGER_INDEX_DIGITS: number;
    static MAX_SAFE_INTEGER: number;
    static MAX_SAFE_INTEGER_DIGITS: number;
    static MAX_SAFE_INTEGER_IN_FLOAT: number;
    static MAX_SAFE_INTEGER_LONG: number;
    static MAX_UINT32_DIGITS: number;
    static MIN_SAFE_INTEGER: number;
    static MIN_SAFE_INTEGER_IN_FLOAT: number;
    static MIN_SAFE_INTEGER_LONG: number;
    static TWO32: number;
    static arrayIndexLengthInRange(paramindexStr: TruffleString): boolean;
    static booleanToNumber(paramvalue: boolean): number;
    static booleanToString(paramvalue: boolean): TruffleString;
    static call(paramfnObj: Object, paramholder: Object, paramarguments: Object[]): Object;
    static call(paramfnObj: Object, paramholder: Object, paramarguments: Object[], paramencapsulatingNode: Node): Object;
    static canonicalNumericIndexString(params: TruffleString): Object;
    static castArrayIndex(paramdoubleValue: number): number;
    static castArrayIndex(paramlongValue: number): number;
    static collectionToConsoleString(paramobj: JSDynamicObject, paramallowSideEffects: boolean, paramformat: ToDisplayStringFormat, paramname: TruffleString, parammap: JSHashMap, paramdepth: number): TruffleString;
    static comparePropertyKeys(paramkey1: Object, paramkey2: Object): number;
    static construct(paramfnObj: Object, paramarguments: Object[]): Object;
    static createArrayFromList(paramcontext: JSContext, paramrealm: JSRealm, paramlist: Object[]): JSDynamicObject;
    static createDataProperty(paramo: JSDynamicObject, paramp: Object, paramv: Object): boolean;
    static createDataProperty(paramo: JSDynamicObject, paramp: Object, paramv: Object, paramdoThrow: boolean): boolean;
    static createDataPropertyOrThrow(paramo: JSDynamicObject, paramp: Object, paramv: Object): boolean;
    static createListFromArrayLikeAllowSymbolString(paramobj: Object): Object[];
    static createNonEnumerableDataPropertyOrThrow(paramo: JSDynamicObject, paramp: Object, paramv: Object): void;
    static definePropertyOrThrow(paramo: JSDynamicObject, paramkey: Object, paramdesc: PropertyDescriptor): void;
    static doubleIsRepresentableAsInt(paramd: number): boolean;
    static doubleIsRepresentableAsInt(paramd: number, paramignoreNegativeZero: boolean): boolean;
    static doubleIsRepresentableAsLong(paramd: number): boolean;
    static doubleIsRepresentableAsUnsignedInt(paramd: number, paramignoreNegativeZero: boolean): boolean;
    static doubleToNarrowestNumber(paramd: number): Number;
    static doubleToString(paramd: number): TruffleString;
    static doubleToString(paramd: number, paramradix: number): Object;
    static doubleValue(paramnumber: Number): number;
    static doubleValueVirtual(paramnumber: Number): number;
    static equal(parama: Object, paramb: Object): boolean;
    static expectJSObject(paramto: Object, paramerrorBranch: BranchProfile): JSDynamicObject;
    static exportValue(paramvalue: Object): Object;
    static exportValueArray(paramarr: Object[]): Object[];
    static filterPrivateSymbols(paramlist: Object[]): Object[];
    static firstExpIndexInString(paramstr: TruffleString): number;
    static firstNonWhitespaceIndex(paramstring: TruffleString, paramcharAtNode: TruffleString$ReadCharUTF16Node): number;
    static floatValue(paramn: Number): number;
    static floatValueVirtual(paramn: Number): number;
    static formatDtoA(paramd: number, paramradix: number): Object;
    static formatDtoA(paramvalue: number): string;
    static formatDtoAExponential(paramd: number): Object;
    static formatDtoAExponential(paramd: number, paramdigits: number): Object;
    static formatDtoAFixed(paramvalue: number, paramdigits: number): Object;
    static formatDtoAPrecision(paramvalue: number, paramprecision: number): Object;
    static fromPropertyDescriptor(paramdesc: PropertyDescriptor, paramcontext: JSContext): JSDynamicObject;
    static get(paramobj: Object, paramkey: Object): Object;
    static get(paramobj: Object, paramindex: number): Object;
    static getArg(paramargs: Object[], parami: number, paramdefaultValue: Object): Object;
    static getArgOrUndefined(paramargs: Object[], parami: number): Object;
    static getBufferElementDirect(parambufferAccess: ByteBufferAccess, parambuffer: ByteBuffer, paramelementType: TypedArrayFactory, paramindex: number): Object;
    static getConstructorName(paramreceiver: JSObject): TruffleString;
    static getConstructorName(paramreceiver: JSObject, paramdefaultName: TruffleString): TruffleString;
    static getDataProperty(paramthisObj: JSDynamicObject, paramkey: Object): Object;
    static getException(paramerrorObject: Object): AbstractTruffleException;
    static getException(paramerrorObject: Object, paramnode: Node): AbstractTruffleException;
    static getFunctionRealm(paramobj: Object, paramcurrentRealm: JSRealm): JSRealm;
    static getIterator(paramiteratedObject: Object): IteratorRecord;
    static getOffset(paramstart: number, paramlength: number, paramnode: Node, paramprofile: InlinedConditionProfile): number;
    static getPrimitiveConstructorName(paramprimitive: Object): TruffleString;
    static hasProperty(paramobj: Object, paramkey: Object): boolean;
    static identical(parama: Object, paramb: Object): boolean;
    static identifyInfinity(paramfirstChar: string, paramlen: number): number;
    static importValue(paramvalue: Object): Object;
    static intIsRepresentableAsFloat(paramvalue: number): boolean;
    static intValue(paramnumber: Number): number;
    static intValueVirtual(paramnumber: Number): number;
    static isArray(paramobj: Object): boolean;
    static isArrayIndex(paramdoubleValue: number): boolean;
    static isArrayIndex(paramintValue: number): boolean;
    static isArrayIndex(paramproperty: Object): boolean;
    static isArrayIndex(paramlongValue: number): boolean;
    static isArrayIndexString(paramproperty: TruffleString): boolean;
    static isAsciiDigit(paramc: number): boolean;
    static isAsciiWhitespace(paramcp: string): boolean;
    static isBigInt(paramvalue: Object): boolean;
    static isCallable(paramvalue: Object): boolean;
    static isCallableForeign(paramvalue: Object): boolean;
    static isCallableIsJSObject(paramvalue: JSDynamicObject): boolean;
    static isCallableProxy(paramproxy: JSDynamicObject): boolean;
    static isConstructor(paramconstrObj: Object): boolean;
    static isConstructorForeign(paramvalue: Object): boolean;
    static isConstructorProxy(paramconstrObj: JSDynamicObject): boolean;
    static isForeignObject(paramvalue: TruffleObject): boolean;
    static isForeignObject(paramvalue: Object): boolean;
    static isGenerator(paramgenObj: Object): boolean;
    static isGeneratorProxy(paramgenObj: JSDynamicObject): boolean;
    static isHex(paramc: string): boolean;
    static isInteger(paramobj: Object): boolean;
    static isIntegerIndex(paramlongValue: number): boolean;
    static isIntegralNumber(paramarg: number): boolean;
    static isJSFunctionRootNode(paramrootNode: RootNode): boolean;
    static isJSNative(paramvalue: Object): boolean;
    static isJSPrimitive(paramvalue: Object): boolean;
    static isJSRootNode(paramrootNode: RootNode): boolean;
    static isJavaNumber(paramvalue: Object): boolean;
    static isJavaPrimitive(paramvalue: Object): boolean;
    static isLineTerminator(paramcodePoint: string): boolean;
    static isNaN(paramvalue: Object): boolean;
    static isNegativeZero(paramd: number): boolean;
    static isNullOrUndefined(paramvalue: Object): boolean;
    static isNullish(paramvalue: Object): boolean;
    static isNumber(paramvalue: Object): boolean;
    static isObject(paramvalue: Object): boolean;
    static isPositiveInfinity(paramd: number): boolean;
    static isPrivateSymbol(paramkey: Object): boolean;
    static isPropertyKey(paramkey: Object): boolean;
    static isPrototypeOf(paramobject: JSDynamicObject, paramprototype: JSDynamicObject): boolean;
    static isProxyAnArray(paramproxy: JSDynamicObject): boolean;
    static isRepresentableAsUnsignedInt(paramvalue: number): boolean;
    static isSafeInteger(paramvalue: number): boolean;
    static isSameValue(paramx: Object, paramy: Object): boolean;
    static isValidArrayLength(paramdoubleValue: number): boolean;
    static isValidArrayLength(paramintValue: number): boolean;
    static isValidArrayLength(paramlongValue: number): boolean;
    static isWhiteSpaceExcludingLineTerminator(paramcp: string): boolean;
    static isWhiteSpaceOrLineTerminator(paramcp: number): boolean;
    static iteratorClose(paramiterator: Object): void;
    static iteratorStep(paramiteratorRecord: IteratorRecord): Object;
    static iteratorValue(paramiterator: Object): Object;
    static lastNonWhitespaceIndex(paramstring: TruffleString, paramcharAtNode: TruffleString$ReadCharUTF16Node): number;
    static longFitsInDouble(paraml: number): boolean;
    static longIsRepresentableAsInt(paramvalue: number): boolean;
    static longToIntOrDouble(paramvalue: number): Number;
    static longValue(paramn: Number): number;
    static nullToUndefined(paramvalue: Object): Object;
    static numberToString(paramnumber: Number): TruffleString;
    static objectToDisplayString(paramobj: JSDynamicObject, paramallowSideEffects: boolean, paramformat: ToDisplayStringFormat, paramdepth: number, paramname: TruffleString): TruffleString;
    static objectToDisplayString(paramobj: JSDynamicObject, paramallowSideEffects: boolean, paramformat: ToDisplayStringFormat, paramdepth: number, paramname: TruffleString, paraminternalKeys: TruffleString[], paraminternalValues: Object[]): TruffleString;
    static parseArrayIndexIsIndexRaw(paramo: Object): number;
    static parseArrayIndexRaw(paramstring: TruffleString, paramcharAtNode: TruffleString$ReadCharUTF16Node): number;
    static parseDoubleOrNaN(paraminput: TruffleString): number;
    static parseRawDontFitLong(paramstring: TruffleString, paramradix: number, paramstartPos: number, paramendPos: number, paramnegate: boolean): number;
    static parseRawFitsLong(paramstring: TruffleString, paramradix: number, paramstartPos: number, paramendPos: number, paramnegate: boolean): Number;
    static parseSafeInteger(params: TruffleString): number;
    static parseSafeInteger(params: TruffleString, parambeginIndex: number, paramendIndex: number, paramradix: number): number;
    static positiveLongToIntOrDouble(paramvalue: number): Object;
    static propertyKeyEquals(paramequalsNode: TruffleString$EqualNode, parama: Object, paramb: Object): boolean;
    static propertyKeyToArrayIndex(parampropertyKey: Object): number;
    static propertyKeyToFunctionNameString(paramkey: Object): TruffleString;
    static propertyKeyToIntegerIndex(parampropertyKey: Object): number;
    static propertyNameToArrayIndex(parampropertyName: TruffleString, paramcharAtNode: TruffleString$ReadCharUTF16Node): number;
    static propertyNameToIntegerIndex(parampropertyName: TruffleString): number;
    static quote(paramvalue: TruffleString): TruffleString;
    static quote(paramvalue: string): string;
    static requireObjectCoercible<T extends unknown>(paramargument: T): T;
    static rethrow<E extends Throwable>(paramex: Throwable): RuntimeException;
    static safeToString(paramvalue: Object): TruffleString;
    static setBufferElementDirect(parambufferAccess: ByteBufferAccess, parambuffer: ByteBuffer, paramelementType: TypedArrayFactory, paramindex: number, paramvalue: Object): void;
    static stringToBigInt(params: TruffleString): BigInt;
    static stringToNumber(paramstring: TruffleString): Number;
    static toBigInt(paramvalue: Object): BigInt;
    static toBigInteger(paraminteger: number): BigInteger;
    static toBoolean(paramvalue: Object): boolean;
    static toDisplayString(paramvalue: Object, paramallowSideEffects: boolean): TruffleString;
    static toDisplayString(paramvalue: Object, paramallowSideEffects: boolean, paramformat: ToDisplayStringFormat): TruffleString;
    static toDisplayStringImpl(paramvalue: Object, paramallowSideEffects: boolean, paramformat: ToDisplayStringFormat, paramdepth: number, paramparent: Object): TruffleString;
    static toDisplayStringInner(paramvalue: Object, paramallowSideEffects: boolean, paramformat: ToDisplayStringFormat, paramcurrentDepth: number, paramparent: Object): TruffleString;
    static toDouble(paramvalue: Number): number;
    static toDouble(paramvalue: Object): number;
    static toFloat16(paramd: number): number;
    static toFloat16(paramnumber: Number): number;
    static toInt32(paramvalue: number): number;
    static toInt32(paramnumber: Number): number;
    static toInt32(paramvalue: Object): number;
    static toInt32NoTruncate(paramvalue: number): number;
    static toInteger(paramnumber: Number): number;
    static toInteger(paramvalue: Object): number;
    static toJSNull(paramvalue: Object): Object;
    static toJavaNull(paramvalue: Object): Object;
    static toJavaString(paramvalue: Object): string;
    static toLength(paramd: number): number;
    static toLength(paramvalue: number): number;
    static toLength(paramvalue: Object): number;
    static toLength(paraml: number): number;
    static toNumber(paramvalue: Object): Number;
    static toNumeric(paramvalue: Object): Object;
    static toObject(paramvalue: Object): Object;
    static toPrimitive(paramvalue: Object): Object;
    static toPrimitive(paramvalue: Object, paramhint: JSToPrimitiveNode$Hint): Object;
    static toPropertyDescriptor(paramproperty: Object): PropertyDescriptor;
    static toPropertyKey(paramarg: Object): Object;
    static toString(paramvalue: JSDynamicObject): TruffleString;
    static toString(paramvalue: Object): TruffleString;
    static toUInt16(paramnumber: number): number;
    static toUInt16(paramnumber: Number): number;
    static toUInt16(paramvalue: Object): number;
    static toUInt16NoTruncate(paramnumber: number): number;
    static toUInt32(paramvalue: number): number;
    static toUInt32(paramnumber: Number): number;
    static toUInt32(paramvalue: Object): number;
    static toUInt32NoTruncate(paramvalue: number): number;
    static toUint32(paramvalue: number): Number;
    static trimJSWhiteSpace(paramstring: TruffleString): TruffleString;
    static truncateDouble(paramvalue: number): number;
    static typeof(paramvalue: Object): TruffleString;
    static valueInHex(paramc: string): number;
    static valueInRadix(paramc: string, paramradix: number): number;
    static valueInRadix10(paramc: string): number;
    private constructor()
}
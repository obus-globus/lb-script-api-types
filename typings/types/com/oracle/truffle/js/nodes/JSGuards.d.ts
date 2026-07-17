import type { Shape } from '../../../../../com/oracle/truffle/api/object/Shape.d.ts'
import type { TruffleString } from '../../../../../com/oracle/truffle/api/strings/TruffleString.d.ts'
import type { TruffleString$EqualNode } from '../../../../../com/oracle/truffle/api/strings/TruffleString$EqualNode.d.ts'
import type { BigInt } from '../../../../../com/oracle/truffle/js/runtime/BigInt.d.ts'
import type { JSArgumentsObject } from '../../../../../com/oracle/truffle/js/runtime/builtins/JSArgumentsObject.d.ts'
import type { JSDynamicObject } from '../../../../../com/oracle/truffle/js/runtime/objects/JSDynamicObject.d.ts'
import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class JSGuards extends Object {
    static getClassIfJSDynamicObject(paramobject: Object): Class<Object>;
    static getClassIfJSObject(paramobject: Object): Class<Object>;
    static hasOverloadedOperators(paramvalue: Object): boolean;
    static isArgumentsDisconnected(paramargumentsArray: JSArgumentsObject): boolean;
    static isBigInt(paramtarget: Object): boolean;
    static isBigIntArrayIndex(parami: BigInt): boolean;
    static isBigIntNegativeVal(parama: BigInt): boolean;
    static isBigIntZero(parama: BigInt): boolean;
    static isBoolean(paramoperand: Object): boolean;
    static isCallable(paramreviver: Object): boolean;
    static isCallableProxy(paramproxy: JSDynamicObject): boolean;
    static isDoubleInInt32Range(paramvalue: number): boolean;
    static isDoubleInLongCastRange(paramvalue: number): boolean;
    static isDoubleLargerThan2e32(paramd: number): boolean;
    static isDoubleRepresentableAsLong(paramd: number): boolean;
    static isDoubleSafeInteger(paramd: number): boolean;
    static isForeignNumber(parama: Object): boolean;
    static isForeignObject(paramvalue: Object): boolean;
    static isForeignObjectOrNumber(parama: Object): boolean;
    static isIntArrayIndex(parami: number): boolean;
    static isJSAdapter(paramobject: Object): boolean;
    static isJSArgumentsObject(paramvalue: Object): boolean;
    static isJSArray(paramvalue: Object): boolean;
    static isJSArrayBufferView(paramthisObj: Object): boolean;
    static isJSBigInt(paramvalue: Object): boolean;
    static isJSBoolean(paramvalue: Object): boolean;
    static isJSCollator(paramvalue: Object): boolean;
    static isJSDate(paramvalue: Object): boolean;
    static isJSDateTimeFormat(paramvalue: Object): boolean;
    static isJSDirectArrayBuffer(paramthisObj: Object): boolean;
    static isJSDisplayNames(paramvalue: Object): boolean;
    static isJSDynamicObject(paramvalue: Object): boolean;
    static isJSFastArgumentsObject(paramvalue: Object): boolean;
    static isJSFastArray(paramvalue: Object): boolean;
    static isJSFinalizationRegistry(paramvalue: Object): boolean;
    static isJSFunction(paramvalue: Object): boolean;
    static isJSFunctionShape(paramshape: Shape): boolean;
    static isJSHeapArrayBuffer(paramthisObj: Object): boolean;
    static isJSInteropArrayBuffer(paramthisObj: Object): boolean;
    static isJSListFormat(paramvalue: Object): boolean;
    static isJSLocale(paramvalue: Object): boolean;
    static isJSMap(paramvalue: Object): boolean;
    static isJSModuleNamespace(paramvalue: Object): boolean;
    static isJSNull(paramvalue: Object): boolean;
    static isJSNumber(paramvalue: Object): boolean;
    static isJSNumberFormat(paramvalue: Object): boolean;
    static isJSObject(paramvalue: Object): boolean;
    static isJSObjectPrototype(paramvalue: Object): boolean;
    static isJSOrdinaryObject(paramvalue: Object): boolean;
    static isJSPluralRules(paramvalue: Object): boolean;
    static isJSProxy(paramvalue: Object): boolean;
    static isJSRegExp(paramvalue: Object): boolean;
    static isJSRelativeTimeFormat(paramvalue: Object): boolean;
    static isJSSegmentIterator(paramvalue: Object): boolean;
    static isJSSegmenter(paramvalue: Object): boolean;
    static isJSSegments(paramvalue: Object): boolean;
    static isJSSet(paramvalue: Object): boolean;
    static isJSSharedArrayBuffer(paramthisObj: Object): boolean;
    static isJSString(paramvalue: Object): boolean;
    static isJSSymbol(paramvalue: Object): boolean;
    static isJSTemporalCalendarHolder(paramvalue: Object): boolean;
    static isJSTemporalDuration(paramvalue: Object): boolean;
    static isJSTemporalInstant(paramvalue: Object): boolean;
    static isJSTemporalMonthDay(paramvalue: Object): boolean;
    static isJSTemporalPlainDate(paramvalue: Object): boolean;
    static isJSTemporalPlainDateTime(paramvalue: Object): boolean;
    static isJSTemporalPlainTime(paramvalue: Object): boolean;
    static isJSTemporalYearMonth(paramvalue: Object): boolean;
    static isJSTemporalZonedDateTime(paramvalue: Object): boolean;
    static isJSWeakMap(paramvalue: Object): boolean;
    static isJSWeakRef(paramvalue: Object): boolean;
    static isJSWeakSet(paramvalue: Object): boolean;
    static isJSWebAssemblyModule(paramobject: Object): boolean;
    static isJavaNumber(paramoperand: Object): boolean;
    static isJavaPackage(paramtarget: Object): boolean;
    static isJavaPrimitive(paramvalue: Object): boolean;
    static isLongArrayIndex(parami: number): boolean;
    static isLongRepresentableAsInt32(paramvalue: number): boolean;
    static isNullOrUndefined(paramvalue: Object): boolean;
    static isNumber(paramoperand: Object): boolean;
    static isNumberDouble(paramoperand: Object): boolean;
    static isNumberInteger(paramoperand: Object): boolean;
    static isNumberLong(paramoperand: Object): boolean;
    static isReferenceEquals(parama: Object, paramb: Object): boolean;
    static isSafeInteger(paramtarget: Object): boolean;
    static isString(paramoperand: Object): boolean;
    static isStringString(paramoperand: Object, paramoperand2: Object): boolean;
    static isSymbol(paramoperand: Object): boolean;
    static isTruffleObject(paramvalue: Object): boolean;
    static isTruffleString(paramvalue: Object): boolean;
    static isUndefined(paramvalue: Object): boolean;
    static isValidPrototype(paramprototype: Object): boolean;
    static stringEquals(paramnode: TruffleString$EqualNode, parama: TruffleString, paramb: TruffleString): boolean;
    static stringLength(paramoperand: TruffleString): number;
    private constructor()
}
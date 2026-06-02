import type { HiddenKey } from '../../../../../../com/oracle/truffle/api/object/HiddenKey.d.ts'
import type { Property } from '../../../../../../com/oracle/truffle/api/object/Property.d.ts'
import type { Shape } from '../../../../../../com/oracle/truffle/api/object/Shape.d.ts'
import type { TruffleString } from '../../../../../../com/oracle/truffle/api/strings/TruffleString.d.ts'
import type { JSBuiltinsContainer } from '../../../../../../com/oracle/truffle/js/builtins/JSBuiltinsContainer.d.ts'
import type { JSContext } from '../../../../../../com/oracle/truffle/js/runtime/JSContext.d.ts'
import type { JSRealm } from '../../../../../../com/oracle/truffle/js/runtime/JSRealm.d.ts'
import type { JSClass } from '../../../../../../com/oracle/truffle/js/runtime/builtins/JSClass.d.ts'
import type { JSConstructor } from '../../../../../../com/oracle/truffle/js/runtime/builtins/JSConstructor.d.ts'
import type { JSConstructorFactory$WithFunctions } from '../../../../../../com/oracle/truffle/js/runtime/builtins/JSConstructorFactory$WithFunctions.d.ts'
import type { JSFunctionObject } from '../../../../../../com/oracle/truffle/js/runtime/builtins/JSFunctionObject.d.ts'
import type { JSNonProxy } from '../../../../../../com/oracle/truffle/js/runtime/builtins/JSNonProxy.d.ts'
import type { JSObjectFactory } from '../../../../../../com/oracle/truffle/js/runtime/builtins/JSObjectFactory.d.ts'
import type { JSRegExpObject } from '../../../../../../com/oracle/truffle/js/runtime/builtins/JSRegExpObject.d.ts'
import type { PrototypeSupplier } from '../../../../../../com/oracle/truffle/js/runtime/builtins/PrototypeSupplier.d.ts'
import type { JSDynamicObject } from '../../../../../../com/oracle/truffle/js/runtime/objects/JSDynamicObject.d.ts'
import type { PropertyDescriptor } from '../../../../../../com/oracle/truffle/js/runtime/objects/PropertyDescriptor.d.ts'
import type { PropertyProxy } from '../../../../../../com/oracle/truffle/js/runtime/objects/PropertyProxy.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class JSRegExp extends JSNonProxy implements JSConstructorFactory$WithFunctions, PrototypeSupplier {
    static $_: TruffleString;
    static $_1: TruffleString;
    static $_2: TruffleString;
    static $_3: TruffleString;
    static $_4: TruffleString;
    static $_5: TruffleString;
    static $_6: TruffleString;
    static $_7: TruffleString;
    static $_8: TruffleString;
    static $_9: TruffleString;
    static $_AMPERSAND: TruffleString;
    static $_BACKTICK: TruffleString;
    static $_PLUS: TruffleString;
    static $_SQUOT: TruffleString;
    static CLASS_NAME: TruffleString;
    static DOT_ALL: TruffleString;
    static EMPTY_REGEX: TruffleString;
    static FLAGS: TruffleString;
    static GET_SYMBOL_SPECIES_NAME: TruffleString;
    static GLOBAL: TruffleString;
    static GROUPS: TruffleString;
    static GROUPS_RESULT_ID: HiddenKey;
    static HAS_INDICES: TruffleString;
    static IGNORE_CASE: TruffleString;
    static INDEX: TruffleString;
    static INDICES: TruffleString;
    static INPUT: TruffleString;
    static INSTANCE: JSRegExp;
    static LAST_INDEX: TruffleString;
    static LAST_MATCH: TruffleString;
    static LAST_PAREN: TruffleString;
    static LAZY_INDEX_PROXY: PropertyProxy;
    static LEFT_CONTEXT: TruffleString;
    static MAX_FLAGS_LENGTH: number;
    static MULTILINE: TruffleString;
    static PROTOTYPE_NAME: TruffleString;
    static RIGHT_CONTEXT: TruffleString;
    static SOURCE: TruffleString;
    static STICKY: TruffleString;
    static UNICODE: TruffleString;
    static UNICODE_SETS: TruffleString;
    static buildGroupsFactory(paramctx: JSContext, paramnamedCaptureGroups: Object): JSObjectFactory;
    static checkProtoCycle(paramthisObj: JSDynamicObject, paramnewPrototype: JSDynamicObject): boolean;
    static create(paramcontext: JSContext, paramrealm: JSRealm, paramproto: JSDynamicObject, paramcompiledRegex: Object, paramgroupsFactory: JSObjectFactory, paramlegacyFeaturesEnabled: boolean): JSRegExpObject;
    static create(paramctx: JSContext, paramrealm: JSRealm, paramcompiledRegex: Object): JSRegExpObject;
    static create(paramcontext: JSContext, paramrealm: JSRealm, paramcompiledRegex: Object, paramgroupsFactory: JSObjectFactory): JSRegExpObject;
    static create(paramcontext: JSContext, paramrealm: JSRealm, paramcompiledRegex: Object, paramgroupsFactory: JSObjectFactory, paramlegacyFeaturesEnabled: boolean): JSRegExpObject;
    static createConstructor(paramrealm: JSRealm): JSConstructor;
    static createGroupsObject(paramrealm: JSRealm, paramgroupsFactory: JSObjectFactory, paramregexResult: Object, paraminput: TruffleString, paramisIndices: boolean): JSDynamicObject;
    static escapeRegExpPattern(parampattern: TruffleString): TruffleString;
    static filterOwnPropertyKeys(paramownPropertyKeys: Object[], paramstrings: boolean, paramsymbols: boolean): Object[];
    static getCompiledRegex(paramthisObj: JSRegExpObject): Object;
    static getGroupsFactory(paramthisObj: JSRegExpObject): JSObjectFactory;
    static getLegacyFeaturesEnabled(paramthisObj: JSRegExpObject): boolean;
    static getRealm(paramthisObj: JSRegExpObject): Object;
    static isInstance(paramobject: JSDynamicObject, paramjsclass: JSClass): boolean;
    static isInstance(paramobject: Object, paramjsclass: JSClass): boolean;
    static isJSRegExp(paramobj: Object): boolean;
    static makeInitialGroupsObjectShape(paramcontext: JSContext): Shape;
    static ordinaryGetOwnProperty(paramthisObj: JSDynamicObject, paramkey: Object): PropertyDescriptor;
    static ordinaryGetOwnPropertyIntl(paramthisObj: JSDynamicObject, paramkey: Object, paramprop: Property): PropertyDescriptor;
    static ordinaryIsExtensible(paramthisObj: JSDynamicObject): boolean;
    static ordinaryOwnPropertyKeys(paramthisObj: JSDynamicObject): Object[];
    static ordinaryPreventExtensions(paramthisObj: JSDynamicObject, paramextraFlags: number): boolean;
    static prototypeToString(paramthisObj: JSRegExpObject): TruffleString;
    static setIntegrityLevelFast(paramthisObj: JSDynamicObject, paramfreeze: boolean): boolean;
    static testIntegrityLevelFast(paramobj: JSDynamicObject, paramfrozen: boolean): boolean;
    static updateCompilation(paramctx: JSContext, paramthisObj: JSRegExpObject, paramregex: Object): void;
    private constructor()
    createConstructorAndPrototype(realm: JSRealm, functionBuiltins: JSBuiltinsContainer): JSConstructor;
    createPrototype(realm: JSRealm, ctor: JSFunctionObject): JSDynamicObject;
    fillConstructor(realm: JSRealm, constructor: JSDynamicObject): void;
    getClassName(): TruffleString;
    getIntrinsicDefaultProto(realm: JSRealm): JSDynamicObject;
    makeInitialShape(ctx: JSContext, thisObj: JSDynamicObject): Shape;
}
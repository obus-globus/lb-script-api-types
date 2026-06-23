import type { TruffleLanguage } from '../../../../../com/oracle/truffle/api/TruffleLanguage.d.ts'
import type { TruffleObject } from '../../../../../com/oracle/truffle/api/interop/TruffleObject.d.ts'
import type { TruffleString } from '../../../../../com/oracle/truffle/api/strings/TruffleString.d.ts'
import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Symbol extends Object implements TruffleObject {
    static SYMBOL_ASYNC_ITERATOR: Symbol;
    static SYMBOL_HAS_INSTANCE: Symbol;
    static SYMBOL_IS_CONCAT_SPREADABLE: Symbol;
    static SYMBOL_ITERATOR: Symbol;
    static SYMBOL_MATCH: Symbol;
    static SYMBOL_MATCH_ALL: Symbol;
    static SYMBOL_REPLACE: Symbol;
    static SYMBOL_SEARCH: Symbol;
    static SYMBOL_SPECIES: Symbol;
    static SYMBOL_SPLIT: Symbol;
    static SYMBOL_TO_PRIMITIVE: Symbol;
    static SYMBOL_TO_STRING_TAG: Symbol;
    static SYMBOL_UNSCOPABLES: Symbol;
    static create(paramdescription: TruffleString): Symbol;
    static createPrivate(paramdescription: TruffleString): Symbol;
    static createPrivateRegistered(paramdescription: TruffleString): Symbol;
    static createRegistered(paramdescription: TruffleString): Symbol;
    private constructor(description: TruffleString, registered: boolean, isPrivate: boolean)
    readonly description: TruffleString;
    readonly invertedMap: Map<{ [key: string]: any }, Object>;
    // private isPrivate: boolean;
    readonly registered: boolean;
    clearInvertedMap(): void;
    equals(obj: Object | null): boolean;
    getDescription(): Object;
    getInvertedMap(): Map<{ [key: string]: any }, Object>;
    getLanguage(): Class<TruffleLanguage<Object>>;
    getMetaObject(): Object;
    getName(): TruffleString;
    hasLanguage(): boolean;
    hasMetaObject(): boolean;
    hashCode(): number;
    identityHashCode(): number;
    isPrivate(): boolean;
    isRegistered(): boolean;
    setInvertedMap(invMap: Map<{ [key: string]: any }, Object>): void;
    toDisplayString(allowSideEffects: boolean): Object;
    toFunctionNameString(): TruffleString;
    toString(): string;
    toTString(): TruffleString;
}
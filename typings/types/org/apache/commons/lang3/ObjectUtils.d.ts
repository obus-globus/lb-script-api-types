import type { Appendable } from '../../../../java/lang/Appendable.d.ts'
import type { Class } from '../../../../java/lang/Class.d.ts'
import type { StringBuffer } from '../../../../java/lang/StringBuffer.d.ts'
import type { StringBuilder } from '../../../../java/lang/StringBuilder.d.ts'
import type { Duration } from '../../../../java/time/Duration.d.ts'
import type { Comparator } from '../../../../java/util/Comparator.d.ts'
import type { Supplier } from '../../../../java/util/function/Supplier.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Comparable } from '../../../../java/lang/Comparable.d.ts'
import type { ObjectUtils$Null } from '../../../../org/apache/commons/lang3/ObjectUtils$Null.d.ts'
import type { StrBuilder } from '../../../../org/apache/commons/lang3/text/StrBuilder.d.ts'
export class ObjectUtils extends Object {
    static NULL: ObjectUtils$Null;
    static CONST<T extends unknown>(paramarg0: T): T;
    static CONST(paramarg0: boolean): boolean;
    static CONST(paramarg0: number): number;
    static CONST(paramarg0: string): string;
    static CONST_BYTE(paramarg0: number): number;
    static CONST_SHORT(paramarg0: number): number;
    static allNotNull(...paramarg0: Object[]): boolean;
    static allNull(...paramarg0: Object[]): boolean;
    static anyNotNull(...paramarg0: Object[]): boolean;
    static anyNull(...paramarg0: Object[]): boolean;
    static clone<T extends unknown>(paramarg0: T): T;
    static cloneIfPossible<T extends unknown>(paramarg0: T): T;
    static compare<T extends Comparable<Object>>(paramarg0: T, paramarg1: T): number;
    static compare<T extends Comparable<Object>>(paramarg0: T, paramarg1: T, paramarg2: boolean): number;
    static defaultIfNull<T extends unknown>(paramarg0: T, paramarg1: T): T;
    static equals(paramarg0: Object, paramarg1: Object): boolean;
    static firstNonNull<T extends unknown>(...paramarg0: T[]): T;
    static getClass<T extends unknown>(paramarg0: T): Class<T>;
    static getFirstNonNull<T extends unknown>(paramarg0: () => T[]): T;
    static getIfNull<T extends unknown>(paramarg0: T, paramarg1: T): T;
    static getIfNull<T extends unknown>(paramarg0: T, paramarg1: () => T): T;
    static hashCode(paramarg0: Object): number;
    static hashCodeHex(paramarg0: Object): string;
    static hashCodeMulti(...paramarg0: Object[]): number;
    static identityHashCodeHex(paramarg0: Object): string;
    static identityToString(paramarg0: Object): string;
    static identityToString(paramarg0: Appendable, paramarg1: Object): void;
    static identityToString(paramarg0: StringBuffer, paramarg1: Object): void;
    static identityToString(paramarg0: StringBuilder, paramarg1: Object): void;
    static identityToString(paramarg0: StrBuilder, paramarg1: Object): void;
    static isArray(paramarg0: Object): boolean;
    static isEmpty(paramarg0: Object): boolean;
    static isNotEmpty(paramarg0: Object): boolean;
    static max<T extends Comparable<Object>>(...paramarg0: T[]): T;
    static median<T extends Comparable<Object>>(...paramarg0: T[]): T;
    static median<T extends unknown>(paramarg0: (param0: T, param1: T) => number, ...paramarg1: T[]): T;
    static min<T extends Comparable<Object>>(...paramarg0: T[]): T;
    static mode<T extends unknown>(...paramarg0: T[]): T;
    static notEqual(paramarg0: Object, paramarg1: Object): boolean;
    static requireNonEmpty<T extends unknown>(paramarg0: T): T;
    static requireNonEmpty<T extends unknown>(paramarg0: T, paramarg1: string): T;
    static toString<T extends unknown>(paramarg0: T, paramarg1: () => string): string;
    static toString(paramarg0: Object): string;
    static toString(paramarg0: Object, paramarg1: string): string;
    static toString(paramarg0: () => Object, paramarg1: () => string): string;
    static wait(paramarg0: Object, paramarg1: Duration): void;
    constructor()
}
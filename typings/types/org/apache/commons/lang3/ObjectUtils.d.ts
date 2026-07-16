import type { Appendable } from '../../../../java/lang/Appendable.d.ts'
import type { Class } from '../../../../java/lang/Class.d.ts'
import type { StringBuffer } from '../../../../java/lang/StringBuffer.d.ts'
import type { StringBuilder } from '../../../../java/lang/StringBuilder.d.ts'
import type { Duration } from '../../../../java/time/Duration.d.ts'
import type { Comparator } from '../../../../java/util/Comparator.d.ts'
import type { Supplier } from '../../../../java/util/function/Supplier.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { ObjectUtils$Null } from '../../../../org/apache/commons/lang3/ObjectUtils$Null.d.ts'
import type { StrBuilder } from '../../../../org/apache/commons/lang3/text/StrBuilder.d.ts'
export class ObjectUtils extends Object {
    static NULL: ObjectUtils$Null;
    static CONST(paramarg0: Object | null): Object | null;
    static CONST(paramarg0: boolean): boolean;
    static CONST(paramarg0: number): number;
    static CONST(paramarg0: string): string;
    static CONST_BYTE(paramarg0: number): number;
    static CONST_SHORT(paramarg0: number): number;
    static allNotNull(...paramarg0: Object[]): boolean;
    static allNull(...paramarg0: Object[]): boolean;
    static anyNotNull(...paramarg0: Object[]): boolean;
    static anyNull(...paramarg0: Object[]): boolean;
    static clone(paramarg0: Object | null): Object | null;
    static cloneIfPossible(paramarg0: Object | null): Object | null;
    static compare(paramarg0: Object | null, paramarg1: Object | null): number;
    static compare(paramarg0: Object | null, paramarg1: Object | null, paramarg2: boolean): number;
    static defaultIfNull(paramarg0: Object | null, paramarg1: Object | null): Object | null;
    static equals(paramarg0: Object, paramarg1: Object): boolean;
    static firstNonNull(...paramarg0: (Object | null)[]): Object | null;
    static getClass(paramarg0: Object | null): Class<Object>;
    static getFirstNonNull(paramarg0: () => Object | null[]): Object | null;
    static getIfNull(paramarg0: Object | null, paramarg1: Object | null): Object | null;
    static getIfNull(paramarg0: Object | null, paramarg1: () => Object | null): Object | null;
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
    static max(...paramarg0: (Object | null)[]): Object | null;
    static median(...paramarg0: (Object | null)[]): Object | null;
    static median(paramarg0: (param0: Object | null, param1: Object | null) => number, ...paramarg1: (Object | null)[]): Object | null;
    static min(...paramarg0: (Object | null)[]): Object | null;
    static mode(...paramarg0: (Object | null)[]): Object | null;
    static notEqual(paramarg0: Object, paramarg1: Object): boolean;
    static requireNonEmpty(paramarg0: Object | null): Object | null;
    static requireNonEmpty(paramarg0: Object | null, paramarg1: string): Object | null;
    static toString(paramarg0: Object | null, paramarg1: () => string): string;
    static toString(paramarg0: Object): string;
    static toString(paramarg0: Object, paramarg1: string): string;
    static toString(paramarg0: () => Object, paramarg1: () => string): string;
    static wait(paramarg0: Object, paramarg1: Duration): void;
    constructor()
}
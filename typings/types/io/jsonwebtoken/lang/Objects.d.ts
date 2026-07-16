import type { Closeable } from '../../../java/io/Closeable.d.ts'
import type { Flushable } from '../../../java/io/Flushable.d.ts'
import type { Class } from '../../../java/lang/Class.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { Enum } from '../../../java/lang/Enum.d.ts'
import type { Throwable } from '../../../java/lang/Throwable.d.ts'
export class Objects extends Object {
    static addObjectToArray<A extends unknown, O extends A>(paramarg0: A[], paramarg1: O): A[];
    static caseInsensitiveValueOf<E extends Enum<any>>(paramarg0: E[], paramarg1: string): E;
    static containsConstant(paramarg0: Enum<any>[], paramarg1: string): boolean;
    static containsConstant(paramarg0: Enum<any>[], paramarg1: string, paramarg2: boolean): boolean;
    static containsElement(paramarg0: Object[], paramarg1: Object): boolean;
    static getDisplayString(paramarg0: Object): string;
    static getIdentityHexString(paramarg0: Object): string;
    static hashCode(paramarg0: boolean): number;
    static hashCode(paramarg0: number): number;
    static identityToString(paramarg0: Object): string;
    static isArray(paramarg0: Object): boolean;
    static isCheckedException(paramarg0: Throwable): boolean;
    static isCompatibleWithThrowsClause(paramarg0: Throwable, paramarg1: Class<Object>[]): boolean;
    static isEmpty(paramarg0: number[]): boolean;
    static isEmpty(paramarg0: string[]): boolean;
    static isEmpty(paramarg0: Object): boolean;
    static isEmpty(paramarg0: Object[]): boolean;
    static nullSafeClassName(paramarg0: Object): string;
    static nullSafeClose(...paramarg0: Closeable[]): void;
    static nullSafeEquals(paramarg0: Object, paramarg1: Object): boolean;
    static nullSafeFlush(...paramarg0: Flushable[]): void;
    static nullSafeHashCode(paramarg0: boolean[]): number;
    static nullSafeHashCode(paramarg0: number[]): number;
    static nullSafeHashCode(paramarg0: string[]): number;
    static nullSafeHashCode(paramarg0: Object): number;
    static nullSafeHashCode(...paramarg0: Object[]): number;
    static nullSafeToString(paramarg0: boolean[]): string;
    static nullSafeToString(paramarg0: number[]): string;
    static nullSafeToString(paramarg0: string[]): string;
    static nullSafeToString(paramarg0: Object): string;
    static nullSafeToString(paramarg0: Object[]): string;
    static toObjectArray(paramarg0: Object): Object[];
    private constructor()
}
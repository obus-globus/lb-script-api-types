import type { Object } from '../../../java/lang/Object.d.ts'
import type { Throwable } from '../../../java/lang/Throwable.d.ts'
export class Objects extends Object {
    static addObjectToArray(paramarg0: Object | null, paramarg1: Object | null): Object | null;
    static caseInsensitiveValueOf(paramarg0: Object | null, paramarg1: string): Object | null;
    static containsConstant(paramarg0: Object | null, paramarg1: string): boolean;
    static containsConstant(paramarg0: Object | null, paramarg1: string, paramarg2: boolean): boolean;
    static containsElement(paramarg0: (Object | null)[], paramarg1: Object): boolean;
    static getDisplayString(paramarg0: Object): string;
    static getIdentityHexString(paramarg0: Object): string;
    static hashCode(paramarg0: boolean): number;
    static hashCode(paramarg0: number): number;
    static hashCode(paramarg0: number): number;
    static hashCode(paramarg0: number): number;
    static identityToString(paramarg0: Object): string;
    static isArray(paramarg0: Object): boolean;
    static isCheckedException(paramarg0: Throwable): boolean;
    static isCompatibleWithThrowsClause(paramarg0: Throwable, paramarg1: (Object | null)[]): boolean;
    static isEmpty(paramarg0: number[]): boolean;
    static isEmpty(paramarg0: string[]): boolean;
    static isEmpty(paramarg0: Object): boolean;
    static isEmpty(paramarg0: (Object | null)[]): boolean;
    static nullSafeClassName(paramarg0: Object): string;
    static nullSafeClose(paramarg0: (Object | null)[]): void;
    static nullSafeEquals(paramarg0: Object, paramarg1: Object): boolean;
    static nullSafeFlush(paramarg0: (Object | null)[]): void;
    static nullSafeHashCode(paramarg0: (Object | null)[]): number;
    static nullSafeHashCode(paramarg0: number[]): number;
    static nullSafeHashCode(paramarg0: string[]): number;
    static nullSafeHashCode(paramarg0: number[]): number;
    static nullSafeHashCode(paramarg0: number[]): number;
    static nullSafeHashCode(paramarg0: number[]): number;
    static nullSafeHashCode(paramarg0: Object): number;
    static nullSafeHashCode(paramarg0: (Object | null)[]): number;
    static nullSafeHashCode(paramarg0: number[]): number;
    static nullSafeHashCode(paramarg0: number[]): number;
    static nullSafeToString(paramarg0: (Object | null)[]): string;
    static nullSafeToString(paramarg0: number[]): string;
    static nullSafeToString(paramarg0: string[]): string;
    static nullSafeToString(paramarg0: number[]): string;
    static nullSafeToString(paramarg0: number[]): string;
    static nullSafeToString(paramarg0: number[]): string;
    static nullSafeToString(paramarg0: Object): string;
    static nullSafeToString(paramarg0: (Object | null)[]): string;
    static nullSafeToString(paramarg0: number[]): string;
    static nullSafeToString(paramarg0: number[]): string;
    static toObjectArray(paramarg0: Object): (Object | null)[];
    private constructor()
}
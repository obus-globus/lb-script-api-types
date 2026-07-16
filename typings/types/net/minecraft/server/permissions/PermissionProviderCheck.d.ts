import type { Record } from '../../../../java/lang/Record.d.ts'
import type { Predicate } from '../../../../java/util/function/Predicate.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { PermissionCheck } from '../../../../net/minecraft/server/permissions/PermissionCheck.d.ts'
import type { PermissionSetSupplier } from '../../../../net/minecraft/server/permissions/PermissionSetSupplier.d.ts'
export class PermissionProviderCheck<T extends PermissionSetSupplier> extends Record implements Predicate<T> {
    static isEqual<T extends unknown>(paramarg0: Object): (param0: T) => boolean;
    static not<T extends unknown>(paramarg0: (param0: Object) => boolean): (param0: T) => boolean;
    constructor(test: PermissionCheck)
    // private test: PermissionCheck;
    and(arg0: (param0: T) => boolean): (param0: T) => boolean;
    equals(o: Object | null): boolean;
    hashCode(): number;
    negate(): (param0: T) => boolean;
    or(arg0: (param0: T) => boolean): (param0: T) => boolean;
    test(): PermissionCheck;
    test(t: T): boolean;
    toString(): string;
}
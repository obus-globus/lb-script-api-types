import type { Record } from '../../../../java/lang/Record.d.ts'
import type { Predicate } from '../../../../java/util/function/Predicate.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { PermissionCheck } from '../../../../net/minecraft/server/permissions/PermissionCheck.d.ts'
import type { PermissionSetSupplier } from '../../../../net/minecraft/server/permissions/PermissionSetSupplier.d.ts'
export class PermissionProviderCheck<T extends PermissionSetSupplier> extends Record implements Predicate<T> {
    static isEqual(paramarg0: Object): (param0: Object | null) => kotlin.Boolean;
    static not(paramarg0: (param0: Object | null) => kotlin.Boolean): (param0: Object | null) => kotlin.Boolean;
    constructor(test: PermissionCheck)
    // private test: PermissionCheck;
    and(arg0: (param0: T) => kotlin.Boolean): (param0: T) => kotlin.Boolean;
    equals(o: Object | null): boolean;
    hashCode(): number;
    negate(): (param0: T) => kotlin.Boolean;
    or(arg0: (param0: T) => kotlin.Boolean): (param0: T) => kotlin.Boolean;
    test(): PermissionCheck;
    test(t: T): boolean;
    toString(): string;
}
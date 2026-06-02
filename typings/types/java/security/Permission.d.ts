import type { Serializable } from '../../java/io/Serializable.d.ts'
import type { Guard } from '../../java/security/Guard.d.ts'
import type { PermissionCollection } from '../../java/security/PermissionCollection.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
export abstract class Permission extends Object implements Serializable, Guard {
    constructor(arg0: string)
    readonly name: string;
    checkGuard(arg0: Object): void;
    equals(arg0: Object | null): boolean;
    getActions(): string;
    getName(): string;
    hashCode(): number;
    implies(arg0: Permission): boolean;
    newPermissionCollection(): PermissionCollection;
    toString(): string;
}
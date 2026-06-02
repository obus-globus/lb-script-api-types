import type { ObjectInputStream } from '../../java/io/ObjectInputStream.d.ts'
import type { Serializable } from '../../java/io/Serializable.d.ts'
import type { Permission } from '../../java/security/Permission.d.ts'
import type { PermissionCollection } from '../../java/security/PermissionCollection.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
export abstract class BasicPermission extends Permission implements Serializable {
    constructor(arg0: string)
    constructor(arg0: string, arg1: string)
    // private exitVM: boolean;
    // private path: string;
    // private wildcard: boolean;
    equals(arg0: Object | null): boolean;
    getActions(): string;
    getCanonicalName(): string;
    hashCode(): number;
    implies(arg0: Permission): boolean;
    // private init(arg0: string): void;
    newPermissionCollection(): PermissionCollection;
    // private readObject(arg0: ObjectInputStream): void;
}
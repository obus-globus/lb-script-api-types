import type { ClassLoader } from '../../java/lang/ClassLoader.d.ts'
import type { CodeSource } from '../../java/security/CodeSource.d.ts'
import type { Permission } from '../../java/security/Permission.d.ts'
import type { PermissionCollection } from '../../java/security/PermissionCollection.d.ts'
import type { Principal } from '../../java/security/Principal.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
export class ProtectionDomain extends Object {
    constructor(arg0: CodeSource, arg1: PermissionCollection)
    constructor(arg0: CodeSource, arg1: PermissionCollection, arg2: ClassLoader, arg3: Principal[])
    // private classloader: ClassLoader;
    // private codesource: CodeSource;
    // private hasAllPerm: boolean;
    readonly permissions: PermissionCollection;
    readonly principals: Principal[];
    // private staticPermissions: boolean;
    getClassLoader(): ClassLoader;
    getCodeSource(): CodeSource;
    getPermissions(): PermissionCollection;
    getPrincipals(): Principal[];
    implies(arg0: Permission): boolean;
    staticPermissionsOnly(): boolean;
    toString(): string;
}
import type { AclEntry$Builder } from '../../../../java/nio/file/attribute/AclEntry$Builder.d.ts'
import type { AclEntryFlag } from '../../../../java/nio/file/attribute/AclEntryFlag.d.ts'
import type { AclEntryPermission } from '../../../../java/nio/file/attribute/AclEntryPermission.d.ts'
import type { AclEntryType } from '../../../../java/nio/file/attribute/AclEntryType.d.ts'
import type { UserPrincipal } from '../../../../java/nio/file/attribute/UserPrincipal.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class AclEntry extends Object {
    static newBuilder(): AclEntry$Builder;
    static newBuilder(paramarg0: AclEntry): AclEntry$Builder;
    private constructor(arg0: AclEntryType, arg1: UserPrincipal, arg2: AclEntryPermission[], arg3: AclEntryFlag[])
    // private flags: AclEntryFlag[];
    // private hash: number;
    // private perms: AclEntryPermission[];
    // private type: AclEntryType;
    // private who: UserPrincipal;
    equals(arg0: Object | null): boolean;
    flags(): AclEntryFlag[];
    hashCode(): number;
    permissions(): AclEntryPermission[];
    principal(): UserPrincipal;
    toString(): string;
    type(): AclEntryType;
}
import type { AclEntry } from '../../../../java/nio/file/attribute/AclEntry.d.ts'
import type { AclEntryFlag } from '../../../../java/nio/file/attribute/AclEntryFlag.d.ts'
import type { AclEntryPermission } from '../../../../java/nio/file/attribute/AclEntryPermission.d.ts'
import type { AclEntryType } from '../../../../java/nio/file/attribute/AclEntryType.d.ts'
import type { UserPrincipal } from '../../../../java/nio/file/attribute/UserPrincipal.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class AclEntry$Builder extends Object {
    private constructor(arg0: AclEntryType, arg1: UserPrincipal, arg2: AclEntryPermission[], arg3: AclEntryFlag[])
    // private flags: AclEntryFlag[];
    // private perms: AclEntryPermission[];
    // private type: AclEntryType;
    // private who: UserPrincipal;
    build(): AclEntry;
    setFlags(arg0: AclEntryFlag[]): AclEntry$Builder;
    setFlags(arg0: AclEntryFlag[]): AclEntry$Builder;
    setPermissions(arg0: AclEntryPermission[]): AclEntry$Builder;
    setPermissions(arg0: AclEntryPermission[]): AclEntry$Builder;
    setPrincipal(arg0: UserPrincipal): AclEntry$Builder;
    setType(arg0: AclEntryType): AclEntry$Builder;
}
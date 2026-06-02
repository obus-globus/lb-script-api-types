import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
export class AclEntryPermission extends Enum<AclEntryPermission> {
    static ADD_FILE: AclEntryPermission;
    static ADD_SUBDIRECTORY: AclEntryPermission;
    static APPEND_DATA: AclEntryPermission;
    static DELETE: AclEntryPermission;
    static DELETE_CHILD: AclEntryPermission;
    static EXECUTE: AclEntryPermission;
    static LIST_DIRECTORY: AclEntryPermission;
    static READ_ACL: AclEntryPermission;
    static READ_ATTRIBUTES: AclEntryPermission;
    static READ_DATA: AclEntryPermission;
    static READ_NAMED_ATTRS: AclEntryPermission;
    static SYNCHRONIZE: AclEntryPermission;
    static WRITE_ACL: AclEntryPermission;
    static WRITE_ATTRIBUTES: AclEntryPermission;
    static WRITE_DATA: AclEntryPermission;
    static WRITE_NAMED_ATTRS: AclEntryPermission;
    static WRITE_OWNER: AclEntryPermission;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): AclEntryPermission;
    static values(): (Object | null)[];
    private constructor()
    name(): "READ_DATA" | "WRITE_DATA" | "APPEND_DATA" | "READ_NAMED_ATTRS" | "WRITE_NAMED_ATTRS" | "EXECUTE" | "DELETE_CHILD" | "READ_ATTRIBUTES" | "WRITE_ATTRIBUTES" | "DELETE" | "READ_ACL" | "WRITE_ACL" | "WRITE_OWNER" | "SYNCHRONIZE";
}
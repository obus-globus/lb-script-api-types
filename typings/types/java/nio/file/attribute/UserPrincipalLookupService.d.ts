import type { GroupPrincipal } from '../../../../java/nio/file/attribute/GroupPrincipal.d.ts'
import type { UserPrincipal } from '../../../../java/nio/file/attribute/UserPrincipal.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export abstract class UserPrincipalLookupService extends Object {
    constructor()
    lookupPrincipalByGroupName(arg0: string): GroupPrincipal;
    lookupPrincipalByName(arg0: string): UserPrincipal;
}
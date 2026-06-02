import type { Object } from '../../../../java/lang/Object.d.ts'
export class UserIdentifier extends Object {
    static fromHomeAccountId(paramarg0: string): UserIdentifier;
    static fromUpn(paramarg0: string): UserIdentifier;
    private constructor()
    // private oid: string;
    // private upn: string;
    oid(): string;
    upn(): string;
}
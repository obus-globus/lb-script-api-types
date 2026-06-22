import type { UserPrincipal } from '../../../../java/nio/file/attribute/UserPrincipal.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export interface GroupPrincipal extends UserPrincipal, Object{
    getName(): string;
}
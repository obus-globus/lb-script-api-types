import type { Principal } from '../../../../java/security/Principal.d.ts'
import type { Subject } from '../../../../javax/security/auth/Subject.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export interface UserPrincipal extends Principal, Object{
    implies(arg0: Subject): boolean;
}
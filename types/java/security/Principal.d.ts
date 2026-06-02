import type { Subject } from '../../javax/security/auth/Subject.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
export interface Principal extends Object{
    getName(): string;
    implies(arg0: Subject): boolean;
}
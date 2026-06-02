import type { ProtectionDomain } from '../../java/security/ProtectionDomain.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
export interface DomainCombiner extends Object{
    combine(arg0: ProtectionDomain[], arg1: ProtectionDomain[]): ProtectionDomain[];
}
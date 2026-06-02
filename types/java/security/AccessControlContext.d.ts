import type { DomainCombiner } from '../../java/security/DomainCombiner.d.ts'
import type { Permission } from '../../java/security/Permission.d.ts'
import type { ProtectionDomain } from '../../java/security/ProtectionDomain.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
export class AccessControlContext extends Object {
    constructor(arg0: AccessControlContext, arg1: DomainCombiner)
    constructor(arg0: ProtectionDomain[])
    // private combiner: DomainCombiner;
    // private context: ProtectionDomain[];
    checkPermission(arg0: Permission): void;
    // private equalContext(arg0: AccessControlContext): boolean;
    // private equalPDs(arg0: ProtectionDomain[], arg1: ProtectionDomain[]): boolean;
    equals(arg0: Object | null): boolean;
    getDomainCombiner(): DomainCombiner;
    hashCode(): number;
}
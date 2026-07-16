import type { Class } from '../../../java/lang/Class.d.ts'
import type { Enum } from '../../../java/lang/Enum.d.ts'
export class SandboxPolicy extends Enum<SandboxPolicy> {
    static CONSTRAINED: SandboxPolicy;
    static ISOLATED: SandboxPolicy;
    static TRUSTED: SandboxPolicy;
    static UNTRUSTED: SandboxPolicy;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramname: string): SandboxPolicy;
    static values(): SandboxPolicy[];
    private constructor()
    isStricterOrEqual(other: SandboxPolicy): boolean;
    isStricterThan(other: SandboxPolicy): boolean;
    name(): "TRUSTED" | "CONSTRAINED" | "ISOLATED" | "UNTRUSTED";
}
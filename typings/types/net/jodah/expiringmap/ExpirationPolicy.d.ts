import type { Class } from '../../../java/lang/Class.d.ts'
import type { Enum } from '../../../java/lang/Enum.d.ts'
export class ExpirationPolicy extends Enum<ExpirationPolicy> {
    static ACCESSED: ExpirationPolicy;
    static CREATED: ExpirationPolicy;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): ExpirationPolicy;
    static values(): ExpirationPolicy[];
    private constructor()
    name(): "ACCESSED" | "CREATED";
}
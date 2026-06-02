import type { Class } from '../../../java/lang/Class.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { Enum } from '../../../java/lang/Enum.d.ts'
export class ExpirationPolicy extends Enum<ExpirationPolicy> {
    static ACCESSED: ExpirationPolicy;
    static CREATED: ExpirationPolicy;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): ExpirationPolicy;
    static values(): (Object | null)[];
    private constructor()
    name(): "ACCESSED" | "CREATED";
}
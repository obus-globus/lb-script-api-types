import type { Class } from '../../../java/lang/Class.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { Enum } from '../../../java/lang/Enum.d.ts'
export class RetentionPolicy extends Enum<RetentionPolicy> {
    static CLASS: RetentionPolicy;
    static RUNTIME: RetentionPolicy;
    static SOURCE: RetentionPolicy;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): RetentionPolicy;
    static values(): (Object | null)[];
    private constructor()
    name(): "SOURCE" | "CLASS" | "RUNTIME";
}
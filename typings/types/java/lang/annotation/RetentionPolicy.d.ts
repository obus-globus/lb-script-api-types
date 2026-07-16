import type { Class } from '../../../java/lang/Class.d.ts'
import type { Enum } from '../../../java/lang/Enum.d.ts'
export class RetentionPolicy extends Enum<RetentionPolicy> {
    static CLASS: RetentionPolicy;
    static RUNTIME: RetentionPolicy;
    static SOURCE: RetentionPolicy;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): RetentionPolicy;
    static values(): RetentionPolicy[];
    private constructor()
    name(): "SOURCE" | "CLASS" | "RUNTIME";
}
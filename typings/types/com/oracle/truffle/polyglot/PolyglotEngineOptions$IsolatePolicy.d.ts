import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
export class PolyglotEngineOptions$IsolatePolicy extends Enum<PolyglotEngineOptions$IsolatePolicy> {
    static EXTERNAL: PolyglotEngineOptions$IsolatePolicy;
    static INTERNAL: PolyglotEngineOptions$IsolatePolicy;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramname: string): PolyglotEngineOptions$IsolatePolicy;
    static values(): PolyglotEngineOptions$IsolatePolicy[];
    private constructor()
    toString(): string;
    name(): "INTERNAL" | "EXTERNAL";
}
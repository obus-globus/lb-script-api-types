import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
export class PolyglotEngineOptions$UntrustedCodeMitigationPolicy extends Enum<PolyglotEngineOptions$UntrustedCodeMitigationPolicy> {
    static HARDWARE: PolyglotEngineOptions$UntrustedCodeMitigationPolicy;
    static NONE: PolyglotEngineOptions$UntrustedCodeMitigationPolicy;
    static SOFTWARE: PolyglotEngineOptions$UntrustedCodeMitigationPolicy;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramname: string): PolyglotEngineOptions$UntrustedCodeMitigationPolicy;
    static values(): PolyglotEngineOptions$UntrustedCodeMitigationPolicy[];
    private constructor()
    toString(): string;
    name(): "NONE" | "HARDWARE" | "SOFTWARE";
}
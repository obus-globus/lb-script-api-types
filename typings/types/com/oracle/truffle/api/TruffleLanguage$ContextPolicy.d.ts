import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
export class TruffleLanguage$ContextPolicy extends Enum<TruffleLanguage$ContextPolicy> {
    static EXCLUSIVE: TruffleLanguage$ContextPolicy;
    static REUSE: TruffleLanguage$ContextPolicy;
    static SHARED: TruffleLanguage$ContextPolicy;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramname: string): TruffleLanguage$ContextPolicy;
    static values(): TruffleLanguage$ContextPolicy[];
    private constructor()
    name(): "EXCLUSIVE" | "REUSE" | "SHARED";
}
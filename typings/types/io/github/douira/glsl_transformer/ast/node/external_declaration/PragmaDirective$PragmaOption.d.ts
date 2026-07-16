import type { TokenTyped } from '../../../../../../../io/github/douira/glsl_transformer/ast/data/TokenTyped.d.ts'
import type { Class } from '../../../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../../../java/lang/Enum.d.ts'
import type { Token } from '../../../../../../../org/antlr/v4/runtime/Token.d.ts'
export class PragmaDirective$PragmaOption extends Enum<PragmaDirective$PragmaOption> implements TokenTyped {
    static FASTMATH: PragmaDirective$PragmaOption;
    static FASTPRECISION: PragmaDirective$PragmaOption;
    static IFCVT: PragmaDirective$PragmaOption;
    static INLINE: PragmaDirective$PragmaOption;
    static STRICT: PragmaDirective$PragmaOption;
    static UNROLL: PragmaDirective$PragmaOption;
    static fromToken(paramarg0: Token): PragmaDirective$PragmaOption;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): PragmaDirective$PragmaOption;
    static values(): PragmaDirective$PragmaOption[];
    private constructor(arg2: number)
    readonly tokenType: number;
    getTokenType(): number;
    name(): "UNROLL" | "INLINE" | "IFCVT" | "STRICT" | "FASTMATH" | "FASTPRECISION";
}
import type { TokenTyped } from '../../../../../../../io/github/douira/glsl_transformer/ast/data/TokenTyped.d.ts'
import type { Class } from '../../../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../../../java/lang/Enum.d.ts'
import type { Token } from '../../../../../../../org/antlr/v4/runtime/Token.d.ts'
export class PragmaDirective$PragmaState extends Enum<PragmaDirective$PragmaState> implements TokenTyped {
    static ALL: PragmaDirective$PragmaState;
    static NONE: PragmaDirective$PragmaState;
    static OFF: PragmaDirective$PragmaState;
    static ON: PragmaDirective$PragmaState;
    static fromToken(paramarg0: Token): PragmaDirective$PragmaState;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): PragmaDirective$PragmaState;
    static values(): PragmaDirective$PragmaState[];
    private constructor(arg2: number)
    readonly tokenType: number;
    getTokenType(): number;
    name(): "ON" | "OFF" | "ALL" | "NONE";
}
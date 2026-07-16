import type { TokenTyped } from '../../../../../../../io/github/douira/glsl_transformer/ast/data/TokenTyped.d.ts'
import type { Class } from '../../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../../java/lang/Enum.d.ts'
import type { Token } from '../../../../../../../org/antlr/v4/runtime/Token.d.ts'
export class PragmaDirective$PragmaType extends Enum<PragmaDirective$PragmaType> implements TokenTyped {
    static CUSTOM: PragmaDirective$PragmaType;
    static DEBUG: PragmaDirective$PragmaType;
    static INVARIANT: PragmaDirective$PragmaType;
    static OPTIMIZE: PragmaDirective$PragmaType;
    static OPTIONNV: PragmaDirective$PragmaType;
    static fromToken(paramarg0: Token): PragmaDirective$PragmaType;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): PragmaDirective$PragmaType;
    static values(): PragmaDirective$PragmaType[];
    private constructor(arg2: number)
    readonly tokenType: number;
    getTokenType(): number;
    name(): "DEBUG" | "OPTIMIZE" | "INVARIANT" | "CUSTOM" | "OPTIONNV";
}
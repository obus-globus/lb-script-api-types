import type { TokenTyped } from '../../../../../../io/github/douira/glsl_transformer/ast/data/TokenTyped.d.ts'
import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../../java/lang/Enum.d.ts'
import type { Token } from '../../../../../../org/antlr/v4/runtime/Token.d.ts'
export class Profile extends Enum<Profile> implements TokenTyped {
    static COMPATIBILITY: Profile;
    static CORE: Profile;
    static ES: Profile;
    static fromToken(paramarg0: Token): Profile;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): Profile;
    static values(): Profile[];
    private constructor(arg2: number)
    readonly tokenType: number;
    getTokenType(): number;
    isCompatibility(): boolean;
    isCore(): boolean;
    name(): "CORE" | "COMPATIBILITY" | "ES";
}
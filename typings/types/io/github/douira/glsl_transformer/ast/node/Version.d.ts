import type { TokenTyped } from '../../../../../../io/github/douira/glsl_transformer/ast/data/TokenTyped.d.ts'
import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../java/lang/Enum.d.ts'
import type { Token } from '../../../../../../org/antlr/v4/runtime/Token.d.ts'
export class Version extends Enum<Version> implements TokenTyped {
    static GLSL11: Version;
    static GLSL12: Version;
    static GLSL13: Version;
    static GLSL14: Version;
    static GLSL15: Version;
    static GLSL33: Version;
    static GLSL40: Version;
    static GLSL41: Version;
    static GLSL42: Version;
    static GLSL43: Version;
    static GLSL44: Version;
    static GLSL45: Version;
    static GLSL46: Version;
    static GLSLES10: Version;
    static GLSLES30: Version;
    static GLSLES31: Version;
    static GLSLES32: Version;
    static latest: Version;
    static fromNumber(paramarg0: number): Version;
    static fromToken(paramarg0: Token): Version;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): Version;
    static values(): Version[];
    private constructor(arg2: number, arg3: number)
    private constructor(arg2: number, arg3: number, arg4: boolean)
    es: boolean;
    number: number;
    readonly tokenType: number;
    getTokenType(): number;
    name(): "GLSLES10" | "GLSLES30" | "GLSLES31" | "GLSLES32" | "GLSL11" | "GLSL12" | "GLSL13" | "GLSL14" | "GLSL15" | "GLSL33" | "GLSL40" | "GLSL41" | "GLSL42" | "GLSL43" | "GLSL44" | "GLSL45" | "GLSL46";
}
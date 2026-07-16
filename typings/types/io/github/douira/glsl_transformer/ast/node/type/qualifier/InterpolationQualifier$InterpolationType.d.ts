import type { TokenTyped } from '../../../../../../../../io/github/douira/glsl_transformer/ast/data/TokenTyped.d.ts'
import type { Class } from '../../../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../../../java/lang/Enum.d.ts'
import type { Token } from '../../../../../../../../org/antlr/v4/runtime/Token.d.ts'
export class InterpolationQualifier$InterpolationType extends Enum<InterpolationQualifier$InterpolationType> implements TokenTyped {
    static FLAT: InterpolationQualifier$InterpolationType;
    static NOPERSPECTIVE: InterpolationQualifier$InterpolationType;
    static SMOOTH: InterpolationQualifier$InterpolationType;
    static fromToken(paramarg0: Token): InterpolationQualifier$InterpolationType;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): InterpolationQualifier$InterpolationType;
    static values(): InterpolationQualifier$InterpolationType[];
    private constructor(arg2: number)
    readonly tokenType: number;
    getTokenType(): number;
    name(): "SMOOTH" | "FLAT" | "NOPERSPECTIVE";
}
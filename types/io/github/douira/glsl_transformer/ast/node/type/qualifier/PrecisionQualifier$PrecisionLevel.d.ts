import type { TokenTyped } from '../../../../../../../../io/github/douira/glsl_transformer/ast/data/TokenTyped.d.ts'
import type { Class } from '../../../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../../../java/lang/Enum.d.ts'
import type { Token } from '../../../../../../../../org/antlr/v4/runtime/Token.d.ts'
export class PrecisionQualifier$PrecisionLevel extends Enum<PrecisionQualifier$PrecisionLevel> implements TokenTyped {
    static HIGH: PrecisionQualifier$PrecisionLevel;
    static LOW: PrecisionQualifier$PrecisionLevel;
    static MEDIUM: PrecisionQualifier$PrecisionLevel;
    static fromToken(paramarg0: Token): PrecisionQualifier$PrecisionLevel;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): PrecisionQualifier$PrecisionLevel;
    static values(): (Object | null)[];
    private constructor(arg2: number)
    readonly tokenType: number;
    getTokenType(): number;
    name(): "HIGH" | "MEDIUM" | "LOW";
}
import type { TokenTyped } from '../../../../../../../io/github/douira/glsl_transformer/ast/data/TokenTyped.d.ts'
import type { Class } from '../../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../../java/lang/Enum.d.ts'
import type { Token } from '../../../../../../../org/antlr/v4/runtime/Token.d.ts'
export class LayoutDefaults$LayoutMode extends Enum<LayoutDefaults$LayoutMode> implements TokenTyped {
    static BUFFER: LayoutDefaults$LayoutMode;
    static IN: LayoutDefaults$LayoutMode;
    static OUT: LayoutDefaults$LayoutMode;
    static UNIFORM: LayoutDefaults$LayoutMode;
    static fromToken(paramarg0: Token): LayoutDefaults$LayoutMode;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): LayoutDefaults$LayoutMode;
    static values(): LayoutDefaults$LayoutMode[];
    private constructor(arg2: number)
    readonly tokenType: number;
    getTokenType(): number;
    name(): "UNIFORM" | "IN" | "OUT" | "BUFFER";
}
import type { TokenTyped } from '../../../../../../../io/github/douira/glsl_transformer/ast/data/TokenTyped.d.ts'
import type { Class } from '../../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../../java/lang/Enum.d.ts'
import type { Token } from '../../../../../../../org/antlr/v4/runtime/Token.d.ts'
export class ExtensionDirective$ExtensionBehavior extends Enum<ExtensionDirective$ExtensionBehavior> implements TokenTyped {
    static DEBUG: ExtensionDirective$ExtensionBehavior;
    static DISABLE: ExtensionDirective$ExtensionBehavior;
    static ENABLE: ExtensionDirective$ExtensionBehavior;
    static WARN: ExtensionDirective$ExtensionBehavior;
    static fromToken(paramarg0: Token): ExtensionDirective$ExtensionBehavior;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): ExtensionDirective$ExtensionBehavior;
    static values(): ExtensionDirective$ExtensionBehavior[];
    private constructor(arg2: number)
    readonly tokenType: number;
    getTokenType(): number;
    name(): "DEBUG" | "ENABLE" | "WARN" | "DISABLE";
}
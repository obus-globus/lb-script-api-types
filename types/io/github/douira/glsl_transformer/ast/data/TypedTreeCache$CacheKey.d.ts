import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { ParserRuleContext } from '../../../../../../org/antlr/v4/runtime/ParserRuleContext.d.ts'
export class TypedTreeCache$CacheKey extends Object {
    constructor(arg0: string, arg1: Class<ParserRuleContext>)
    // private input: string;
    // private ruleType: Class<ParserRuleContext>;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
}
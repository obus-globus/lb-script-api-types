import type { ParserRuleContext } from '../../../../org/antlr/v4/runtime/ParserRuleContext.d.ts'
export class RuleContextWithAltNum extends ParserRuleContext {
    static EMPTY: ParserRuleContext;
    constructor()
    constructor(arg0: ParserRuleContext, arg1: number)
    altNum: number;
    getAltNumber(): number;
    setAltNumber(arg0: number): void;
}
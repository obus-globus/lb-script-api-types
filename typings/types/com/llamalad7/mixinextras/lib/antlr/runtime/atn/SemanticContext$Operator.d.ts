import type { SemanticContext } from '../../../../../../../com/llamalad7/mixinextras/lib/antlr/runtime/atn/SemanticContext.d.ts'
export abstract class SemanticContext$Operator extends SemanticContext {
    static and(paramarg0: SemanticContext, paramarg1: SemanticContext): SemanticContext;
    static or(paramarg0: SemanticContext, paramarg1: SemanticContext): SemanticContext;
    constructor()
}
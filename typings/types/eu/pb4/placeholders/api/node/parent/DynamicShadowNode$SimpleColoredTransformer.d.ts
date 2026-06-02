import type { ParserContext } from '../../../../../../eu/pb4/placeholders/api/ParserContext.d.ts'
import type { DynamicShadowNode$Transformer } from '../../../../../../eu/pb4/placeholders/api/node/parent/DynamicShadowNode$Transformer.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Component } from '../../../../../../net/minecraft/network/chat/Component.d.ts'
export interface DynamicShadowNode$SimpleColoredTransformer extends DynamicShadowNode$Transformer, Object{
    applyShadowColors(arg0: Component, arg1: number, arg2: number, arg3: ParserContext): Component;
    getDefaultShadowColor(arg0: Component, arg1: number, arg2: number, arg3: ParserContext): number;
    hasShadowColor(arg0: ParserContext): boolean;
}
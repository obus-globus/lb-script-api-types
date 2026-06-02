import type { ParserContext } from '../../../../../../eu/pb4/placeholders/api/ParserContext.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Component } from '../../../../../../net/minecraft/network/chat/Component.d.ts'
export interface DynamicShadowNode$Transformer extends Object{
    applyShadowColors(arg0: Component, arg1: number, arg2: number, arg3: ParserContext): Component;
    hasShadowColor(arg0: ParserContext): boolean;
}
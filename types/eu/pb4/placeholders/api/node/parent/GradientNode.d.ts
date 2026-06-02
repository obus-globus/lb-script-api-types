import type { ParserContext } from '../../../../../../eu/pb4/placeholders/api/ParserContext.d.ts'
import type { TextNode } from '../../../../../../eu/pb4/placeholders/api/node/TextNode.d.ts'
import type { DynamicShadowNode$Transformer } from '../../../../../../eu/pb4/placeholders/api/node/parent/DynamicShadowNode$Transformer.d.ts'
import type { GradientNode$GradientProvider } from '../../../../../../eu/pb4/placeholders/api/node/parent/GradientNode$GradientProvider.d.ts'
import type { ParentNode } from '../../../../../../eu/pb4/placeholders/api/node/parent/ParentNode.d.ts'
import type { ParentTextNode } from '../../../../../../eu/pb4/placeholders/api/node/parent/ParentTextNode.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Component } from '../../../../../../net/minecraft/network/chat/Component.d.ts'
import type { MutableComponent } from '../../../../../../net/minecraft/network/chat/MutableComponent.d.ts'
import type { TextColor } from '../../../../../../net/minecraft/network/chat/TextColor.d.ts'
export class GradientNode extends ParentNode implements DynamicShadowNode$Transformer {
    static EMPTY: ParentNode;
    static apply(paramarg0: Component, paramarg1: (param0: number, param1: number) => net.minecraft.network.chat.TextColor): Component;
    static colors(paramarg0: TextColor[], paramarg1: (Object | null)[]): GradientNode;
    static colors(paramarg0: TextColor, paramarg1: TextColor, paramarg2: (Object | null)[]): GradientNode;
    static colorsHard(paramarg0: TextColor[], paramarg1: (Object | null)[]): GradientNode;
    static colorsHard(paramarg0: TextColor, paramarg1: TextColor, paramarg2: (Object | null)[]): GradientNode;
    static rainbow(paramarg0: (Object | null)[]): GradientNode;
    static rainbow(paramarg0: number, paramarg1: (Object | null)[]): GradientNode;
    static rainbow(paramarg0: number, paramarg1: number, paramarg2: (Object | null)[]): GradientNode;
    static rainbow(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (Object | null)[]): GradientNode;
    static rainbow(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: (Object | null)[]): GradientNode;
    static rainbow(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: number, paramarg5: (Object | null)[]): GradientNode;
    constructor(arg0: TextNode[], arg1: (param0: number, param1: number) => net.minecraft.network.chat.TextColor)
    // private gradientProvider: (param0: number, param1: number) => net.minecraft.network.chat.TextColor;
    applyFormatting(arg0: MutableComponent, arg1: ParserContext): Component;
    applyShadowColors(arg0: Component, arg1: number, arg2: number, arg3: ParserContext): Component;
    copyWith(arg0: TextNode[]): ParentTextNode;
    hasShadowColor(arg0: ParserContext): boolean;
    toString(): string;
}
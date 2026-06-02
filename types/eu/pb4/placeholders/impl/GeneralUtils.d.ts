import type { TextNode } from '../../../../eu/pb4/placeholders/api/node/TextNode.d.ts'
import type { GradientNode$GradientProvider } from '../../../../eu/pb4/placeholders/api/node/parent/GradientNode$GradientProvider.d.ts'
import type { ParentNode } from '../../../../eu/pb4/placeholders/api/node/parent/ParentNode.d.ts'
import type { Optional } from '../../../../java/util/Optional.d.ts'
import type { Function } from '../../../../java/util/function/Function.d.ts'
import type { Predicate } from '../../../../java/util/function/Predicate.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Component } from '../../../../net/minecraft/network/chat/Component.d.ts'
import type { MutableComponent } from '../../../../net/minecraft/network/chat/MutableComponent.d.ts'
import type { ObjectInfo } from '../../../../net/minecraft/network/chat/contents/objects/ObjectInfo.d.ts'
import type { ItemStack } from '../../../../net/minecraft/world/item/ItemStack.d.ts'
import type { Logger } from '../../../../org/slf4j/Logger.d.ts'
export class GeneralUtils extends Object {
    static CASTER: (Object | null)[];
    static IS_DEV: boolean;
    static LOGGER: Logger;
    static cloneText(paramarg0: Component): MutableComponent;
    static cloneTransformText(paramarg0: Component, paramarg1: (param0: MutableComponent) => MutableComponent): MutableComponent;
    static cloneTransformText(paramarg0: Component, paramarg1: (param0: MutableComponent) => MutableComponent, paramarg2: (param0: Component) => kotlin.Boolean): MutableComponent;
    static convertToNodes(paramarg0: Component): ParentNode;
    static deepTransform(paramarg0: Component): Component;
    static durationToString(paramarg0: number): string;
    static getItemText(paramarg0: ItemStack, paramarg1: boolean): Component;
    static isEmpty(paramarg0: Component): boolean;
    static objectComponent(paramarg0: ObjectInfo, paramarg1: Optional<Component>): MutableComponent;
    static removeColors(paramarg0: TextNode): TextNode;
    static removeHoverAndClick(paramarg0: Component): Component;
    static rgbToInt(paramarg0: number, paramarg1: number, paramarg2: number): number;
    static toGradient(paramarg0: Component, paramarg1: (param0: number, param1: number) => net.minecraft.network.chat.TextColor): MutableComponent;
    static toGradientShadow(paramarg0: Component, paramarg1: number, paramarg2: number, paramarg3: (param0: number, param1: number) => net.minecraft.network.chat.TextColor): MutableComponent;
    constructor()
}
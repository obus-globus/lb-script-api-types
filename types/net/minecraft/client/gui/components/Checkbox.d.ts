import type { Font } from '../../../../../net/minecraft/client/gui/Font.d.ts'
import type { GuiGraphicsExtractor } from '../../../../../net/minecraft/client/gui/GuiGraphicsExtractor.d.ts'
import type { AbstractButton } from '../../../../../net/minecraft/client/gui/components/AbstractButton.d.ts'
import type { Checkbox$Builder } from '../../../../../net/minecraft/client/gui/components/Checkbox$Builder.d.ts'
import type { Checkbox$OnValueChange } from '../../../../../net/minecraft/client/gui/components/Checkbox$OnValueChange.d.ts'
import type { MultiLineTextWidget } from '../../../../../net/minecraft/client/gui/components/MultiLineTextWidget.d.ts'
import type { NarrationElementOutput } from '../../../../../net/minecraft/client/gui/narration/NarrationElementOutput.d.ts'
import type { InputWithModifiers } from '../../../../../net/minecraft/client/input/InputWithModifiers.d.ts'
import type { SoundManager } from '../../../../../net/minecraft/client/sounds/SoundManager.d.ts'
import type { Component } from '../../../../../net/minecraft/network/chat/Component.d.ts'
import type { MutableComponent } from '../../../../../net/minecraft/network/chat/MutableComponent.d.ts'
export class Checkbox extends AbstractButton {
    static builder(parammessage: Component, paramfont: Font): Checkbox$Builder;
    static defaultInactiveMessage(paramactiveMessage: Component): Component;
    static getBoxSize(paramfont: Font): number;
    static playButtonClickSound(paramsoundManager: SoundManager): void;
    static wrapDefaultNarrationMessage(parammessage: Component): MutableComponent;
    private constructor(x: number, y: number, maxWidth: number, message: Component, font: Font, selected: boolean, onValueChange: Checkbox$OnValueChange)
    // private onValueChange: Checkbox$OnValueChange;
    // private selected: boolean;
    // private textWidget: MultiLineTextWidget;
    adjustWidth(maxWidth: number, font: Font): number;
    extractContents(graphics: GuiGraphicsExtractor, mouseX: number, mouseY: number, a: number): void;
    // private getAdjustedHeight(font: Font): number;
    // private getAdjustedWidth(maxWidth: number, message: Component, font: Font): number;
    onPress(input: InputWithModifiers): void;
    // private overflowsRowLimit(font: Font): boolean;
    selected(): boolean;
    updateWidgetNarration(output: NarrationElementOutput): void;
}
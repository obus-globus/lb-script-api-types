import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { Font } from '../../../../../net/minecraft/client/gui/Font.d.ts'
import type { GuiGraphicsExtractor } from '../../../../../net/minecraft/client/gui/GuiGraphicsExtractor.d.ts'
import type { AbstractScrollArea$ScrollbarSettings } from '../../../../../net/minecraft/client/gui/components/AbstractScrollArea$ScrollbarSettings.d.ts'
import type { AbstractTextAreaWidget } from '../../../../../net/minecraft/client/gui/components/AbstractTextAreaWidget.d.ts'
import type { IMEPreeditOverlay } from '../../../../../net/minecraft/client/gui/components/IMEPreeditOverlay.d.ts'
import type { MultiLineEditBox$Builder } from '../../../../../net/minecraft/client/gui/components/MultiLineEditBox$Builder.d.ts'
import type { MultilineTextField } from '../../../../../net/minecraft/client/gui/components/MultilineTextField.d.ts'
import type { NarrationElementOutput } from '../../../../../net/minecraft/client/gui/narration/NarrationElementOutput.d.ts'
import type { CharacterEvent } from '../../../../../net/minecraft/client/input/CharacterEvent.d.ts'
import type { KeyEvent } from '../../../../../net/minecraft/client/input/KeyEvent.d.ts'
import type { MouseButtonEvent } from '../../../../../net/minecraft/client/input/MouseButtonEvent.d.ts'
import type { PreeditEvent } from '../../../../../net/minecraft/client/input/PreeditEvent.d.ts'
import type { SoundManager } from '../../../../../net/minecraft/client/sounds/SoundManager.d.ts'
import type { Component } from '../../../../../net/minecraft/network/chat/Component.d.ts'
import type { MutableComponent } from '../../../../../net/minecraft/network/chat/MutableComponent.d.ts'
export class MultiLineEditBox extends AbstractTextAreaWidget {
    static DEFAULT_TOTAL_PADDING: number;
    static SCROLLBAR_WIDTH: number;
    static builder(): MultiLineEditBox$Builder;
    static defaultSettings(paramscrollRate: number): AbstractScrollArea$ScrollbarSettings;
    static playButtonClickSound(paramsoundManager: SoundManager): void;
    static wrapDefaultNarrationMessage(parammessage: Component): MutableComponent;
    private constructor(font: Font, x: number, y: number, width: number, height: number, placeholder: Component, narration: Component, textColor: number, textShadow: boolean, cursorColor: number, showBackground: boolean, showDecorations: boolean)
    // private cursorColor: number;
    // private focusedTime: number;
    // private font: Font;
    // private placeholder: Component;
    // private preeditOverlay: IMEPreeditOverlay;
    // private textColor: number;
    // private textField: MultilineTextField;
    // private textShadow: boolean;
    charTyped(event: CharacterEvent): boolean;
    extractContents(graphics: GuiGraphicsExtractor, mouseX: number, mouseY: number, a: number): void;
    extractDecorations(graphics: GuiGraphicsExtractor): void;
    getInnerHeight(): number;
    getValue(): string;
    keyPressed(event: KeyEvent): boolean;
    onClick(event: MouseButtonEvent, doubleClick: boolean): void;
    onDrag(event: MouseButtonEvent, dx: number, dy: number): void;
    preeditUpdated(event: PreeditEvent): boolean;
    // private scrollToCursor(): void;
    // private seekCursorScreen(x: number, y: number): void;
    setCharacterLimit(characterLimit: number): void;
    setFocused(focused: boolean): void;
    setLineLimit(lineLimit: number): void;
    setValue(value: string): void;
    setValue(value: string, allowOverflowLineLimit: boolean): void;
    setValueListener(valueListener: (param0: string) => void): void;
    updateWidgetNarration(output: NarrationElementOutput): void;
}
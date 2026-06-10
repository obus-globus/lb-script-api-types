import type { IEditBox } from '../../../../../com/viaversion/viafabricplus/injection/access/core/IEditBox.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { Font } from '../../../../../net/minecraft/client/gui/Font.d.ts'
import type { GuiGraphicsExtractor } from '../../../../../net/minecraft/client/gui/GuiGraphicsExtractor.d.ts'
import type { AbstractWidget } from '../../../../../net/minecraft/client/gui/components/AbstractWidget.d.ts'
import type { EditBox$TextFormatter } from '../../../../../net/minecraft/client/gui/components/EditBox$TextFormatter.d.ts'
import type { IMEPreeditOverlay } from '../../../../../net/minecraft/client/gui/components/IMEPreeditOverlay.d.ts'
import type { NarrationElementOutput } from '../../../../../net/minecraft/client/gui/narration/NarrationElementOutput.d.ts'
import type { CharacterEvent } from '../../../../../net/minecraft/client/input/CharacterEvent.d.ts'
import type { KeyEvent } from '../../../../../net/minecraft/client/input/KeyEvent.d.ts'
import type { MouseButtonEvent } from '../../../../../net/minecraft/client/input/MouseButtonEvent.d.ts'
import type { PreeditEvent } from '../../../../../net/minecraft/client/input/PreeditEvent.d.ts'
import type { SoundManager } from '../../../../../net/minecraft/client/sounds/SoundManager.d.ts'
import type { Component } from '../../../../../net/minecraft/network/chat/Component.d.ts'
import type { MutableComponent } from '../../../../../net/minecraft/network/chat/MutableComponent.d.ts'
import type { Style } from '../../../../../net/minecraft/network/chat/Style.d.ts'
import type { FormattedCharSequence } from '../../../../../net/minecraft/util/FormattedCharSequence.d.ts'
import type { FormattedCharSink } from '../../../../../net/minecraft/util/FormattedCharSink.d.ts'
export class EditBox extends AbstractWidget implements IEditBox {
    static BACKWARDS: number;
    static DEFAULT_HINT_STYLE: Style;
    static DEFAULT_TEXT_COLOR: number;
    static FORWARDS: number;
    static SEARCH_HINT_STYLE: Style;
    static playButtonClickSound(paramsoundManager: SoundManager): void;
    static wrapDefaultNarrationMessage(parammessage: Component): MutableComponent;
    constructor(font: Font, x: number, y: number, width: number, height: number, oldBox: EditBox, narration: Component)
    constructor(font: Font, x: number, y: number, width: number, height: number, narration: Component)
    constructor(font: Font, width: number, height: number, narration: Component)
    readonly bordered: boolean;
    readonly canLoseFocus: boolean;
    readonly centered: boolean;
    // private cursorPos: number;
    // private displayPos: number;
    // private focusedTime: number;
    // private font: Font;
    // private formatters: (param0: string, param1: number) => (param0: (param0: number, param1: Style, param2: number) => boolean) => boolean[];
    readonly highlightPos: number;
    readonly hint: Component;
    readonly invertHighlightedTextColor: boolean;
    // private isEditable: boolean;
    readonly maxLength: number;
    // private preeditOverlay: IMEPreeditOverlay;
    readonly responder: (param0: string) => void;
    readonly suggestion: string;
    readonly textColor: number;
    readonly textColorUneditable: number;
    readonly textShadow: boolean;
    // private textX: number;
    // private textY: number;
    readonly value: string;
    // private viaFabricPlus$forbiddenCharactersUnlocked: boolean;
    addFormatter(formatter: (param0: string, param1: number) => (param0: (param0: number, param1: Style, param2: number) => boolean) => boolean): void;
    // private applyFormat(text: string, offset: number): (param0: (param0: number, param1: Style, param2: number) => boolean) => boolean;
    canConsumeInput(): boolean;
    charTyped(event: CharacterEvent): boolean;
    createNarrationMessage(): MutableComponent;
    deleteChars(dir: number): void;
    deleteCharsToPos(pos: number): void;
    // private deleteText(dir: number, wholeWord: boolean): void;
    deleteWords(dir: number): void;
    extractWidgetRenderState(graphics: GuiGraphicsExtractor, mouseX: number, mouseY: number, a: number): void;
    // private findClickedPositionInText(event: MouseButtonEvent): number;
    // private getCursorPos(dir: number): number;
    getCursorPosition(): number;
    getHighlighted(): string;
    getInnerWidth(): number;
    getMaxLength(): number;
    getScreenX(charIndex: number): number;
    getValue(): string;
    getWordPosition(dir: number): number;
    // private getWordPosition(dir: number, from: number): number;
    // private getWordPosition(dir: number, from: number, stripSpaces: boolean): number;
    insertText(input: string): void;
    isBordered(): boolean;
    // private isCentered(): boolean;
    // private isEditable(): boolean;
    isVisible(): boolean;
    keyPressed(event: KeyEvent): boolean;
    moveCursor(dir: number, hasShiftDown: boolean): void;
    moveCursorTo(dir: number, extendSelection: boolean): void;
    moveCursorToEnd(hasShiftDown: boolean): void;
    moveCursorToStart(hasShiftDown: boolean): void;
    onClick(event: MouseButtonEvent, doubleClick: boolean): void;
    onDrag(event: MouseButtonEvent, dx: number, dy: number): void;
    // private onValueChange(value: string): void;
    playDownSound(soundManager: SoundManager): void;
    preeditUpdated(event: PreeditEvent): boolean;
    // private scrollTo(pos: number): void;
    // private selectWord(event: MouseButtonEvent): void;
    setBordered(bordered: boolean): void;
    setCanLoseFocus(canLoseFocus: boolean): void;
    setCentered(centered: boolean): void;
    setCursorPosition(pos: number): void;
    setEditable(isEditable: boolean): void;
    setFocused(focused: boolean): void;
    setHighlightPos(pos: number): void;
    setHint(hint: Component): void;
    setInvertHighlightedTextColor(invertHighlightedTextColor: boolean): void;
    setMaxLength(maxLength: number): void;
    setResponder(responder: (param0: string) => void): void;
    setSuggestion(suggestion: string): void;
    setTextColor(textColor: number): void;
    setTextColorUneditable(textColorUneditable: number): void;
    setTextShadow(textShadow: boolean): void;
    setValue(value: string): void;
    setVisible(visible: boolean): void;
    setX(x: number): void;
    setY(y: number): void;
    // private updateTextPosition(): void;
    updateWidgetNarration(output: NarrationElementOutput): void;
    viaFabricPlus$unlockForbiddenCharacters(): void;
}
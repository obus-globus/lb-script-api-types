import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { Predicate } from '../../../../../java/util/function/Predicate.d.ts'
import type { Supplier } from '../../../../../java/util/function/Supplier.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Minecraft } from '../../../../../net/minecraft/client/Minecraft.d.ts'
import type { TextFieldHelper$CursorStep } from '../../../../../net/minecraft/client/gui/font/TextFieldHelper$CursorStep.d.ts'
import type { CharacterEvent } from '../../../../../net/minecraft/client/input/CharacterEvent.d.ts'
import type { KeyEvent } from '../../../../../net/minecraft/client/input/KeyEvent.d.ts'
export class TextFieldHelper extends Object {
    static createClipboardGetter(paramminecraft: Minecraft): () => string;
    static createClipboardSetter(paramminecraft: Minecraft): (param0: string) => void;
    static getClipboardContents(paramminecraft: Minecraft): string;
    static setClipboardContents(paramminecraft: Minecraft, paramtext: string): void;
    constructor(getMessageFn: () => string, setMessageFn: (param0: string) => void, getClipboardFn: () => string, setClipboardFn: (param0: string) => void, stringValidator: (param0: string) => boolean)
    readonly cursorPos: number;
    // private getClipboardFn: () => string;
    // private getMessageFn: () => string;
    readonly selectionPos: number;
    // private setClipboardFn: (param0: string) => void;
    // private setMessageFn: (param0: string) => void;
    // private stringValidator: (param0: string) => boolean;
    charTyped(event: CharacterEvent): boolean;
    // private clampToMsgLength(value: number): number;
    copy(): void;
    cut(): void;
    // private deleteSelection(message: string): string;
    getCursorPos(): number;
    // private getSelected(text: string): string;
    getSelectionPos(): number;
    insertText(text: string): void;
    // private insertText(message: string, text: string): void;
    isSelecting(): boolean;
    keyPressed(event: KeyEvent): boolean;
    moveBy(count: number, selecting: boolean, scope: TextFieldHelper$CursorStep): void;
    moveByChars(count: number): void;
    moveByChars(count: number, selecting: boolean): void;
    moveByWords(count: number): void;
    moveByWords(count: number, selecting: boolean): void;
    paste(): void;
    removeCharsFromCursor(count: number): void;
    removeFromCursor(count: number, scope: TextFieldHelper$CursorStep): void;
    removeWordsFromCursor(count: number): void;
    // private resetSelectionIfNeeded(selecting: boolean): void;
    selectAll(): void;
    setCursorPos(value: number): void;
    setCursorPos(value: number, selecting: boolean): void;
    setCursorToEnd(): void;
    setCursorToEnd(selecting: boolean): void;
    setCursorToStart(): void;
    setCursorToStart(selecting: boolean): void;
    setSelectionPos(value: number): void;
    setSelectionRange(start: number, end: number): void;
}
import type { Runnable } from '../../../../../java/lang/Runnable.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Font } from '../../../../../net/minecraft/client/gui/Font.d.ts'
import type { MultilineTextField$StringView } from '../../../../../net/minecraft/client/gui/components/MultilineTextField$StringView.d.ts'
import type { Whence } from '../../../../../net/minecraft/client/gui/components/Whence.d.ts'
import type { KeyEvent } from '../../../../../net/minecraft/client/input/KeyEvent.d.ts'
export class MultilineTextField extends Object {
    static NO_LIMIT: number;
    constructor(font: Font, width: number)
    readonly characterLimit: number;
    // private cursor: number;
    readonly cursorListener: () => void;
    // private displayLines: MultilineTextField$StringView[];
    // private font: Font;
    readonly lineLimit: number;
    // private selectCursor: number;
    readonly selecting: boolean;
    readonly value: string;
    readonly valueListener: (param0: string) => void;
    // private width: number;
    characterLimit(): number;
    cursor(): number;
    deleteText(dir: number): void;
    // private getCursorLineView(): MultilineTextField$StringView;
    // private getCursorLineView(lineOffset: number): MultilineTextField$StringView;
    getLineAtCursor(): number;
    getLineCount(): number;
    getLineView(lineIndex: number): MultilineTextField$StringView;
    getNextWord(): MultilineTextField$StringView;
    getPreviousWord(): MultilineTextField$StringView;
    getSelected(): MultilineTextField$StringView;
    getSelectedText(): string;
    // private getWordEndPosition(from: number): number;
    hasCharacterLimit(): boolean;
    hasLineLimit(): boolean;
    hasSelection(): boolean;
    insertText(input: string): void;
    iterateLines(): MultilineTextField$StringView[];
    keyPressed(event: KeyEvent): boolean;
    // private onValueChange(): void;
    // private overflowsLineLimit(newValue: string): boolean;
    // private reflowDisplayLines(): void;
    seekCursor(whence: Whence, cursor: number): void;
    seekCursorLine(lineOffset: number): void;
    seekCursorToPoint(x: number, y: number): void;
    selectWordAtCursor(): void;
    setCharacterLimit(characterLimit: number): void;
    setCursorListener(cursorListener: () => void): void;
    setLineLimit(lineLimit: number): void;
    setSelecting(selecting: boolean): void;
    setValue(value: string): void;
    setValue(value: string, allowOverflowLineLimit: boolean): void;
    setValueListener(valueListener: (param0: string) => void): void;
    // private truncateFullText(input: string): string;
    // private truncateInsertionText(input: string): string;
    value(): string;
}
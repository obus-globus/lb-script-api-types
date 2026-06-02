import type { GuiGraphicsExtractor } from '../../../../../../net/minecraft/client/gui/GuiGraphicsExtractor.d.ts'
import type { ObjectSelectionList$Entry } from '../../../../../../net/minecraft/client/gui/components/ObjectSelectionList$Entry.d.ts'
import type { KeyEvent } from '../../../../../../net/minecraft/client/input/KeyEvent.d.ts'
import type { MouseButtonEvent } from '../../../../../../net/minecraft/client/input/MouseButtonEvent.d.ts'
import type { LanguageInfo } from '../../../../../../net/minecraft/client/resources/language/LanguageInfo.d.ts'
import type { Component } from '../../../../../../net/minecraft/network/chat/Component.d.ts'
export class LanguageSelectScreen$LanguageSelectionList$Entry extends ObjectSelectionList$Entry<LanguageSelectScreen$LanguageSelectionList$Entry> {
    static CONTENT_PADDING: number;
    constructor(null_: LanguageSelectScreen$LanguageSelectionList$Entry, code: string, language: LanguageInfo)
    // private code: string;
    // private language: Component;
    extractContent(graphics: GuiGraphicsExtractor, mouseX: number, mouseY: number, hovered: boolean, a: number): void;
    getNarration(): Component;
    keyPressed(event: KeyEvent): boolean;
    mouseClicked(event: MouseButtonEvent, doubleClick: boolean): boolean;
    // private select(): void;
}
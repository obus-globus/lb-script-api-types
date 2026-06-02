import type { Reader } from '../../../../../java/io/Reader.d.ts'
import type { Runnable } from '../../../../../java/lang/Runnable.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Minecraft } from '../../../../../net/minecraft/client/Minecraft.d.ts'
import type { GuiGraphicsExtractor } from '../../../../../net/minecraft/client/gui/GuiGraphicsExtractor.d.ts'
import type { LogoRenderer } from '../../../../../net/minecraft/client/gui/components/LogoRenderer.d.ts'
import type { NarratableEntry } from '../../../../../net/minecraft/client/gui/narration/NarratableEntry.d.ts'
import type { Screen } from '../../../../../net/minecraft/client/gui/screens/Screen.d.ts'
import type { Screen$NarratableSearchResult } from '../../../../../net/minecraft/client/gui/screens/Screen$NarratableSearchResult.d.ts'
import type { WinScreen$CreditsReader } from '../../../../../net/minecraft/client/gui/screens/WinScreen$CreditsReader.d.ts'
import type { KeyEvent } from '../../../../../net/minecraft/client/input/KeyEvent.d.ts'
import type { Component } from '../../../../../net/minecraft/network/chat/Component.d.ts'
import type { Style } from '../../../../../net/minecraft/network/chat/Style.d.ts'
import type { Identifier } from '../../../../../net/minecraft/resources/Identifier.d.ts'
import type { Music } from '../../../../../net/minecraft/sounds/Music.d.ts'
import type { FormattedCharSequence } from '../../../../../net/minecraft/util/FormattedCharSequence.d.ts'
import type { FormattedCharSink } from '../../../../../net/minecraft/util/FormattedCharSink.d.ts'
import type { ItemStack } from '../../../../../net/minecraft/world/item/ItemStack.d.ts'
export class WinScreen extends Screen {
    static FOOTER_SEPARATOR: Identifier;
    static HEADER_SEPARATOR: Identifier;
    static INWORLD_FOOTER_SEPARATOR: Identifier;
    static INWORLD_HEADER_SEPARATOR: Identifier;
    static MENU_BACKGROUND: Identifier;
    static extractMenuBackgroundTexture(paramgraphics: GuiGraphicsExtractor, parammenuBackground: Identifier, paramx: number, paramy: number, paramu: number, paramv: number, paramwidth: number, paramheight: number): void;
    static findNarratableWidget(paramnarratableEntries: (Object | null)[], paramlastNarratable: NarratableEntry): Screen$NarratableSearchResult;
    static getTooltipFromItem(paramminecraft: Minecraft, paramitemStack: ItemStack): Component[];
    constructor(poem: boolean, onFinished: () => void)
    // private centeredLines: (Object | null)[];
    // private direction: number;
    // private lines: (param0: (param0: number, param1: Style, param2: number) => kotlin.Boolean) => kotlin.Boolean[];
    // private logoRenderer: LogoRenderer;
    // private narratorComponents: Component[];
    // private onFinished: () => void;
    // private poem: boolean;
    // private scroll: number;
    // private scrollSpeed: number;
    // private speedupActive: boolean;
    // private speedupModifiers: (Object | null)[];
    // private totalScrollLength: number;
    // private unmodifiedScrollSpeed: number;
    // private addCreditsFile(inputReader: Reader): void;
    // private addCreditsLine(line: Component, centered: boolean, narrated: boolean): void;
    // private addEmptyLine(): void;
    // private addPoemFile(inputReader: Reader): void;
    // private addPoemLines(line: string): void;
    // private calculateScrollSpeed(): number;
    extractBackground(graphics: GuiGraphicsExtractor, mouseX: number, mouseY: number, a: number): void;
    extractMenuBackground(graphics: GuiGraphicsExtractor, x: number, y: number, width: number, height: number): void;
    extractRenderState(graphics: GuiGraphicsExtractor, mouseX: number, mouseY: number, a: number): void;
    // private extractVignette(graphics: GuiGraphicsExtractor): void;
    getBackgroundMusic(): Music;
    getNarrationMessage(): Component;
    init(): void;
    isAllowedInPortal(): boolean;
    isPauseScreen(): boolean;
    keyPressed(event: KeyEvent): boolean;
    keyReleased(event: KeyEvent): boolean;
    onClose(): void;
    removed(): void;
    // private respawn(): void;
    tick(): void;
    // private wrapCreditsIO(file: Identifier, creditsReader: (param0: Reader) => void): void;
}
import type { RateLimiter } from '../../../../../com/google/common/util/concurrent/RateLimiter.d.ts'
import type { WorldDownload } from '../../../../../com/mojang/realmsclient/dto/WorldDownload.d.ts'
import type { RealmsDownloadLatestWorldScreen$DownloadStatus } from '../../../../../com/mojang/realmsclient/gui/screens/RealmsDownloadLatestWorldScreen$DownloadStatus.d.ts'
import type { BooleanConsumer } from '../../../../../it/unimi/dsi/fastutil/booleans/BooleanConsumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Minecraft } from '../../../../../net/minecraft/client/Minecraft.d.ts'
import type { GuiGraphicsExtractor } from '../../../../../net/minecraft/client/gui/GuiGraphicsExtractor.d.ts'
import type { Button } from '../../../../../net/minecraft/client/gui/components/Button.d.ts'
import type { NarratableEntry } from '../../../../../net/minecraft/client/gui/narration/NarratableEntry.d.ts'
import type { Screen } from '../../../../../net/minecraft/client/gui/screens/Screen.d.ts'
import type { Screen$NarratableSearchResult } from '../../../../../net/minecraft/client/gui/screens/Screen$NarratableSearchResult.d.ts'
import type { Component } from '../../../../../net/minecraft/network/chat/Component.d.ts'
import type { RealmsScreen } from '../../../../../net/minecraft/realms/RealmsScreen.d.ts'
import type { Identifier } from '../../../../../net/minecraft/resources/Identifier.d.ts'
import type { ItemStack } from '../../../../../net/minecraft/world/item/ItemStack.d.ts'
export class RealmsDownloadLatestWorldScreen extends RealmsScreen {
    static FOOTER_SEPARATOR: Identifier;
    static HEADER_SEPARATOR: Identifier;
    static INWORLD_FOOTER_SEPARATOR: Identifier;
    static INWORLD_HEADER_SEPARATOR: Identifier;
    static MENU_BACKGROUND: Identifier;
    static extractMenuBackgroundTexture(paramgraphics: GuiGraphicsExtractor, parammenuBackground: Identifier, paramx: number, paramy: number, paramu: number, paramv: number, paramwidth: number, paramheight: number): void;
    static findNarratableWidget(paramnarratableEntries: (Object | null)[], paramlastNarratable: NarratableEntry): Screen$NarratableSearchResult;
    static getTooltipFromItem(paramminecraft: Minecraft, paramitemStack: ItemStack): Component[];
    constructor(lastScreen: Screen, worldDownload: WorldDownload, worldName: string, callback: (param0: boolean) => void)
    // private animTick: number;
    // private bytesPersSecond: number;
    // private callback: (param0: boolean) => void;
    // private cancelButton: Button;
    // private cancelled: boolean;
    // private checked: boolean;
    // private dotIndex: number;
    // private downloadStatus: RealmsDownloadLatestWorldScreen$DownloadStatus;
    // private downloadTitle: Component;
    // private errorMessage: Component;
    // private extracting: boolean;
    // private finished: boolean;
    // private lastScreen: Screen;
    // private narrationRateLimiter: RateLimiter;
    // private previousTimeSnapshot: number;
    // private previousWrittenBytes: number;
    // private progress: string;
    // private showDots: boolean;
    // private status: Component;
    // private worldDownload: WorldDownload;
    // private worldName: string;
    // private checkDownloadSize(): void;
    // private createProgressNarrationMessage(): Component;
    // private downloadCancelled(): void;
    // private downloadSave(): void;
    // private extractDots(graphics: GuiGraphicsExtractor): void;
    // private extractDownloadSpeed(graphics: GuiGraphicsExtractor): void;
    // private extractDownloadSpeed0(graphics: GuiGraphicsExtractor, bytesPerSecond: number): void;
    // private extractProgressBar(graphics: GuiGraphicsExtractor): void;
    extractRenderState(graphics: GuiGraphicsExtractor, xm: number, ym: number, a: number): void;
    // private getContentLength(downloadLink: string): number;
    init(): void;
    onClose(): void;
    tick(): void;
}
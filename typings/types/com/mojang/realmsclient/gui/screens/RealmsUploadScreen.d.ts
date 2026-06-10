import type { RateLimiter } from '../../../../../com/google/common/util/concurrent/RateLimiter.d.ts'
import type { UploadStatus } from '../../../../../com/mojang/realmsclient/client/UploadStatus.d.ts'
import type { RealmsWorldUpload } from '../../../../../com/mojang/realmsclient/client/worldupload/RealmsWorldUpload.d.ts'
import type { RealmsWorldUploadStatusTracker } from '../../../../../com/mojang/realmsclient/client/worldupload/RealmsWorldUploadStatusTracker.d.ts'
import type { RealmsResetWorldScreen } from '../../../../../com/mojang/realmsclient/gui/screens/RealmsResetWorldScreen.d.ts'
import type { RealmCreationTask } from '../../../../../com/mojang/realmsclient/util/task/RealmCreationTask.d.ts'
import type { AtomicReference } from '../../../../../java/util/concurrent/atomic/AtomicReference.d.ts'
import type { Minecraft } from '../../../../../net/minecraft/client/Minecraft.d.ts'
import type { GuiGraphicsExtractor } from '../../../../../net/minecraft/client/gui/GuiGraphicsExtractor.d.ts'
import type { Button } from '../../../../../net/minecraft/client/gui/components/Button.d.ts'
import type { HeaderAndFooterLayout } from '../../../../../net/minecraft/client/gui/layouts/HeaderAndFooterLayout.d.ts'
import type { NarratableEntry } from '../../../../../net/minecraft/client/gui/narration/NarratableEntry.d.ts'
import type { Screen$NarratableSearchResult } from '../../../../../net/minecraft/client/gui/screens/Screen$NarratableSearchResult.d.ts'
import type { KeyEvent } from '../../../../../net/minecraft/client/input/KeyEvent.d.ts'
import type { Component } from '../../../../../net/minecraft/network/chat/Component.d.ts'
import type { RealmsScreen } from '../../../../../net/minecraft/realms/RealmsScreen.d.ts'
import type { Identifier } from '../../../../../net/minecraft/resources/Identifier.d.ts'
import type { ItemStack } from '../../../../../net/minecraft/world/item/ItemStack.d.ts'
import type { LevelSummary } from '../../../../../net/minecraft/world/level/storage/LevelSummary.d.ts'
export class RealmsUploadScreen extends RealmsScreen implements RealmsWorldUploadStatusTracker {
    static FOOTER_SEPARATOR: Identifier;
    static HEADER_SEPARATOR: Identifier;
    static INWORLD_FOOTER_SEPARATOR: Identifier;
    static INWORLD_HEADER_SEPARATOR: Identifier;
    static MENU_BACKGROUND: Identifier;
    static extractMenuBackgroundTexture(paramgraphics: GuiGraphicsExtractor, parammenuBackground: Identifier, paramx: number, paramy: number, paramu: number, paramv: number, paramwidth: number, paramheight: number): void;
    static findNarratableWidget(paramnarratableEntries: NarratableEntry[], paramlastNarratable: NarratableEntry): Screen$NarratableSearchResult;
    static getTooltipFromItem(paramminecraft: Minecraft, paramitemStack: ItemStack): Component[];
    static noOp(): RealmsWorldUploadStatusTracker;
    constructor(realmCreationTask: RealmCreationTask, realmId: number, slotId: number, lastScreen: RealmsResetWorldScreen, selectedLevel: LevelSummary)
    // private backButton: Button;
    // private cancelButton: Button;
    // private cancelled: boolean;
    // private currentUpload: AtomicReference<RealmsWorldUpload>;
    // private errorMessage: Component[];
    // private lastScreen: RealmsResetWorldScreen;
    // private layout: HeaderAndFooterLayout;
    // private narrationRateLimiter: RateLimiter;
    // private progress: string;
    // private realmCreationTask: RealmCreationTask;
    // private realmId: number;
    // private selectedLevel: LevelSummary;
    // private showDots: boolean;
    // private slotId: number;
    // private status: Component;
    // private tickCount: number;
    // private uploadFinished: boolean;
    // private uploadStarted: boolean;
    readonly uploadStatus: UploadStatus;
    // private createProgressNarrationMessage(): Component;
    // private extractProgressBar(graphics: GuiGraphicsExtractor): void;
    extractRenderState(graphics: GuiGraphicsExtractor, xm: number, ym: number, a: number): void;
    // private extractUploadSpeed(graphics: GuiGraphicsExtractor): void;
    // private extractUploadSpeed0(graphics: GuiGraphicsExtractor, bytesPerSecond: number): void;
    getUploadStatus(): UploadStatus;
    init(): void;
    init(width: number, height: number): void;
    keyPressed(event: KeyEvent): boolean;
    // private onBack(): void;
    // private onCancel(): void;
    repositionElements(): void;
    // private setErrorMessage(messages: Component[]): void;
    setUploading(): void;
    tick(): void;
    // private upload(): void;
}
import type { Runnable } from '../../../../java/lang/Runnable.d.ts'
import type { Function } from '../../../../java/util/function/Function.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { GuiExtensions } from '../../../../net/fabricmc/fabric/impl/client/screen/GuiExtensions.d.ts'
import type { DeltaTracker } from '../../../../net/minecraft/client/DeltaTracker.d.ts'
import type { GameLoadCookie } from '../../../../net/minecraft/client/GameLoadCookie.d.ts'
import type { Minecraft } from '../../../../net/minecraft/client/Minecraft.d.ts'
import type { Hud } from '../../../../net/minecraft/client/gui/Hud.d.ts'
import type { ChatComponent$ChatMethod } from '../../../../net/minecraft/client/gui/components/ChatComponent$ChatMethod.d.ts'
import type { ToastManager } from '../../../../net/minecraft/client/gui/components/toasts/ToastManager.d.ts'
import type { TutorialToast } from '../../../../net/minecraft/client/gui/components/toasts/TutorialToast.d.ts'
import type { Overlay } from '../../../../net/minecraft/client/gui/screens/Overlay.d.ts'
import type { Screen } from '../../../../net/minecraft/client/gui/screens/Screen.d.ts'
import type { ChatListener } from '../../../../net/minecraft/client/multiplayer/chat/ChatListener.d.ts'
import type { GuiRenderState } from '../../../../net/minecraft/client/renderer/state/gui/GuiRenderState.d.ts'
import type { SplashManager } from '../../../../net/minecraft/client/resources/SplashManager.d.ts'
import type { Component } from '../../../../net/minecraft/network/chat/Component.d.ts'
import type { ReloadableResourceManager } from '../../../../net/minecraft/server/packs/resources/ReloadableResourceManager.d.ts'
export class Gui extends Object implements GuiExtensions {
    static SAVING_LEVEL: Component;
    constructor(minecraft: Minecraft, hud: Hud, guiRenderState: GuiRenderState)
    // private chatListener: ChatListener;
    readonly clientLevelTeardownInProgress: boolean;
    // private guiRenderState: GuiRenderState;
    hud: Hud;
    // private minecraft: Minecraft;
    // private socialInteractionsToast: TutorialToast;
    // private splashManager: SplashManager;
    readonly tickingScreen: Screen;
    // private toastManager: ToastManager;
    // private addInitialScreens(screens: (param0: () => void) => Screen[]): boolean;
    addSocialInteractionsToast(): void;
    buildInitialScreens(cookie: GameLoadCookie): () => void;
    canInterruptScreen(): boolean;
    chatListener(): ChatListener;
    extractRenderState(deltaTracker: DeltaTracker, shouldRenderLevel: boolean, resourcesLoaded: boolean): void;
    getTickingScreen(): Screen;
    handleKeybinds(): void;
    isPausing(): boolean;
    openChatAndAddText(chatMethod: ChatComponent$ChatMethod, text: string): void;
    openChatScreen(chatMethod: ChatComponent$ChatMethod): void;
    overlay(): Overlay | null;
    registerReloadListeners(resourceManager: ReloadableResourceManager): void;
    // private renderActiveTextDebug(): void;
    screen(): Screen | null;
    setClientLevelTeardownInProgress(clientLevelTeardownInProgress: boolean): void;
    setOverlay(overlay: Overlay): void;
    setPauseScreen(suppressPauseMenuIfWeReallyArePausing: boolean, canGameReallyBePaused: boolean): void;
    setScreen(screen: Screen | null): void;
    setTickingScreen(arg0: Screen): void;
    splashManager(): SplashManager;
    tick(): void;
    toastManager(): ToastManager;
    update(): void;
}
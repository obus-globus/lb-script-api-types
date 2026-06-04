import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Minecraft } from '../../../../../../net/minecraft/client/Minecraft.d.ts'
import type { Font } from '../../../../../../net/minecraft/client/gui/Font.d.ts'
import type { GuiGraphicsExtractor } from '../../../../../../net/minecraft/client/gui/GuiGraphicsExtractor.d.ts'
import type { SystemToast$SystemToastId } from '../../../../../../net/minecraft/client/gui/components/toasts/SystemToast$SystemToastId.d.ts'
import type { Toast } from '../../../../../../net/minecraft/client/gui/components/toasts/Toast.d.ts'
import type { Toast$Visibility } from '../../../../../../net/minecraft/client/gui/components/toasts/Toast$Visibility.d.ts'
import type { ToastManager } from '../../../../../../net/minecraft/client/gui/components/toasts/ToastManager.d.ts'
import type { Component } from '../../../../../../net/minecraft/network/chat/Component.d.ts'
import type { Style } from '../../../../../../net/minecraft/network/chat/Style.d.ts'
import type { SoundEvent } from '../../../../../../net/minecraft/sounds/SoundEvent.d.ts'
import type { FormattedCharSequence } from '../../../../../../net/minecraft/util/FormattedCharSequence.d.ts'
import type { FormattedCharSink } from '../../../../../../net/minecraft/util/FormattedCharSink.d.ts'
import type { ChunkPos } from '../../../../../../net/minecraft/world/level/ChunkPos.d.ts'
export class SystemToast extends Object implements Toast {
    static DEFAULT_WIDTH: number;
    static NO_TOKEN: Object;
    static SLOT_HEIGHT: number;
    static add(paramtoastManager: ToastManager, paramid: SystemToast$SystemToastId, paramtitle: Component, parammessage: Component): void;
    static addOrUpdate(paramtoastManager: ToastManager, paramid: SystemToast$SystemToastId, paramtitle: Component, parammessage: Component): void;
    static forceHide(paramtoastManager: ToastManager, paramid: SystemToast$SystemToastId): void;
    static multiline(paramminecraft: Minecraft, paramid: SystemToast$SystemToastId, paramtitle: Component, parammessage: Component): SystemToast;
    static onChunkLoadFailure(paramminecraft: Minecraft, parampos: ChunkPos): void;
    static onChunkSaveFailure(paramminecraft: Minecraft, parampos: ChunkPos): void;
    static onFileDropFailure(paramminecraft: Minecraft, paramcount: number): void;
    static onLowDiskSpace(paramminecraft: Minecraft): void;
    static onPackCopyFailure(paramminecraft: Minecraft, paramextraInfo: string): void;
    static onWorldAccessFailure(paramminecraft: Minecraft, paramlevelId: string): void;
    static onWorldDeleteFailure(paramminecraft: Minecraft, paramlevelId: string): void;
    private constructor(id: SystemToast$SystemToastId, title: Component, messageLines: (param0: (param0: number, param1: Style, param2: number) => kotlin.Boolean) => kotlin.Boolean[], width: number)
    constructor(id: SystemToast$SystemToastId, title: Component, message: Component)
    // private changed: boolean;
    // private forceHide: boolean;
    // private id: SystemToast$SystemToastId;
    // private lastChanged: number;
    // private messageLines: (param0: (param0: number, param1: Style, param2: number) => kotlin.Boolean) => kotlin.Boolean[];
    // private title: Component;
    readonly wantedVisibility: Toast$Visibility;
    // private width: number;
    extractRenderState(graphics: GuiGraphicsExtractor, font: Font, fullyVisibleForMs: number): void;
    forceHide(): void;
    getSoundEvent(): SoundEvent;
    getToken(): SystemToast$SystemToastId;
    getToken(): Object;
    getWantedVisibility(): Toast$Visibility;
    height(): number;
    occcupiedSlotCount(): number;
    onFinishedRendering(): void;
    reset(title: Component, message: Component): void;
    update(manager: ToastManager, fullyVisibleForMs: number): void;
    width(): number;
    xPos(screenWidth: number, visiblePortion: number): number;
    yPos(firstSlotIndex: number): number;
}
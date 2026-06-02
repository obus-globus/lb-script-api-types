import type { ClipboardManager } from '../../../com/mojang/blaze3d/platform/ClipboardManager.d.ts'
import type { Window } from '../../../com/mojang/blaze3d/platform/Window.d.ts'
import type { IMouseKeyboardHandlers } from '../../../com/viaversion/viafabricplus/injection/access/execute_inputs_sync/IMouseKeyboardHandlers.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { Minecraft } from '../../../net/minecraft/client/Minecraft.d.ts'
import type { GuiEventListener } from '../../../net/minecraft/client/gui/components/events/GuiEventListener.d.ts'
import type { CharacterEvent } from '../../../net/minecraft/client/input/CharacterEvent.d.ts'
import type { KeyEvent } from '../../../net/minecraft/client/input/KeyEvent.d.ts'
import type { PreeditEvent } from '../../../net/minecraft/client/input/PreeditEvent.d.ts'
import type { BlockPos } from '../../../net/minecraft/core/BlockPos.d.ts'
import type { CompoundTag } from '../../../net/minecraft/nbt/CompoundTag.d.ts'
import type { Component } from '../../../net/minecraft/network/chat/Component.d.ts'
import type { Identifier } from '../../../net/minecraft/resources/Identifier.d.ts'
import type { BlockState } from '../../../net/minecraft/world/level/block/state/BlockState.d.ts'
import type { Vec3 } from '../../../net/minecraft/world/phys/Vec3.d.ts'
export class KeyboardHandler extends Object implements IMouseKeyboardHandlers {
    static DEBUG_CRASH_TIME: number;
    static submitPreeditEvent(paramelement: GuiEventListener, paramevent: PreeditEvent): void;
    constructor(minecraft: Minecraft)
    // private clipboardManager: ClipboardManager;
    // private debugCrashKeyReportedCount: number;
    // private debugCrashKeyReportedTime: number;
    // private debugCrashKeyTime: number;
    // private lastPreeditEvent: PreeditEvent;
    // private minecraft: Minecraft;
    // private usedDebugKeyAsModifier: boolean;
    // private viaFabricPlus$pendingScreenEvents: Object[];
    // private charTyped(handle: number, event: CharacterEvent): void;
    // private copyCreateBlockCommand(state: BlockState, blockPos: BlockPos, entityTag: CompoundTag): void;
    // private copyCreateEntityCommand(id: Identifier, pos: Vec3, entityTag: CompoundTag): void;
    // private copyRecreateCommand(addNbt: boolean, pullFromServer: boolean): void;
    // private debugFeedback(message: string): void;
    // private debugFeedbackComponent(component: Component): void;
    // private debugFeedbackEnabledStatus(prefix: string, isEnabled: boolean): void;
    // private debugFeedbackTranslated(pattern: string, args: Object[]): void;
    // private debugWarningComponent(component: Component): void;
    getClipboard(): string;
    // private handleChunkDebugKeys(event: KeyEvent): boolean;
    // private handleDebugKeys(event: KeyEvent): boolean;
    // private keyPress(handle: number, action: number, event: KeyEvent): void;
    // private preeditCallback(handle: number, event: PreeditEvent): void;
    resubmitLastPreeditEvent(screen: GuiEventListener): void;
    setClipboard(clipboard: string): void;
    setup(window: Window): void;
    // private showDebugChat(message: Component): void;
    tick(): void;
    viaFabricPlus$getPendingScreenEvents(): Object[];
}
import type { Runnable } from '../../../../../../java/lang/Runnable.d.ts'
import type { Minecraft } from '../../../../../../net/minecraft/client/Minecraft.d.ts'
import type { GuiGraphicsExtractor } from '../../../../../../net/minecraft/client/gui/GuiGraphicsExtractor.d.ts'
import type { AbstractContainerWidget } from '../../../../../../net/minecraft/client/gui/components/AbstractContainerWidget.d.ts'
import type { AbstractScrollArea$ScrollbarSettings } from '../../../../../../net/minecraft/client/gui/components/AbstractScrollArea$ScrollbarSettings.d.ts'
import type { EditBox } from '../../../../../../net/minecraft/client/gui/components/EditBox.d.ts'
import type { PlainTextButton } from '../../../../../../net/minecraft/client/gui/components/PlainTextButton.d.ts'
import type { SpriteIconButton } from '../../../../../../net/minecraft/client/gui/components/SpriteIconButton.d.ts'
import type { GuiEventListener } from '../../../../../../net/minecraft/client/gui/components/events/GuiEventListener.d.ts'
import type { LinearLayout } from '../../../../../../net/minecraft/client/gui/layouts/LinearLayout.d.ts'
import type { NarratableEntry } from '../../../../../../net/minecraft/client/gui/narration/NarratableEntry.d.ts'
import type { NarrationElementOutput } from '../../../../../../net/minecraft/client/gui/narration/NarrationElementOutput.d.ts'
import type { AddFriendWidget$State } from '../../../../../../net/minecraft/client/gui/screens/friends/AddFriendWidget$State.d.ts'
import type { SoundManager } from '../../../../../../net/minecraft/client/sounds/SoundManager.d.ts'
import type { Component } from '../../../../../../net/minecraft/network/chat/Component.d.ts'
import type { MutableComponent } from '../../../../../../net/minecraft/network/chat/MutableComponent.d.ts'
export class AddFriendWidget extends AbstractContainerWidget {
    static SCROLLBAR_WIDTH: number;
    static defaultSettings(paramscrollRate: number): AbstractScrollArea$ScrollbarSettings;
    static playButtonClickSound(paramsoundManager: SoundManager): void;
    static wrapDefaultNarrationMessage(parammessage: Component): MutableComponent;
    constructor(width: number, afterSend: () => void)
    // private addButton: SpriteIconButton;
    readonly editBox: EditBox;
    // private layout: LinearLayout;
    // private minecraft: Minecraft;
    // private profileNameButton: PlainTextButton;
    applyState(newState: AddFriendWidget$State): void;
    children(): GuiEventListener[];
    contentHeight(): number;
    // private createProfileRow(): LinearLayout;
    // private editBoxResponder(value: string): void;
    extractWidgetRenderState(graphics: GuiGraphicsExtractor, mouseX: number, mouseY: number, a: number): void;
    getEditBox(): EditBox;
    // private getInvalidInputReason(name: string): Component;
    getNarratables(): NarratableEntry[];
    getValue(): string;
    setValue(value: string): void;
    setX(x: number): void;
    setY(y: number): void;
    updateWidgetNarration(output: NarrationElementOutput): void;
}
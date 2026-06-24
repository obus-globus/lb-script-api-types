import type { Supplier } from '../../../../../java/util/function/Supplier.d.ts'
import type { ComponentPath } from '../../../../../net/minecraft/client/gui/ComponentPath.d.ts'
import type { GuiGraphicsExtractor } from '../../../../../net/minecraft/client/gui/GuiGraphicsExtractor.d.ts'
import type { AbstractWidget } from '../../../../../net/minecraft/client/gui/components/AbstractWidget.d.ts'
import type { NarrationElementOutput } from '../../../../../net/minecraft/client/gui/narration/NarrationElementOutput.d.ts'
import type { FocusNavigationEvent } from '../../../../../net/minecraft/client/gui/navigation/FocusNavigationEvent.d.ts'
import type { MouseButtonEvent } from '../../../../../net/minecraft/client/input/MouseButtonEvent.d.ts'
import type { Model$Simple } from '../../../../../net/minecraft/client/model/Model$Simple.d.ts'
import type { EntityModelSet } from '../../../../../net/minecraft/client/model/geom/EntityModelSet.d.ts'
import type { SoundManager } from '../../../../../net/minecraft/client/sounds/SoundManager.d.ts'
import type { Component } from '../../../../../net/minecraft/network/chat/Component.d.ts'
import type { MutableComponent } from '../../../../../net/minecraft/network/chat/MutableComponent.d.ts'
import type { PlayerSkin } from '../../../../../net/minecraft/world/entity/player/PlayerSkin.d.ts'
export class PlayerSkinWidget extends AbstractWidget {
    static playButtonClickSound(paramsoundManager: SoundManager): void;
    static wrapDefaultNarrationMessage(parammessage: Component): MutableComponent;
    constructor(width: number, height: number, models: EntityModelSet, skin: () => PlayerSkin)
    // private rotationX: number;
    // private rotationY: number;
    // private skin: () => PlayerSkin;
    // private slimModel: Model$Simple;
    // private wideModel: Model$Simple;
    extractWidgetRenderState(graphics: GuiGraphicsExtractor, mouseX: number, mouseY: number, a: number): void;
    nextFocusPath(navigationEvent: FocusNavigationEvent): ComponentPath;
    onDrag(event: MouseButtonEvent, dx: number, dy: number): void;
    playDownSound(soundManager: SoundManager): void;
    updateWidgetNarration(output: NarrationElementOutput): void;
}
import type { ComponentPath } from '../../../../../net/minecraft/client/gui/ComponentPath.d.ts'
import type { AbstractWidget } from '../../../../../net/minecraft/client/gui/components/AbstractWidget.d.ts'
import type { NarrationElementOutput } from '../../../../../net/minecraft/client/gui/narration/NarrationElementOutput.d.ts'
import type { FocusNavigationEvent } from '../../../../../net/minecraft/client/gui/navigation/FocusNavigationEvent.d.ts'
import type { SoundManager } from '../../../../../net/minecraft/client/sounds/SoundManager.d.ts'
import type { Component } from '../../../../../net/minecraft/network/chat/Component.d.ts'
import type { MutableComponent } from '../../../../../net/minecraft/network/chat/MutableComponent.d.ts'
import type { Identifier } from '../../../../../net/minecraft/resources/Identifier.d.ts'
export abstract class ImageWidget extends AbstractWidget {
    static playButtonClickSound(paramsoundManager: SoundManager): void;
    static sprite(paramwidth: number, paramheight: number, paramsprite: Identifier): ImageWidget;
    static texture(paramwidth: number, paramheight: number, paramtexture: Identifier, paramtextureWidth: number, paramtextureHeight: number): ImageWidget;
    static wrapDefaultNarrationMessage(parammessage: Component): MutableComponent;
    private constructor(x: number, y: number, width: number, height: number)
    isActive(): boolean;
    nextFocusPath(navigationEvent: FocusNavigationEvent): ComponentPath;
    playDownSound(soundManager: SoundManager): void;
    updateResource(identifier: Identifier): void;
    updateWidgetNarration(output: NarrationElementOutput): void;
}
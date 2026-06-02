import type { AbstractSelectionList$Entry } from '../../../../../net/minecraft/client/gui/components/AbstractSelectionList$Entry.d.ts'
import type { NarrationElementOutput } from '../../../../../net/minecraft/client/gui/narration/NarrationElementOutput.d.ts'
import type { NarrationSupplier } from '../../../../../net/minecraft/client/gui/narration/NarrationSupplier.d.ts'
import type { MouseButtonEvent } from '../../../../../net/minecraft/client/input/MouseButtonEvent.d.ts'
import type { Component } from '../../../../../net/minecraft/network/chat/Component.d.ts'
export abstract class ObjectSelectionList$Entry<E extends ObjectSelectionList$Entry<E>> extends AbstractSelectionList$Entry<E> implements NarrationSupplier {
    static CONTENT_PADDING: number;
    constructor()
    getNarration(): Component;
    mouseClicked(event: MouseButtonEvent, doubleClick: boolean): boolean;
    updateNarration(output: NarrationElementOutput): void;
}
import type { ObjectSelectionList$Entry } from '../../../../../../net/minecraft/client/gui/components/ObjectSelectionList$Entry.d.ts'
import type { MouseButtonEvent } from '../../../../../../net/minecraft/client/input/MouseButtonEvent.d.ts'
import type { Component } from '../../../../../../net/minecraft/network/chat/Component.d.ts'
export abstract class ChatSelectionScreen$ChatSelectionList$Entry extends ObjectSelectionList$Entry<ChatSelectionScreen$ChatSelectionList$Entry> {
    static CONTENT_PADDING: number;
    constructor()
    canReport(): boolean;
    canSelect(): boolean;
    getNarration(): Component;
    isSelected(): boolean;
    mouseClicked(event: MouseButtonEvent, doubleClick: boolean): boolean;
}
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Button } from '../../../../../net/minecraft/client/gui/components/Button.d.ts'
import type { Button$CreateNarration } from '../../../../../net/minecraft/client/gui/components/Button$CreateNarration.d.ts'
import type { Button$OnPress } from '../../../../../net/minecraft/client/gui/components/Button$OnPress.d.ts'
import type { Tooltip } from '../../../../../net/minecraft/client/gui/components/Tooltip.d.ts'
import type { Component } from '../../../../../net/minecraft/network/chat/Component.d.ts'
export class Button$Builder extends Object {
    constructor(message: Component, onPress: Button$OnPress)
    // private createNarration: Button$CreateNarration;
    // private height: number;
    // private message: Component;
    // private onPress: Button$OnPress;
    // private tooltip: Tooltip;
    // private width: number;
    // private x: number;
    // private y: number;
    bounds(x: number, y: number, width: number, height: number): Button$Builder;
    build(): Button;
    createNarration(createNarration: Button$CreateNarration): Button$Builder;
    pos(x: number, y: number): Button$Builder;
    size(width: number, height: number): Button$Builder;
    tooltip(tooltip: Tooltip): Button$Builder;
    width(width: number): Button$Builder;
}
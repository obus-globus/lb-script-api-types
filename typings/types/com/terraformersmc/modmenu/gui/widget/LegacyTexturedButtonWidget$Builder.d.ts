import type { LegacyTexturedButtonWidget } from '../../../../../com/terraformersmc/modmenu/gui/widget/LegacyTexturedButtonWidget.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Button$OnPress } from '../../../../../net/minecraft/client/gui/components/Button$OnPress.d.ts'
import type { Component } from '../../../../../net/minecraft/network/chat/Component.d.ts'
import type { Identifier } from '../../../../../net/minecraft/resources/Identifier.d.ts'
export class LegacyTexturedButtonWidget$Builder extends Object {
    constructor(arg0: Component, arg1: Button$OnPress)
    // private height: number;
    // private hoveredVOffset: number;
    // private message: Component;
    // private onPress: Button$OnPress;
    // private texture: Identifier;
    // private textureHeight: number;
    // private textureWidth: number;
    // private u: number;
    // private v: number;
    // private width: number;
    // private x: number;
    // private y: number;
    build(): LegacyTexturedButtonWidget;
    position(arg0: number, arg1: number): LegacyTexturedButtonWidget$Builder;
    size(arg0: number, arg1: number): LegacyTexturedButtonWidget$Builder;
    texture(arg0: Identifier, arg1: number, arg2: number): LegacyTexturedButtonWidget$Builder;
    uv(arg0: number, arg1: number, arg2: number): LegacyTexturedButtonWidget$Builder;
}
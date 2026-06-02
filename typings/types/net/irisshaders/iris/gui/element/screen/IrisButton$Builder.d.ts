import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { FloatSupplier } from '../../../../../../net/irisshaders/iris/gl/uniform/FloatSupplier.d.ts'
import type { IrisButton } from '../../../../../../net/irisshaders/iris/gui/element/screen/IrisButton.d.ts'
import type { Button$CreateNarration } from '../../../../../../net/minecraft/client/gui/components/Button$CreateNarration.d.ts'
import type { Button$OnPress } from '../../../../../../net/minecraft/client/gui/components/Button$OnPress.d.ts'
import type { Tooltip } from '../../../../../../net/minecraft/client/gui/components/Tooltip.d.ts'
import type { Component } from '../../../../../../net/minecraft/network/chat/Component.d.ts'
export class IrisButton$Builder extends Object {
    constructor(arg0: Component, arg1: Button$OnPress, arg2: () => kotlin.Float)
    // private alpha: () => kotlin.Float;
    // private createNarration: Button$CreateNarration;
    // private height: number;
    // private message: Component;
    // private onPress: Button$OnPress;
    // private tooltip: Tooltip;
    // private width: number;
    // private x: number;
    // private y: number;
    bounds(arg0: number, arg1: number, arg2: number, arg3: number): IrisButton$Builder;
    build(): IrisButton;
    createNarration(arg0: Button$CreateNarration): IrisButton$Builder;
    pos(arg0: number, arg1: number): IrisButton$Builder;
    size(arg0: number, arg1: number): IrisButton$Builder;
    tooltip(arg0: Tooltip): IrisButton$Builder;
    width(arg0: number): IrisButton$Builder;
}
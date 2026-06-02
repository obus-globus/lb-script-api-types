import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { LayoutElement } from '../../../../../net/minecraft/client/gui/layouts/LayoutElement.d.ts'
import type { LayoutSettings } from '../../../../../net/minecraft/client/gui/layouts/LayoutSettings.d.ts'
import type { LayoutSettings$LayoutSettingsImpl } from '../../../../../net/minecraft/client/gui/layouts/LayoutSettings$LayoutSettingsImpl.d.ts'
export abstract class AbstractLayout$AbstractChildWrapper extends Object {
    constructor(child: LayoutElement, layoutSettings: LayoutSettings)
    child: LayoutElement;
    layoutSettings: LayoutSettings$LayoutSettingsImpl;
    getHeight(): number;
    getWidth(): number;
    setX(x: number, availableSpace: number): void;
    setY(y: number, availableSpace: number): void;
}
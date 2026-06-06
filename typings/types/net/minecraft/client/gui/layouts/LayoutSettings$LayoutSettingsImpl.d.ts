import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { LayoutSettings } from '../../../../../net/minecraft/client/gui/layouts/LayoutSettings.d.ts'
export class LayoutSettings$LayoutSettingsImpl extends Object implements LayoutSettings {
    static defaults(): LayoutSettings;
    constructor()
    constructor(copy: LayoutSettings$LayoutSettingsImpl)
    xAlignment: number;
    yAlignment: number;
    align(xAlignment: number, yAlignment: number): LayoutSettings$LayoutSettingsImpl;
    alignHorizontally(xAlignment: number): LayoutSettings$LayoutSettingsImpl;
    alignHorizontallyCenter(): LayoutSettings;
    alignHorizontallyLeft(): LayoutSettings;
    alignHorizontallyRight(): LayoutSettings;
    alignVertically(yAlignment: number): LayoutSettings$LayoutSettingsImpl;
    alignVerticallyBottom(): LayoutSettings;
    alignVerticallyMiddle(): LayoutSettings;
    alignVerticallyTop(): LayoutSettings;
    copy(): LayoutSettings$LayoutSettingsImpl;
    getExposed(): LayoutSettings$LayoutSettingsImpl;
    padding(padding: number): LayoutSettings$LayoutSettingsImpl;
    padding(horizontal: number, vertical: number): LayoutSettings$LayoutSettingsImpl;
    padding(left: number, top: number, right: number, bottom: number): LayoutSettings$LayoutSettingsImpl;
    paddingBottom(padding: number): LayoutSettings$LayoutSettingsImpl;
    paddingHorizontal(padding: number): LayoutSettings$LayoutSettingsImpl;
    paddingLeft(padding: number): LayoutSettings$LayoutSettingsImpl;
    paddingRight(padding: number): LayoutSettings$LayoutSettingsImpl;
    paddingTop(padding: number): LayoutSettings$LayoutSettingsImpl;
    paddingVertical(padding: number): LayoutSettings$LayoutSettingsImpl;
}
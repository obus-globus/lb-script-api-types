import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { LayoutSettings$LayoutSettingsImpl } from '../../../../../net/minecraft/client/gui/layouts/LayoutSettings$LayoutSettingsImpl.d.ts'
export interface LayoutSettings extends Object{
    align(xAlignment: number, yAlignment: number): LayoutSettings;
    alignHorizontally(xAlignment: number): LayoutSettings;
    alignHorizontallyCenter(): LayoutSettings;
    alignHorizontallyLeft(): LayoutSettings;
    alignHorizontallyRight(): LayoutSettings;
    alignVertically(yAlignment: number): LayoutSettings;
    alignVerticallyBottom(): LayoutSettings;
    alignVerticallyMiddle(): LayoutSettings;
    alignVerticallyTop(): LayoutSettings;
    copy(): LayoutSettings;
    getExposed(): LayoutSettings$LayoutSettingsImpl;
    padding(padding: number): LayoutSettings;
    padding(horizontal: number, vertical: number): LayoutSettings;
    padding(left: number, top: number, right: number, bottom: number): LayoutSettings;
    paddingBottom(padding: number): LayoutSettings;
    paddingHorizontal(padding: number): LayoutSettings;
    paddingLeft(padding: number): LayoutSettings;
    paddingRight(padding: number): LayoutSettings;
    paddingTop(padding: number): LayoutSettings;
    paddingVertical(padding: number): LayoutSettings;
}
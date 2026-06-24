import type { Object } from '../../../../java/lang/Object.d.ts'
import type { GuiEventListener } from '../../../../net/minecraft/client/gui/components/events/GuiEventListener.d.ts'
export interface ComponentPath extends Object{
    applyFocus(focused: boolean): void;
    component(): GuiEventListener;
    leafComponent(): GuiEventListener;
}
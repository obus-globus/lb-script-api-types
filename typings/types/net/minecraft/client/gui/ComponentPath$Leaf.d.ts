import type { Record } from '../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { ComponentPath } from '../../../../net/minecraft/client/gui/ComponentPath.d.ts'
import type { GuiEventListener } from '../../../../net/minecraft/client/gui/components/events/GuiEventListener.d.ts'
export class ComponentPath$Leaf extends Record implements ComponentPath {
    constructor(component: GuiEventListener)
    // private component: GuiEventListener;
    applyFocus(focused: boolean): void;
    component(): GuiEventListener;
    equals(o: Object | null): boolean;
    hashCode(): number;
    leafComponent(): GuiEventListener;
    toString(): string;
}
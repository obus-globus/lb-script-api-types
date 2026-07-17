import type { Record } from '../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { ComponentPath } from '../../../../net/minecraft/client/gui/ComponentPath.d.ts'
import type { ContainerEventHandler } from '../../../../net/minecraft/client/gui/components/events/ContainerEventHandler.d.ts'
import type { GuiEventListener } from '../../../../net/minecraft/client/gui/components/events/GuiEventListener.d.ts'
export class ComponentPath$Path extends Record implements ComponentPath {
    constructor(component: ContainerEventHandler, childPath: ComponentPath)
    // private childPath: ComponentPath;
    // private component: ContainerEventHandler;
    applyFocus(focused: boolean): void;
    childPath(): ComponentPath;
    component(): ContainerEventHandler;
    equals(o: Object | null): boolean;
    hashCode(): number;
    leafComponent(): GuiEventListener;
    toString(): string;
}
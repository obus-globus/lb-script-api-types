import type { AWTEvent } from '../../java/awt/AWTEvent.d.ts'
import type { Event } from '../../java/awt/Event.d.ts'
import type { Font } from '../../java/awt/Font.d.ts'
import type { MenuContainer } from '../../java/awt/MenuContainer.d.ts'
import type { MenuComponentPeer } from '../../java/awt/peer/MenuComponentPeer.d.ts'
import type { ObjectInputStream } from '../../java/io/ObjectInputStream.d.ts'
import type { Serializable } from '../../java/io/Serializable.d.ts'
import type { AccessibleContext } from '../../javax/accessibility/AccessibleContext.d.ts'
import type { AccessibleStateSet } from '../../javax/accessibility/AccessibleStateSet.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
import type { AppContext } from '../../sun/awt/AppContext.d.ts'
import type { ComponentFactory } from '../../sun/awt/ComponentFactory.d.ts'
export abstract class MenuComponent extends Object implements Serializable {
    constructor()
    accessibleContext: AccessibleContext;
    // private appContext: AppContext;
    readonly font: Font;
    readonly name: string;
    // private nameExplicitlySet: boolean;
    // private newEventsOnly: boolean;
    parent: MenuContainer;
    // private peer: MenuComponentPeer;
    constructComponentName(): string;
    dispatchEvent(arg0: AWTEvent): void;
    dispatchEventImpl(arg0: AWTEvent): void;
    eventEnabled(arg0: AWTEvent): boolean;
    getAccessibleChildIndex(arg0: MenuComponent): number;
    getAccessibleContext(): AccessibleContext;
    getAccessibleIndexInParent(): number;
    getAccessibleStateSet(): AccessibleStateSet;
    getComponentFactory(): ComponentFactory;
    getFont(): Font;
    getFont_NoClientCode(): Font;
    getName(): string;
    getParent(): MenuContainer;
    getParent_NoClientCode(): MenuContainer;
    getTreeLock(): Object;
    paramString(): string;
    postEvent(arg0: Event): boolean;
    processEvent(arg0: AWTEvent): void;
    // private readObject(arg0: ObjectInputStream): void;
    removeNotify(): void;
    setFont(arg0: Font): void;
    setName(arg0: string): void;
    toString(): string;
}
import type { Event } from '../../java/awt/Event.d.ts'
import type { Font } from '../../java/awt/Font.d.ts'
import type { MenuComponent } from '../../java/awt/MenuComponent.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
export interface MenuContainer extends Object{
    getFont(): Font;
    postEvent(arg0: Event): boolean;
    remove(arg0: MenuComponent): void;
}
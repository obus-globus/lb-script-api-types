import type { ItemListener } from '../../java/awt/event/ItemListener.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
export interface ItemSelectable extends Object{
    addItemListener(arg0: ItemListener): void;
    getSelectedObjects(): Object[];
    removeItemListener(arg0: ItemListener): void;
}
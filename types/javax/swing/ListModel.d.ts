import type { ListDataListener } from '../../javax/swing/event/ListDataListener.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
export interface ListModel<E extends Object | number | string | boolean> extends Object{
    addListDataListener(arg0: ListDataListener): void;
    getElementAt(arg0: number): E;
    getSize(): number;
    removeListDataListener(arg0: ListDataListener): void;
}
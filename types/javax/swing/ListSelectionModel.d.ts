import type { ListSelectionListener } from '../../javax/swing/event/ListSelectionListener.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
export interface ListSelectionModel extends Object{
    addListSelectionListener(arg0: ListSelectionListener): void;
    addSelectionInterval(arg0: number, arg1: number): void;
    clearSelection(): void;
    getAnchorSelectionIndex(): number;
    getLeadSelectionIndex(): number;
    getMaxSelectionIndex(): number;
    getMinSelectionIndex(): number;
    getSelectedIndices(): number[];
    getSelectedItemsCount(): number;
    getSelectionMode(): number;
    getValueIsAdjusting(): boolean;
    insertIndexInterval(arg0: number, arg1: number, arg2: boolean): void;
    isSelectedIndex(arg0: number): boolean;
    isSelectionEmpty(): boolean;
    removeIndexInterval(arg0: number, arg1: number): void;
    removeListSelectionListener(arg0: ListSelectionListener): void;
    removeSelectionInterval(arg0: number, arg1: number): void;
    setAnchorSelectionIndex(arg0: number): void;
    setLeadSelectionIndex(arg0: number): void;
    setSelectionInterval(arg0: number, arg1: number): void;
    setSelectionMode(arg0: number): void;
    setValueIsAdjusting(arg0: boolean): void;
}
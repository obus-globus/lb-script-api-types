import type { ChangeListener } from '../../javax/swing/event/ChangeListener.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
export interface SingleSelectionModel extends Object{
    addChangeListener(arg0: ChangeListener): void;
    clearSelection(): void;
    getSelectedIndex(): number;
    isSelected(): boolean;
    removeChangeListener(arg0: ChangeListener): void;
    setSelectedIndex(arg0: number): void;
}
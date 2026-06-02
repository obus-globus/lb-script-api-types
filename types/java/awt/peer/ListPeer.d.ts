import type { Dimension } from '../../../java/awt/Dimension.d.ts'
import type { ComponentPeer } from '../../../java/awt/peer/ComponentPeer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export interface ListPeer extends ComponentPeer, Object{
    add(arg0: string, arg1: number): void;
    delItems(arg0: number, arg1: number): void;
    deselect(arg0: number): void;
    getMinimumSize(arg0: number): Dimension;
    getPreferredSize(arg0: number): Dimension;
    getSelectedIndexes(): number[];
    makeVisible(arg0: number): void;
    removeAll(): void;
    select(arg0: number): void;
    setMultipleMode(arg0: boolean): void;
}
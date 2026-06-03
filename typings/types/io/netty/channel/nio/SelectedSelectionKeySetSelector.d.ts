import type { SelectionKey } from '../../../../java/nio/channels/SelectionKey.d.ts'
import type { Selector } from '../../../../java/nio/channels/Selector.d.ts'
import type { SelectorProvider } from '../../../../java/nio/channels/spi/SelectorProvider.d.ts'
import type { Consumer } from '../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class SelectedSelectionKeySetSelector extends Selector {
    static open(): Selector;
    constructor(arg0: Selector, arg1: (Object | null)[])
    // private delegate: Selector;
    // private selectionKeys: (Object | null)[];
    close(): void;
    isOpen(): boolean;
    keys(): SelectionKey[];
    provider(): SelectorProvider;
    select(): number;
    select(arg0: (param0: SelectionKey) => void): number;
    select(arg0: (param0: SelectionKey) => void, arg1: number): number;
    select(arg0: number): number;
    selectNow(): number;
    selectNow(arg0: (param0: SelectionKey) => void): number;
    selectedKeys(): SelectionKey[];
    wakeup(): Selector;
}
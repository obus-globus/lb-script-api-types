import type { Closeable } from '../../../java/io/Closeable.d.ts'
import type { SelectionKey } from '../../../java/nio/channels/SelectionKey.d.ts'
import type { SelectorProvider } from '../../../java/nio/channels/spi/SelectorProvider.d.ts'
import type { Consumer } from '../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export abstract class Selector extends Object implements Closeable {
    static open(): Selector;
    constructor()
    close(): void;
    // private doSelect(arg0: (param0: SelectionKey) => void, arg1: number): number;
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
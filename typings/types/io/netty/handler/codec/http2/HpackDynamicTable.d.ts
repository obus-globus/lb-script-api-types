import type { HpackHeaderField } from '../../../../../io/netty/handler/codec/http2/HpackHeaderField.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class HpackDynamicTable extends Object {
    constructor(arg0: number)
    // private head: number;
    // private hpackHeaderFields: HpackHeaderField[];
    // private size: number;
    // private tail: number;
    add(arg0: HpackHeaderField): void;
    capacity(): number;
    clear(): void;
    getEntry(arg0: number): HpackHeaderField;
    length(): number;
    remove(): HpackHeaderField;
    setCapacity(arg0: number): void;
    size(): number;
}
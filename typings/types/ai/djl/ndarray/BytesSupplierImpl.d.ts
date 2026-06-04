import type { BytesSupplier } from '../../../ai/djl/ndarray/BytesSupplier.d.ts'
import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class BytesSupplierImpl extends Object implements BytesSupplier {
    static wrap(paramarg0: number[]): BytesSupplier;
    static wrap(paramarg0: string): BytesSupplier;
    static wrapAsJson(paramarg0: Object): BytesSupplier;
    constructor(arg0: Object)
    constructor(arg0: number[])
    constructor(arg0: string)
    // private buf: number[];
    // private obj: Object;
    // private value: string;
    getAsBytes(): number[];
    getAsObject(): Object;
    getAsString(): string;
    toByteBuffer(): ByteBuffer;
}
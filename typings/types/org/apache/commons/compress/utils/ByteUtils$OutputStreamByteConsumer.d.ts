import type { OutputStream } from '../../../../../java/io/OutputStream.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { ByteUtils$ByteConsumer } from '../../../../../org/apache/commons/compress/utils/ByteUtils$ByteConsumer.d.ts'
export class ByteUtils$OutputStreamByteConsumer extends Object implements ByteUtils$ByteConsumer {
    constructor(arg0: OutputStream)
    // private os: OutputStream;
    accept(arg0: number): void;
}
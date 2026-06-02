import type { Closeable } from '../../../../../../java/io/Closeable.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { CloseableConsumer } from '../../../../../../org/apache/commons/compress/archivers/examples/CloseableConsumer.d.ts'
export class CloseableConsumerAdapter extends Object implements Closeable {
    constructor(arg0: CloseableConsumer)
    // private closeable: Closeable;
    // private consumer: CloseableConsumer;
    close(): void;
    track<C extends Closeable>(arg0: C): C;
}
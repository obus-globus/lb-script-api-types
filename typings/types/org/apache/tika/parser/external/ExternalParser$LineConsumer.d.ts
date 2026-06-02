import type { Serializable } from '../../../../../java/io/Serializable.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface ExternalParser$LineConsumer extends Serializable, Object{
    consume(arg0: string): void;
}
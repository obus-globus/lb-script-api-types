import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Spliterators$AbstractSpliterator } from '../../../../../java/util/Spliterators$AbstractSpliterator.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Iterator } from '../../../../../java/util/Iterator.d.ts'
import type { Logger } from '../../../../../org/apache/logging/log4j/Logger.d.ts'
export class ServiceLoaderUtil$ServiceLoaderSpliterator<S extends unknown> extends Spliterators$AbstractSpliterator<S> {
    static CONCURRENT: number;
    static DISTINCT: number;
    static IMMUTABLE: number;
    static NONNULL: number;
    static ORDERED: number;
    static SIZED: number;
    static SORTED: number;
    static SUBSIZED: number;
    private constructor(serviceType: Class<S>, serviceLoader: S[], logger: Logger)
    // private logger: Logger;
    // private serviceIterator: Iterator<S>;
    // private serviceName: string;
    tryAdvance(action: (param0: S) => void): boolean;
}
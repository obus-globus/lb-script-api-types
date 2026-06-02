import type { AbstractOutputStreamAppender$Builder } from '../../../../../../org/apache/logging/log4j/core/appender/AbstractOutputStreamAppender$Builder.d.ts'
import type { RandomAccessFileAppender } from '../../../../../../org/apache/logging/log4j/core/appender/RandomAccessFileAppender.d.ts'
import type { Builder } from '../../../../../../org/apache/logging/log4j/core/util/Builder.d.ts'
export class RandomAccessFileAppender$Builder<B extends RandomAccessFileAppender$Builder<B>> extends AbstractOutputStreamAppender$Builder<B> implements Builder<RandomAccessFileAppender> {
    constructor()
    // private advertise: boolean;
    // private advertiseURI: string;
    // private append: boolean;
    // private fileName: string;
    build(): RandomAccessFileAppender;
    getErrorPrefix(): string;
    isValid(): boolean;
    setAdvertise(advertise: boolean): B;
    setAdvertiseURI(advertiseURI: string): B;
    setAppend(append: boolean): B;
    setFileName(fileName: string): B;
}
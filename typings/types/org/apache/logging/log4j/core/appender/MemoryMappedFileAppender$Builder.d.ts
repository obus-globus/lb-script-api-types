import type { AbstractOutputStreamAppender$Builder } from '../../../../../../org/apache/logging/log4j/core/appender/AbstractOutputStreamAppender$Builder.d.ts'
import type { MemoryMappedFileAppender } from '../../../../../../org/apache/logging/log4j/core/appender/MemoryMappedFileAppender.d.ts'
import type { Builder } from '../../../../../../org/apache/logging/log4j/core/util/Builder.d.ts'
export class MemoryMappedFileAppender$Builder<B extends MemoryMappedFileAppender$Builder<B>> extends AbstractOutputStreamAppender$Builder<B> implements Builder<MemoryMappedFileAppender> {
    constructor()
    // private advertise: boolean;
    // private advertiseURI: string;
    // private append: boolean;
    // private fileName: string;
    // private regionLength: number;
    build(): MemoryMappedFileAppender;
    getErrorPrefix(): string;
    isValid(): boolean;
    setAdvertise(advertise: boolean): B;
    setAdvertiseURI(advertiseURI: string): B;
    setAppend(append: boolean): B;
    setFileName(fileName: string): B;
    setRegionLength(regionLength: number): B;
}
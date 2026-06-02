import type { AbstractAppender$Builder } from '../../../../../../org/apache/logging/log4j/core/appender/AbstractAppender$Builder.d.ts'
export abstract class AbstractOutputStreamAppender$Builder<B extends AbstractOutputStreamAppender$Builder<B>> extends AbstractAppender$Builder<B> {
    constructor()
    readonly bufferSize: number;
    readonly bufferedIo: boolean;
    readonly immediateFlush: boolean;
    getBufferSize(): number;
    isBufferedIo(): boolean;
    isImmediateFlush(): boolean;
    setBufferSize(bufferSize: number): B;
    setBufferedIo(bufferedIo: boolean): B;
    setImmediateFlush(immediateFlush: boolean): B;
    withBufferSize(bufferSize: number): B;
    withBufferedIo(bufferedIo: boolean): B;
    withImmediateFlush(immediateFlush: boolean): B;
}
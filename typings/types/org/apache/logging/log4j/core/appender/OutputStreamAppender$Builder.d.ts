import type { OutputStream } from '../../../../../../java/io/OutputStream.d.ts'
import type { AbstractOutputStreamAppender$Builder } from '../../../../../../org/apache/logging/log4j/core/appender/AbstractOutputStreamAppender$Builder.d.ts'
import type { OutputStreamAppender } from '../../../../../../org/apache/logging/log4j/core/appender/OutputStreamAppender.d.ts'
import type { Builder } from '../../../../../../org/apache/logging/log4j/core/util/Builder.d.ts'
export class OutputStreamAppender$Builder<B extends OutputStreamAppender$Builder<B>> extends AbstractOutputStreamAppender$Builder<B> implements Builder<OutputStreamAppender> {
    constructor()
    // private follow: boolean;
    readonly ignoreExceptions: boolean;
    // private target: OutputStream;
    build(): OutputStreamAppender;
    getErrorPrefix(): string;
    isValid(): boolean;
    setFollow(shouldFollow: boolean): B;
    setTarget(aTarget: OutputStream): B;
}
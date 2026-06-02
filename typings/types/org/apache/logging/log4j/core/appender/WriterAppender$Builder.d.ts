import type { Writer } from '../../../../../../java/io/Writer.d.ts'
import type { AbstractAppender$Builder } from '../../../../../../org/apache/logging/log4j/core/appender/AbstractAppender$Builder.d.ts'
import type { WriterAppender } from '../../../../../../org/apache/logging/log4j/core/appender/WriterAppender.d.ts'
import type { Builder } from '../../../../../../org/apache/logging/log4j/core/util/Builder.d.ts'
export class WriterAppender$Builder<B extends WriterAppender$Builder<B>> extends AbstractAppender$Builder<B> implements Builder<WriterAppender> {
    constructor()
    // private follow: boolean;
    // private target: Writer;
    build(): WriterAppender;
    getErrorPrefix(): string;
    isValid(): boolean;
    setFollow(shouldFollow: boolean): B;
    setTarget(aTarget: Writer): B;
}
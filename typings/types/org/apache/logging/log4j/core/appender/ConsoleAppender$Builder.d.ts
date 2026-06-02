import type { AbstractOutputStreamAppender$Builder } from '../../../../../../org/apache/logging/log4j/core/appender/AbstractOutputStreamAppender$Builder.d.ts'
import type { ConsoleAppender } from '../../../../../../org/apache/logging/log4j/core/appender/ConsoleAppender.d.ts'
import type { ConsoleAppender$Target } from '../../../../../../org/apache/logging/log4j/core/appender/ConsoleAppender$Target.d.ts'
import type { Builder } from '../../../../../../org/apache/logging/log4j/core/util/Builder.d.ts'
export class ConsoleAppender$Builder<B extends ConsoleAppender$Builder<B>> extends AbstractOutputStreamAppender$Builder<B> implements Builder<ConsoleAppender> {
    constructor()
    // private direct: boolean;
    // private follow: boolean;
    // private target: ConsoleAppender$Target;
    build(): ConsoleAppender;
    getErrorPrefix(): string;
    isValid(): boolean;
    setDirect(shouldDirect: boolean): B;
    setFollow(shouldFollow: boolean): B;
    setTarget(aTarget: ConsoleAppender$Target): B;
}
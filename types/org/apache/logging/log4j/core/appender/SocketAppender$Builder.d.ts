import type { SocketAppender } from '../../../../../../org/apache/logging/log4j/core/appender/SocketAppender.d.ts'
import type { SocketAppender$AbstractBuilder } from '../../../../../../org/apache/logging/log4j/core/appender/SocketAppender$AbstractBuilder.d.ts'
import type { Builder } from '../../../../../../org/apache/logging/log4j/core/util/Builder.d.ts'
export class SocketAppender$Builder extends SocketAppender$AbstractBuilder<SocketAppender$Builder> implements Builder<SocketAppender> {
    constructor()
    build(): SocketAppender;
    getErrorPrefix(): string;
    isValid(): boolean;
}
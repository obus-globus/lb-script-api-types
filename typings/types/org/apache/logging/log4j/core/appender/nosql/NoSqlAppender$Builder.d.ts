import type { AbstractAppender$Builder } from '../../../../../../../org/apache/logging/log4j/core/appender/AbstractAppender$Builder.d.ts'
import type { NoSqlAppender } from '../../../../../../../org/apache/logging/log4j/core/appender/nosql/NoSqlAppender.d.ts'
import type { NoSqlProvider } from '../../../../../../../org/apache/logging/log4j/core/appender/nosql/NoSqlProvider.d.ts'
import type { Builder } from '../../../../../../../org/apache/logging/log4j/core/util/Builder.d.ts'
import type { KeyValuePair } from '../../../../../../../org/apache/logging/log4j/core/util/KeyValuePair.d.ts'
export class NoSqlAppender$Builder<B extends NoSqlAppender$Builder<B>> extends AbstractAppender$Builder<B> implements Builder<NoSqlAppender> {
    constructor()
    // private additionalFields: KeyValuePair[];
    // private bufferSize: number;
    // private provider: NoSqlProvider<any>;
    build(): NoSqlAppender;
    getErrorPrefix(): string;
    isValid(): boolean;
    setBufferSize(bufferSize: number): B;
    setProvider(provider: NoSqlProvider<any>): B;
}
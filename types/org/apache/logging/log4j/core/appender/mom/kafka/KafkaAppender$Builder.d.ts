import type { AbstractAppender$Builder } from '../../../../../../../../org/apache/logging/log4j/core/appender/AbstractAppender$Builder.d.ts'
import type { KafkaAppender } from '../../../../../../../../org/apache/logging/log4j/core/appender/mom/kafka/KafkaAppender.d.ts'
import type { Builder } from '../../../../../../../../org/apache/logging/log4j/core/util/Builder.d.ts'
export class KafkaAppender$Builder<B extends KafkaAppender$Builder<B>> extends AbstractAppender$Builder<B> implements Builder<KafkaAppender> {
    constructor()
    // private key: string;
    readonly retryCount: number;
    readonly sendEventTimestamp: boolean;
    readonly syncSend: boolean;
    readonly topic: string;
    build(): KafkaAppender;
    getErrorPrefix(): string;
    getRetryCount(): number;
    getTopic(): string;
    isSendEventTimestamp(): boolean;
    isSyncSend(): boolean;
    isValid(): boolean;
    setKey(key: string): B;
    setRetryCount(retryCount: number): B;
    setRetryCount(retryCount: string): B;
    setSendEventTimestamp(sendEventTimestamp: boolean): B;
    setSyncSend(syncSend: boolean): B;
    setTopic(topic: string): B;
}
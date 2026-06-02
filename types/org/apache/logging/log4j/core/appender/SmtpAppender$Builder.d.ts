import type { Serializable } from '../../../../../../java/io/Serializable.d.ts'
import type { Filter } from '../../../../../../org/apache/logging/log4j/core/Filter.d.ts'
import type { Layout } from '../../../../../../org/apache/logging/log4j/core/Layout.d.ts'
import type { AbstractAppender$Builder } from '../../../../../../org/apache/logging/log4j/core/appender/AbstractAppender$Builder.d.ts'
import type { SmtpAppender } from '../../../../../../org/apache/logging/log4j/core/appender/SmtpAppender.d.ts'
import type { SslConfiguration } from '../../../../../../org/apache/logging/log4j/core/net/ssl/SslConfiguration.d.ts'
import type { Builder } from '../../../../../../org/apache/logging/log4j/core/util/Builder.d.ts'
export class SmtpAppender$Builder extends AbstractAppender$Builder<SmtpAppender$Builder> implements Builder<SmtpAppender> {
    constructor()
    // private bcc: string;
    // private bufferSize: number;
    // private cc: string;
    // private from: string;
    // private replyTo: string;
    // private smtpDebug: boolean;
    // private smtpHost: string;
    // private smtpPassword: string;
    // private smtpPort: number;
    // private smtpProtocol: string;
    // private smtpUsername: string;
    // private sslConfiguration: SslConfiguration;
    // private subject: string;
    // private to: string;
    build(): SmtpAppender;
    getErrorPrefix(): string;
    isValid(): boolean;
    setBcc(bcc: string): SmtpAppender$Builder;
    setBufferSize(bufferSize: number): SmtpAppender$Builder;
    setCc(cc: string): SmtpAppender$Builder;
    setFilter(filter: Filter): SmtpAppender$Builder;
    setFrom(from: string): SmtpAppender$Builder;
    setLayout(layout: Layout<Serializable>): SmtpAppender$Builder;
    setReplyTo(replyTo: string): SmtpAppender$Builder;
    setSmtpDebug(smtpDebug: boolean): SmtpAppender$Builder;
    setSmtpHost(smtpHost: string): SmtpAppender$Builder;
    setSmtpPassword(smtpPassword: string): SmtpAppender$Builder;
    setSmtpPort(smtpPort: number): SmtpAppender$Builder;
    setSmtpProtocol(smtpProtocol: string): SmtpAppender$Builder;
    setSmtpUsername(smtpUsername: string): SmtpAppender$Builder;
    setSslConfiguration(sslConfiguration: SslConfiguration): SmtpAppender$Builder;
    setSubject(subject: string): SmtpAppender$Builder;
    setTo(to: string): SmtpAppender$Builder;
}
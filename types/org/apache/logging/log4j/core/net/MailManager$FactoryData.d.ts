import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { AbstractStringLayout$Serializer } from '../../../../../../org/apache/logging/log4j/core/layout/AbstractStringLayout$Serializer.d.ts'
import type { SslConfiguration } from '../../../../../../org/apache/logging/log4j/core/net/ssl/SslConfiguration.d.ts'
export class MailManager$FactoryData extends Object {
    constructor(to: string, cc: string, bcc: string, from: string, replyTo: string, subject: string, subjectSerializer: AbstractStringLayout$Serializer, smtpProtocol: string, smtpHost: string, smtpPort: number, smtpUsername: string, smtpPassword: string, smtpDebug: boolean, bufferSize: number, sslConfiguration: SslConfiguration, filterName: string)
    readonly bcc: string;
    readonly bufferSize: number;
    readonly cc: string;
    readonly filterName: string;
    readonly from: string;
    readonly managerName: string;
    readonly replyTo: string;
    readonly smtpDebug: boolean;
    readonly smtpHost: string;
    readonly smtpPassword: string;
    readonly smtpPort: number;
    readonly smtpProtocol: string;
    readonly smtpUsername: string;
    readonly sslConfiguration: SslConfiguration;
    readonly subject: string;
    readonly subjectSerializer: AbstractStringLayout$Serializer;
    readonly to: string;
    getBcc(): string;
    getBufferSize(): number;
    getCc(): string;
    getFilterName(): string;
    getFrom(): string;
    getManagerName(): string;
    getReplyTo(): string;
    getSmtpHost(): string;
    getSmtpPassword(): string;
    getSmtpPort(): number;
    getSmtpProtocol(): string;
    getSmtpUsername(): string;
    getSslConfiguration(): SslConfiguration;
    getSubject(): string;
    getSubjectSerializer(): AbstractStringLayout$Serializer;
    getTo(): string;
    isSmtpDebug(): boolean;
}
import type { AbstractOutputStreamAppender$Builder } from '../../../../../../org/apache/logging/log4j/core/appender/AbstractOutputStreamAppender$Builder.d.ts'
import type { RollingRandomAccessFileAppender } from '../../../../../../org/apache/logging/log4j/core/appender/RollingRandomAccessFileAppender.d.ts'
import type { RolloverStrategy } from '../../../../../../org/apache/logging/log4j/core/appender/rolling/RolloverStrategy.d.ts'
import type { TriggeringPolicy } from '../../../../../../org/apache/logging/log4j/core/appender/rolling/TriggeringPolicy.d.ts'
import type { Builder } from '../../../../../../org/apache/logging/log4j/core/util/Builder.d.ts'
export class RollingRandomAccessFileAppender$Builder<B extends RollingRandomAccessFileAppender$Builder<B>> extends AbstractOutputStreamAppender$Builder<B> implements Builder<RollingRandomAccessFileAppender> {
    constructor()
    // private advertise: boolean;
    // private advertiseURI: string;
    // private append: boolean;
    // private fileGroup: string;
    // private fileName: string;
    // private fileOwner: string;
    // private filePattern: string;
    // private filePermissions: string;
    // private policy: TriggeringPolicy;
    // private strategy: RolloverStrategy;
    build(): RollingRandomAccessFileAppender;
    getErrorPrefix(): string;
    isValid(): boolean;
    setAdvertise(advertise: boolean): B;
    setAdvertiseURI(advertiseURI: string): B;
    setAppend(append: boolean): B;
    setFileGroup(fileGroup: string): B;
    setFileName(fileName: string): B;
    setFileOwner(fileOwner: string): B;
    setFilePattern(filePattern: string): B;
    setFilePermissions(filePermissions: string): B;
    setPolicy(policy: TriggeringPolicy): B;
    setStrategy(strategy: RolloverStrategy): B;
    withAdvertise(advertise: boolean): B;
    withAdvertiseURI(advertiseURI: string): B;
    withAppend(append: boolean): B;
    withFileGroup(fileGroup: string): B;
    withFileName(fileName: string): B;
    withFileOwner(fileOwner: string): B;
    withFilePattern(filePattern: string): B;
    withFilePermissions(filePermissions: string): B;
    withPolicy(policy: TriggeringPolicy): B;
    withStrategy(strategy: RolloverStrategy): B;
}
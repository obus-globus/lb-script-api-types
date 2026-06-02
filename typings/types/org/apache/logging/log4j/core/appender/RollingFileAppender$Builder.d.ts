import type { AbstractOutputStreamAppender$Builder } from '../../../../../../org/apache/logging/log4j/core/appender/AbstractOutputStreamAppender$Builder.d.ts'
import type { RollingFileAppender } from '../../../../../../org/apache/logging/log4j/core/appender/RollingFileAppender.d.ts'
import type { RolloverStrategy } from '../../../../../../org/apache/logging/log4j/core/appender/rolling/RolloverStrategy.d.ts'
import type { TriggeringPolicy } from '../../../../../../org/apache/logging/log4j/core/appender/rolling/TriggeringPolicy.d.ts'
import type { Builder } from '../../../../../../org/apache/logging/log4j/core/util/Builder.d.ts'
export class RollingFileAppender$Builder<B extends RollingFileAppender$Builder<B>> extends AbstractOutputStreamAppender$Builder<B> implements Builder<RollingFileAppender> {
    constructor()
    readonly advertise: boolean;
    readonly advertiseUri: string;
    readonly append: boolean;
    readonly createOnDemand: boolean;
    readonly fileGroup: string;
    readonly fileName: string;
    readonly fileOwner: string;
    readonly filePattern: string;
    readonly filePermissions: string;
    readonly locking: boolean;
    readonly policy: TriggeringPolicy;
    readonly strategy: RolloverStrategy;
    build(): RollingFileAppender;
    getAdvertiseUri(): string;
    getErrorPrefix(): string;
    getFileGroup(): string;
    getFileName(): string;
    getFileOwner(): string;
    getFilePattern(): string;
    getFilePermissions(): string;
    getPolicy(): TriggeringPolicy;
    getStrategy(): RolloverStrategy;
    isAdvertise(): boolean;
    isAppend(): boolean;
    isCreateOnDemand(): boolean;
    isLocking(): boolean;
    isValid(): boolean;
    withAdvertise(advertise: boolean): B;
    withAdvertiseUri(advertiseUri: string): B;
    withAppend(append: boolean): B;
    withCreateOnDemand(createOnDemand: boolean): B;
    withFileGroup(fileGroup: string): B;
    withFileName(fileName: string): B;
    withFileOwner(fileOwner: string): B;
    withFilePattern(filePattern: string): B;
    withFilePermissions(filePermissions: string): B;
    withLocking(locking: boolean): B;
    withPolicy(policy: TriggeringPolicy): B;
    withStrategy(strategy: RolloverStrategy): B;
}
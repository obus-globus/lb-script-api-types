import type { AbstractOutputStreamAppender$Builder } from '../../../../../../org/apache/logging/log4j/core/appender/AbstractOutputStreamAppender$Builder.d.ts'
export abstract class AbstractFileAppender$Builder<B extends AbstractFileAppender$Builder<B>> extends AbstractOutputStreamAppender$Builder<B> {
    constructor()
    readonly advertise: boolean;
    readonly advertiseUri: string;
    readonly append: boolean;
    readonly createOnDemand: boolean;
    readonly fileGroup: string;
    readonly fileName: string;
    readonly fileOwner: string;
    readonly filePermissions: string;
    readonly locking: boolean;
    getAdvertiseUri(): string;
    getFileGroup(): string;
    getFileName(): string;
    getFileOwner(): string;
    getFilePermissions(): string;
    isAdvertise(): boolean;
    isAppend(): boolean;
    isCreateOnDemand(): boolean;
    isLocking(): boolean;
    withAdvertise(advertise: boolean): B;
    withAdvertiseUri(advertiseUri: string): B;
    withAppend(append: boolean): B;
    withCreateOnDemand(createOnDemand: boolean): B;
    withFileGroup(fileGroup: string): B;
    withFileName(fileName: string): B;
    withFileOwner(fileOwner: string): B;
    withFilePermissions(filePermissions: string): B;
    withLocking(locking: boolean): B;
}
import type { AbstractOutputStreamAppender$Builder } from '../../../../../../org/apache/logging/log4j/core/appender/AbstractOutputStreamAppender$Builder.d.ts'
import type { FileAppender } from '../../../../../../org/apache/logging/log4j/core/appender/FileAppender.d.ts'
import type { Builder } from '../../../../../../org/apache/logging/log4j/core/util/Builder.d.ts'
export class FileAppender$Builder<B extends FileAppender$Builder<B>> extends AbstractOutputStreamAppender$Builder<B> implements Builder<FileAppender> {
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
    build(): FileAppender;
    getAdvertiseUri(): string;
    getErrorPrefix(): string;
    getFileGroup(): string;
    getFileName(): string;
    getFileOwner(): string;
    getFilePermissions(): string;
    isAdvertise(): boolean;
    isAppend(): boolean;
    isCreateOnDemand(): boolean;
    isLocking(): boolean;
    isValid(): boolean;
    setAdvertise(advertise: boolean): B;
    setAdvertiseUri(advertiseUri: string): B;
    setAppend(append: boolean): B;
    setCreateOnDemand(createOnDemand: boolean): B;
    setFileGroup(fileGroup: string): B;
    setFileName(fileName: string): B;
    setFileOwner(fileOwner: string): B;
    setFilePermissions(filePermissions: string): B;
    setLocking(locking: boolean): B;
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
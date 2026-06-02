import type { File } from '../../../../../../../../java/io/File.d.ts'
import type { Exception } from '../../../../../../../../java/lang/Exception.d.ts'
import type { AbstractAction } from '../../../../../../../../org/apache/logging/log4j/core/appender/rolling/action/AbstractAction.d.ts'
export class GzCompressAction extends AbstractAction {
    static execute(paramsource: File, paramdestination: File, paramdeleteSource: boolean): boolean;
    static execute(paramsource: File, paramdestination: File, paramdeleteSource: boolean, paramcompressionLevel: number): boolean;
    constructor(source: File, destination: File, deleteSource: boolean)
    constructor(source: File, destination: File, deleteSource: boolean, compressionLevel: number)
    // private compressionLevel: number;
    readonly deleteSource: boolean;
    readonly destination: File;
    readonly source: File;
    execute(): boolean;
    getDestination(): File;
    getSource(): File;
    isDeleteSource(): boolean;
    reportException(ex: Exception): void;
    toString(): string;
}
import type { File } from '../../../../../../../../java/io/File.d.ts'
import type { Exception } from '../../../../../../../../java/lang/Exception.d.ts'
import type { AbstractAction } from '../../../../../../../../org/apache/logging/log4j/core/appender/rolling/action/AbstractAction.d.ts'
export class ZipCompressAction extends AbstractAction {
    static execute(paramsource: File, paramdestination: File, paramdeleteSource: boolean, paramlevel: number): boolean;
    constructor(source: File, destination: File, deleteSource: boolean, level: number)
    readonly deleteSource: boolean;
    readonly destination: File;
    readonly level: number;
    readonly source: File;
    execute(): boolean;
    getDestination(): File;
    getLevel(): number;
    getSource(): File;
    isDeleteSource(): boolean;
    reportException(ex: Exception): void;
    toString(): string;
}
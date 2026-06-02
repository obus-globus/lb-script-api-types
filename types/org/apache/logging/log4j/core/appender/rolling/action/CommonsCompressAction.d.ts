import type { File } from '../../../../../../../../java/io/File.d.ts'
import type { Exception } from '../../../../../../../../java/lang/Exception.d.ts'
import type { AbstractAction } from '../../../../../../../../org/apache/logging/log4j/core/appender/rolling/action/AbstractAction.d.ts'
export class CommonsCompressAction extends AbstractAction {
    static execute(paramname: string, paramsource: File, paramdestination: File, paramdeleteSource: boolean): boolean;
    constructor(name: string, source: File, destination: File, deleteSource: boolean)
    readonly deleteSource: boolean;
    readonly destination: File;
    readonly name: string;
    readonly source: File;
    execute(): boolean;
    getDestination(): File;
    getName(): string;
    getSource(): File;
    isDeleteSource(): boolean;
    reportException(ex: Exception): void;
    toString(): string;
}
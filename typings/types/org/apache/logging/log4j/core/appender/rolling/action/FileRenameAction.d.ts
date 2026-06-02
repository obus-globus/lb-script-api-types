import type { File } from '../../../../../../../../java/io/File.d.ts'
import type { AbstractAction } from '../../../../../../../../org/apache/logging/log4j/core/appender/rolling/action/AbstractAction.d.ts'
export class FileRenameAction extends AbstractAction {
    static execute(paramsource: File, paramdestination: File, paramrenameEmptyFiles: boolean): boolean;
    constructor(src: File, dst: File, renameEmptyFiles: boolean)
    readonly destination: File;
    readonly renameEmptyFiles: boolean;
    readonly source: File;
    execute(): boolean;
    getDestination(): File;
    getSource(): File;
    isRenameEmptyFiles(): boolean;
    toString(): string;
}
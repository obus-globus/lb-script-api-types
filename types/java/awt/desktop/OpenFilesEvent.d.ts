import type { FilesEvent } from '../../../java/awt/desktop/FilesEvent.d.ts'
import type { File } from '../../../java/io/File.d.ts'
export class OpenFilesEvent extends FilesEvent {
    constructor(arg0: File[], arg1: string)
    readonly searchTerm: string;
    getSearchTerm(): string;
}
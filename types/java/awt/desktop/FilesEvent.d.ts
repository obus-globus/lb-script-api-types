import type { AppEvent } from '../../../java/awt/desktop/AppEvent.d.ts'
import type { File } from '../../../java/io/File.d.ts'
export class FilesEvent extends AppEvent {
    constructor(arg0: File[])
    readonly files: File[];
    getFiles(): File[];
}
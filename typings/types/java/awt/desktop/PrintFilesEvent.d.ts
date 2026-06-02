import type { FilesEvent } from '../../../java/awt/desktop/FilesEvent.d.ts'
import type { File } from '../../../java/io/File.d.ts'
export class PrintFilesEvent extends FilesEvent {
    constructor(arg0: File[])
}
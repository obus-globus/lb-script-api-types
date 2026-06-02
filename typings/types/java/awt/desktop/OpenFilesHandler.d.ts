import type { OpenFilesEvent } from '../../../java/awt/desktop/OpenFilesEvent.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export interface OpenFilesHandler extends Object{
    openFiles(arg0: OpenFilesEvent): void;
}
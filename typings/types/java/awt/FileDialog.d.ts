import type { Dialog } from '../../java/awt/Dialog.d.ts'
import type { Dialog$ModalityType } from '../../java/awt/Dialog$ModalityType.d.ts'
import type { Frame } from '../../java/awt/Frame.d.ts'
import type { Window } from '../../java/awt/Window.d.ts'
import type { File } from '../../java/io/File.d.ts'
import type { FilenameFilter } from '../../java/io/FilenameFilter.d.ts'
import type { ObjectInputStream } from '../../java/io/ObjectInputStream.d.ts'
export class FileDialog extends Dialog {
    static ABORT: number;
    static ALLBITS: number;
    static BOTTOM_ALIGNMENT: number;
    static CENTER_ALIGNMENT: number;
    static DEFAULT_MODALITY_TYPE: Dialog$ModalityType;
    static ERROR: number;
    static FRAMEBITS: number;
    static HEIGHT: number;
    static LEFT_ALIGNMENT: number;
    static LOAD: number;
    static PROPERTIES: number;
    static RIGHT_ALIGNMENT: number;
    static SAVE: number;
    static SOMEBITS: number;
    static TOP_ALIGNMENT: number;
    static WIDTH: number;
    static getOwnerlessWindows(): Window[];
    static getWindows(): Window[];
    constructor(arg0: Dialog)
    constructor(arg0: Dialog, arg1: string)
    constructor(arg0: Dialog, arg1: string, arg2: number)
    constructor(arg0: Frame)
    constructor(arg0: Frame, arg1: string)
    constructor(arg0: Frame, arg1: string, arg2: number)
    // private dir: string;
    file: string;
    readonly files: File[];
    // private filter: (param0: File, param1: string) => boolean;
    mode: number;
    readonly multipleMode: boolean;
    addNotify(): void;
    constructComponentName(): string;
    getDirectory(): string;
    getFile(): string;
    getFilenameFilter(): (param0: File, param1: string) => boolean;
    getFiles(): File[];
    getMode(): number;
    isMultipleMode(): boolean;
    paramString(): string;
    postsOldMouseEvents(): boolean;
    // private readObject(arg0: ObjectInputStream): void;
    setDirectory(arg0: string): void;
    setFile(arg0: string): void;
    setFilenameFilter(arg0: (param0: File, param1: string) => boolean): void;
    // private setFiles(arg0: File[]): void;
    setMode(arg0: number): void;
    setMultipleMode(arg0: boolean): void;
    setTitle(arg0: string): void;
}
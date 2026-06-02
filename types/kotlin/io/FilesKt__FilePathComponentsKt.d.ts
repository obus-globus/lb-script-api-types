import type { File } from '../../java/io/File.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
import type { FilePathComponents } from '../../kotlin/io/FilePathComponents.d.ts'
export class FilesKt__FilePathComponentsKt extends Object {
    static getRoot(paramarg0: File): File;
    static getRootName(paramarg0: File): string;
    static isRooted(paramarg0: File): boolean;
    static subPath(paramarg0: File, paramarg1: number, paramarg2: number): File;
    static toComponents(paramarg0: File): FilePathComponents;
}
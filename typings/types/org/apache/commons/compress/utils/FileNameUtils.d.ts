import type { Path } from '../../../../../java/nio/file/Path.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class FileNameUtils extends Object {
    static getBaseName(paramarg0: string): string;
    static getBaseName(paramarg0: Path[][]): string;
    static getExtension(paramarg0: string): string;
    static getExtension(paramarg0: Path[][]): string;
    constructor()
}
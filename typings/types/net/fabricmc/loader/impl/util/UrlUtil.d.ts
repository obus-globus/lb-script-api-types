import type { File } from '../../../../../java/io/File.d.ts'
import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { URL } from '../../../../../java/net/URL.d.ts'
import type { Path } from '../../../../../java/nio/file/Path.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class UrlUtil extends Object {
    static LOADER_CODE_SOURCE: Path;
    static asPath(paramarg0: URL): Path;
    static asUrl(paramarg0: File): URL;
    static asUrl(paramarg0: Path): URL;
    static getCodeSource(paramarg0: Class<Object>): Path;
    static getCodeSource(paramarg0: URL, paramarg1: string): Path;
    constructor()
}
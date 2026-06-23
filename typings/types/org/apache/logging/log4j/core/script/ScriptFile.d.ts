import type { Charset } from '../../../../../../java/nio/charset/Charset.d.ts'
import type { Path } from '../../../../../../java/nio/file/Path.d.ts'
import type { AbstractScript } from '../../../../../../org/apache/logging/log4j/core/script/AbstractScript.d.ts'
export class ScriptFile extends AbstractScript {
    static createScript(paramname: string, paramlanguage: string, paramfilePathOrUri: string, paramisWatched: boolean, paramcharset: Charset): ScriptFile;
    constructor(name: string, filePath: Path[], language: string, isWatched: boolean, scriptText: string)
    // private filePath: Path[];
    // private isWatched: boolean;
    getPath(): Path[];
    isWatched(): boolean;
    toString(): string;
}
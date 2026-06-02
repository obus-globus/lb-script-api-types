import type { File } from '../../../../java/io/File.d.ts'
import type { FilenameFilter } from '../../../../java/io/FilenameFilter.d.ts'
import type { Pattern } from '../../../../java/util/regex/Pattern.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class PatternFilenameFilter extends Object implements FilenameFilter {
    constructor(pattern: Pattern)
    constructor(patternStr: string)
    // private pattern: Pattern;
    accept(dir: File, fileName: string): boolean;
}
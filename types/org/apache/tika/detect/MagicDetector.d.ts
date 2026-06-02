import type { InputStream } from '../../../../java/io/InputStream.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Detector } from '../../../../org/apache/tika/detect/Detector.d.ts'
import type { Metadata } from '../../../../org/apache/tika/metadata/Metadata.d.ts'
import type { MediaType } from '../../../../org/apache/tika/mime/MediaType.d.ts'
export class MagicDetector extends Object implements Detector {
    static parse(paramarg0: MediaType, paramarg1: string, paramarg2: string, paramarg3: string, paramarg4: string): MagicDetector;
    constructor(arg0: MediaType, arg1: number[])
    constructor(arg0: MediaType, arg1: number[], arg2: number[], arg3: boolean, arg4: boolean, arg5: number, arg6: number)
    constructor(arg0: MediaType, arg1: number[], arg2: number[], arg3: boolean, arg4: number, arg5: number)
    constructor(arg0: MediaType, arg1: number[], arg2: number[], arg3: number, arg4: number)
    constructor(arg0: MediaType, arg1: number[], arg2: number)
    // private isRegex: boolean;
    // private isStringIgnoreCase: boolean;
    readonly length: number;
    // private mask: number[];
    // private offsetRangeBegin: number;
    // private offsetRangeEnd: number;
    // private pattern: number[];
    // private patternLength: number;
    // private type: MediaType;
    detect(arg0: InputStream, arg1: Metadata): MediaType;
    getLength(): number;
    toString(): string;
}
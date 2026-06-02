import type { TruffleFile } from '../../../../../com/oracle/truffle/api/TruffleFile.d.ts'
import type { TruffleFile$FileTypeDetector } from '../../../../../com/oracle/truffle/api/TruffleFile$FileTypeDetector.d.ts'
import type { Charset } from '../../../../../java/nio/charset/Charset.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class JSFileTypeDetector extends Object implements TruffleFile$FileTypeDetector {
    constructor()
    findEncoding(file: TruffleFile): Charset;
    findMimeType(file: TruffleFile): string;
}
import type { TruffleFile } from '../../../../com/oracle/truffle/api/TruffleFile.d.ts'
import type { Charset } from '../../../../java/nio/charset/Charset.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export interface TruffleFile$FileTypeDetector extends Object{
    findEncoding(file: TruffleFile): Charset;
    findMimeType(file: TruffleFile): string;
}
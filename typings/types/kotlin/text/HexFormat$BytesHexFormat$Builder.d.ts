import type { Object } from '../../java/lang/Object.d.ts'
import type { HexFormat$BytesHexFormat } from '../../kotlin/text/HexFormat$BytesHexFormat.d.ts'
export class HexFormat$BytesHexFormat$Builder extends Object {
    constructor()
    bytePrefix: string;
    byteSeparator: string;
    byteSuffix: string;
    bytesPerGroup: number;
    bytesPerLine: number;
    groupSeparator: string;
    build(): HexFormat$BytesHexFormat;
}
import type { StringBuilder } from '../../java/lang/StringBuilder.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
import type { HexFormat$BytesHexFormat$Companion } from '../../kotlin/text/HexFormat$BytesHexFormat$Companion.d.ts'
export class HexFormat$BytesHexFormat extends Object {
    static Companion: HexFormat$BytesHexFormat$Companion;
    constructor(bytesPerLine: number, bytesPerGroup: number, groupSeparator: string, byteSeparator: string, bytePrefix: string, byteSuffix: string)
    readonly bytePrefix: string;
    readonly byteSeparator: string;
    readonly byteSuffix: string;
    readonly bytesPerGroup: number;
    readonly bytesPerLine: number;
    readonly groupSeparator: string;
    // private ignoreCase: boolean;
    /*not mapped: */ getIgnoreCase$kotlin_stdlib(): boolean;
    // private noLineAndGroupSeparator: boolean;
    /*not mapped: */ getNoLineAndGroupSeparator$kotlin_stdlib(): boolean;
    // private shortByteSeparatorNoPrefixAndSuffix: boolean;
    /*not mapped: */ getShortByteSeparatorNoPrefixAndSuffix$kotlin_stdlib(): boolean;
    appendOptionsTo(sb: StringBuilder, indent: string): StringBuilder;
    toString(): string;
}
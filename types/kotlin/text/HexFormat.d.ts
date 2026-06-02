import type { Object } from '../../java/lang/Object.d.ts'
import type { HexFormat$BytesHexFormat } from '../../kotlin/text/HexFormat$BytesHexFormat.d.ts'
import type { HexFormat$Companion } from '../../kotlin/text/HexFormat$Companion.d.ts'
import type { HexFormat$NumberHexFormat } from '../../kotlin/text/HexFormat$NumberHexFormat.d.ts'
export class HexFormat extends Object {
    static Companion: HexFormat$Companion;
    constructor(upperCase: boolean, bytes: HexFormat$BytesHexFormat, number: HexFormat$NumberHexFormat)
    readonly bytes: HexFormat$BytesHexFormat;
    readonly number: HexFormat$NumberHexFormat;
    readonly upperCase: boolean;
    toString(): string;
}
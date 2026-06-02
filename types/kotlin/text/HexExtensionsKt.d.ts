import type { Object } from '../../java/lang/Object.d.ts'
import type { Function2 } from '../../kotlin/jvm/functions/Function2.d.ts'
import type { HexFormat } from '../../kotlin/text/HexFormat.d.ts'
export class HexExtensionsKt extends Object {
    static formattedStringLength(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: number, paramarg5: number, paramarg6: number): number;
    static getBYTE_TO_LOWER_CASE_HEX_DIGITS(): number[];
    static hexToByte(paramarg0: string, paramarg1: HexFormat): number;
    static hexToByteArray(paramarg0: string, paramarg1: HexFormat): number[];
    static hexToInt(paramarg0: string, paramarg1: number, paramarg2: number, paramarg3: HexFormat): number;
    static hexToInt(paramarg0: string, paramarg1: HexFormat): number;
    static hexToLong(paramarg0: string, paramarg1: number, paramarg2: number, paramarg3: HexFormat): number;
    static hexToLong(paramarg0: string, paramarg1: HexFormat): number;
    static hexToShort(paramarg0: string, paramarg1: HexFormat): number;
    static parseHexToInt(paramarg0: string, paramarg1: number, paramarg2: number, paramarg3: Function2<Object, Object, Object>): number;
    static parseHexToLong(paramarg0: string, paramarg1: number, paramarg2: number, paramarg3: Function2<Object, Object, Object>): number;
    static parsedByteArrayMaxSize(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: number, paramarg5: number, paramarg6: number): number;
    static toHexString(paramarg0: number, paramarg1: HexFormat): string;
    static toHexString(paramarg0: number[], paramarg1: number, paramarg2: number, paramarg3: HexFormat): string;
    static toHexString(paramarg0: number[], paramarg1: HexFormat): string;
    static toHexString(paramarg0: number, paramarg1: HexFormat): string;
    static toHexString(paramarg0: number, paramarg1: HexFormat): string;
    static toHexString(paramarg0: number, paramarg1: HexFormat): string;
}
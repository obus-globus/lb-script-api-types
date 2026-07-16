import type { Object } from '../../java/lang/Object.d.ts'
import type { HexFormat } from '../../kotlin/text/HexFormat.d.ts'
export class HexExtensionsKt extends Object {
    static formattedStringLength(numberOfBytes: number, bytesPerLine: number, bytesPerGroup: number, groupSeparatorLength: number, byteSeparatorLength: number, bytePrefixLength: number, byteSuffixLength: number): number;
    static getBYTE_TO_LOWER_CASE_HEX_DIGITS(): number[];
    static hexToByte(self: string, format: HexFormat): number;
    static hexToByteArray(self: string, format: HexFormat): number[];
    static hexToInt(self: string, startIndex: number, endIndex: number, format: HexFormat): number;
    static hexToInt(self: string, format: HexFormat): number;
    static hexToLong(self: string, startIndex: number, endIndex: number, format: HexFormat): number;
    static hexToLong(self: string, format: HexFormat): number;
    static hexToShort(self: string, format: HexFormat): number;
    static parseHexToInt(self: string, startIndex: number, endIndex: number, onError: (param0: string, param1: number) => void): number;
    static parseHexToLong(self: string, startIndex: number, endIndex: number, onError: (param0: string, param1: number) => void): number;
    static parsedByteArrayMaxSize(stringLength: number, bytesPerLine: number, bytesPerGroup: number, groupSeparatorLength: number, byteSeparatorLength: number, bytePrefixLength: number, byteSuffixLength: number): number;
    static toHexString(self: number, format: HexFormat): string;
    static toHexString(self: number[], startIndex: number, endIndex: number, format: HexFormat): string;
    static toHexString(self: number[], format: HexFormat): string;
}
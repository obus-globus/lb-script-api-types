import type { Class } from '../../java/lang/Class.d.ts'
import type { OffsetDateTime } from '../../java/time/OffsetDateTime.d.ts'
import type { Pattern } from '../../java/util/regex/Pattern.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
import type { Enum } from '../../java/lang/Enum.d.ts'
import type { Pair } from '../../oshi/util/tuples/Pair.d.ts'
import type { Triplet } from '../../oshi/util/tuples/Triplet.d.ts'
export class ParseUtil extends Object {
    static notDigits: Pattern;
    static slash: Pattern;
    static startWithNotDigits: Pattern;
    static whitespaces: Pattern;
    static whitespacesColonWhitespace: Pattern;
    static asciiStringToByteArray(paramarg0: string, paramarg1: number): number[];
    static bigEndian16ToLittleEndian(paramarg0: number): number;
    static byteArrayToFloat(paramarg0: number[], paramarg1: number, paramarg2: number): number;
    static byteArrayToHexString(paramarg0: number[]): string;
    static byteArrayToLong(paramarg0: number[], paramarg1: number): number;
    static byteArrayToLong(paramarg0: number[], paramarg1: number, paramarg2: boolean): number;
    static countStringToLongArray(paramarg0: string, paramarg1: string): number;
    static filePathStartsWith(paramarg0: string[], paramarg1: string): boolean;
    static filetimeToUtcMs(paramarg0: number, paramarg1: boolean): number;
    static getDoubleQuoteStringValue(paramarg0: string): string;
    static getFirstIntValue(paramarg0: string): number;
    static getNthIntValue(paramarg0: string, paramarg1: number): number;
    static getSingleQuoteStringValue(paramarg0: string): string;
    static getStringBetween(paramarg0: string, paramarg1: string): string;
    static getStringValueOrUnknown(paramarg0: string): string;
    static getTextBetweenStrings(paramarg0: string, paramarg1: string, paramarg2: string): string;
    static getValueOrUnknown(paramarg0: Map<Object, string>, paramarg1: Object): string;
    static getValueOrUnknown(paramarg0: { [key: string]: string }, paramarg1: string): string;
    static hexStringToByteArray(paramarg0: string): number[];
    static hexStringToInt(paramarg0: string, paramarg1: number): number;
    static hexStringToLong(paramarg0: string, paramarg1: number): number;
    static hexStringToString(paramarg0: string): string;
    static longToByteArray(paramarg0: number, paramarg1: number, paramarg2: number): number[];
    static parseByteArrayToStringMap(paramarg0: number[]): { [key: string]: string };
    static parseByteArrayToStrings(paramarg0: number[]): string[];
    static parseCharArrayToStringMap(paramarg0: string[]): { [key: string]: string };
    static parseCimDateTimeToOffset(paramarg0: string): OffsetDateTime;
    static parseDHMSOrDefault(paramarg0: string, paramarg1: number): number;
    static parseDateToEpoch(paramarg0: string, paramarg1: string): number;
    static parseDecimalMemorySizeToBinary(paramarg0: string): number;
    static parseDeviceIdToVendorProductSerial(paramarg0: string): Triplet<string, string, string>;
    static parseDoubleOrDefault(paramarg0: string, paramarg1: number): number;
    static parseHertz(paramarg0: string): number;
    static parseHyphenatedIntList(paramarg0: string): number[];
    static parseIntArrayToIP(paramarg0: number[]): number[];
    static parseIntOrDefault(paramarg0: string, paramarg1: number): number;
    static parseIntToIP(paramarg0: number): number[];
    static parseLastDouble(paramarg0: string, paramarg1: number): number;
    static parseLastInt(paramarg0: string, paramarg1: number): number;
    static parseLastLong(paramarg0: string, paramarg1: number): number;
    static parseLastString(paramarg0: string): string;
    static parseLongOrDefault(paramarg0: string, paramarg1: number): number;
    static parseLshwResourceString(paramarg0: string): number;
    static parseLspciMachineReadable(paramarg0: string): Pair<string, string>;
    static parseLspciMemorySize(paramarg0: string): number;
    static parseMmDdYyyyToYyyyMmDD(paramarg0: string): string;
    static parseMultipliedToLongs(paramarg0: string): number;
    static parseSpeed(paramarg0: string): number;
    static parseStringToLongArray(paramarg0: string, paramarg1: number[], paramarg2: number, paramarg3: string): number[];
    static parseUnsignedLongOrDefault(paramarg0: string, paramarg1: number): number;
    static parseUtAddrV6toIP(paramarg0: number[]): string;
    static parseUuidOrDefault(paramarg0: string, paramarg1: string): string;
    static removeLeadingDots(paramarg0: string): string;
    static removeMatchingString(paramarg0: string, paramarg1: string): string;
    static strToLong(paramarg0: string, paramarg1: number): number;
    static stringToEnumMap<K extends Enum<K>>(paramarg0: Class<K>, paramarg1: string, paramarg2: string): Map<K, string>;
    static unsignedIntToLong(paramarg0: number): number;
    static unsignedLongToSignedLong(paramarg0: number): number;
    private constructor()
}
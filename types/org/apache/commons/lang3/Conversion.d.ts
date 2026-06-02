import type { UUID } from '../../../../java/util/UUID.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class Conversion extends Object {
    static binaryBeMsb0ToHexDigit(paramarg0: (Object | null)[]): string;
    static binaryBeMsb0ToHexDigit(paramarg0: (Object | null)[], paramarg1: number): string;
    static binaryToByte(paramarg0: (Object | null)[], paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: number): number;
    static binaryToHexDigit(paramarg0: (Object | null)[]): string;
    static binaryToHexDigit(paramarg0: (Object | null)[], paramarg1: number): string;
    static binaryToHexDigitMsb0_4bits(paramarg0: (Object | null)[]): string;
    static binaryToHexDigitMsb0_4bits(paramarg0: (Object | null)[], paramarg1: number): string;
    static binaryToInt(paramarg0: (Object | null)[], paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: number): number;
    static binaryToLong(paramarg0: (Object | null)[], paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: number): number;
    static binaryToShort(paramarg0: (Object | null)[], paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: number): number;
    static byteArrayToInt(paramarg0: number[], paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: number): number;
    static byteArrayToLong(paramarg0: number[], paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: number): number;
    static byteArrayToShort(paramarg0: number[], paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: number): number;
    static byteArrayToUuid(paramarg0: number[], paramarg1: number): UUID;
    static byteToBinary(paramarg0: number, paramarg1: number, paramarg2: (Object | null)[], paramarg3: number, paramarg4: number): (Object | null)[];
    static byteToHex(paramarg0: number, paramarg1: number, paramarg2: string, paramarg3: number, paramarg4: number): string;
    static hexDigitMsb0ToBinary(paramarg0: string): (Object | null)[];
    static hexDigitMsb0ToInt(paramarg0: string): number;
    static hexDigitToBinary(paramarg0: string): (Object | null)[];
    static hexDigitToInt(paramarg0: string): number;
    static hexToByte(paramarg0: string, paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: number): number;
    static hexToInt(paramarg0: string, paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: number): number;
    static hexToLong(paramarg0: string, paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: number): number;
    static hexToShort(paramarg0: string, paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: number): number;
    static intArrayToLong(paramarg0: number[], paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: number): number;
    static intToBinary(paramarg0: number, paramarg1: number, paramarg2: (Object | null)[], paramarg3: number, paramarg4: number): (Object | null)[];
    static intToByteArray(paramarg0: number, paramarg1: number, paramarg2: number[], paramarg3: number, paramarg4: number): number[];
    static intToHex(paramarg0: number, paramarg1: number, paramarg2: string, paramarg3: number, paramarg4: number): string;
    static intToHexDigit(paramarg0: number): string;
    static intToHexDigitMsb0(paramarg0: number): string;
    static intToShortArray(paramarg0: number, paramarg1: number, paramarg2: number[], paramarg3: number, paramarg4: number): number[];
    static longToBinary(paramarg0: number, paramarg1: number, paramarg2: (Object | null)[], paramarg3: number, paramarg4: number): (Object | null)[];
    static longToByteArray(paramarg0: number, paramarg1: number, paramarg2: number[], paramarg3: number, paramarg4: number): number[];
    static longToHex(paramarg0: number, paramarg1: number, paramarg2: string, paramarg3: number, paramarg4: number): string;
    static longToIntArray(paramarg0: number, paramarg1: number, paramarg2: number[], paramarg3: number, paramarg4: number): number[];
    static longToShortArray(paramarg0: number, paramarg1: number, paramarg2: number[], paramarg3: number, paramarg4: number): number[];
    static shortArrayToInt(paramarg0: number[], paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: number): number;
    static shortArrayToLong(paramarg0: number[], paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: number): number;
    static shortToBinary(paramarg0: number, paramarg1: number, paramarg2: (Object | null)[], paramarg3: number, paramarg4: number): (Object | null)[];
    static shortToByteArray(paramarg0: number, paramarg1: number, paramarg2: number[], paramarg3: number, paramarg4: number): number[];
    static shortToHex(paramarg0: number, paramarg1: number, paramarg2: string, paramarg3: number, paramarg4: number): string;
    static uuidToByteArray(paramarg0: UUID, paramarg1: number[], paramarg2: number, paramarg3: number): number[];
    constructor()
}
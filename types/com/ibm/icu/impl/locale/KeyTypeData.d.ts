import type { KeyTypeData$ValueType } from '../../../../../com/ibm/icu/impl/locale/KeyTypeData$ValueType.d.ts'
import type { Output } from '../../../../../com/ibm/icu/util/Output.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class KeyTypeData extends Object {
    static getBcp47KeyTypes(paramarg0: string): string[];
    static getBcp47Keys(): string[];
    static getValueType(paramarg0: string): KeyTypeData$ValueType;
    static isDeprecated(paramarg0: string): boolean;
    static isDeprecated(paramarg0: string, paramarg1: string): boolean;
    static toBcpKey(paramarg0: string): string;
    static toBcpType(paramarg0: string, paramarg1: string, paramarg2: Output<boolean>, paramarg3: Output<boolean>): string;
    static toLegacyKey(paramarg0: string): string;
    static toLegacyType(paramarg0: string, paramarg1: string, paramarg2: Output<boolean>, paramarg3: Output<boolean>): string;
    constructor()
}
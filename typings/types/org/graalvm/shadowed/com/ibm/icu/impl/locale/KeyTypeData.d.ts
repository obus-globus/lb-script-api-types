import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { KeyTypeData$ValueType } from '../../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/locale/KeyTypeData$ValueType.d.ts'
import type { Output } from '../../../../../../../../org/graalvm/shadowed/com/ibm/icu/util/Output.d.ts'
export class KeyTypeData extends Object {
    static getBcp47KeyTypes(paramkey: string): string[];
    static getBcp47Keys(): string[];
    static getValueType(paramkey: string): KeyTypeData$ValueType;
    static isDeprecated(paramkey: string): boolean;
    static isDeprecated(paramkey: string, paramtype: string): boolean;
    static toBcpKey(paramkey: string): string;
    static toBcpType(paramkey: string, paramtype: string, paramisKnownKey: Output<boolean>, paramisSpecialType: Output<boolean>): string;
    static toLegacyKey(paramkey: string): string;
    static toLegacyType(paramkey: string, paramtype: string, paramisKnownKey: Output<boolean>, paramisSpecialType: Output<boolean>): string;
    constructor()
}
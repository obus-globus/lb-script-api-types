import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { UCharacterProperty$BinaryProperty } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/UCharacterProperty$BinaryProperty.d.ts'
import type { UCharacterProperty$IntProperty } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/UCharacterProperty$IntProperty.d.ts'
import type { UCharacter$IdentifierType } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/lang/UCharacter$IdentifierType.d.ts'
import type { VersionInfo } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/util/VersionInfo.d.ts'
export class UCharacterProperty extends Object {
    static INSTANCE: UCharacterProperty;
    static LATIN_CAPITAL_LETTER_I_WITH_DOT_ABOVE_: string;
    static LATIN_SMALL_LETTER_DOTLESS_I_: string;
    static LATIN_SMALL_LETTER_I_: string;
    static MAX_SCRIPT: number;
    static SCRIPT_X_MASK: number;
    static SCRIPT_X_WITH_COMMON: number;
    static SCRIPT_X_WITH_INHERITED: number;
    static SCRIPT_X_WITH_OTHER: number;
    static SRC_BIDI: number;
    static SRC_BLOCK: number;
    static SRC_CASE: number;
    static SRC_CASE_AND_NORM: number;
    static SRC_CHAR: number;
    static SRC_CHAR_AND_PROPSVEC: number;
    static SRC_COUNT: number;
    static SRC_EMOJI: number;
    static SRC_IDSU: number;
    static SRC_ID_COMPAT_MATH: number;
    static SRC_INPC: number;
    static SRC_INSC: number;
    static SRC_MCM: number;
    static SRC_NAMES: number;
    static SRC_NFC: number;
    static SRC_NFC_CANON_ITER: number;
    static SRC_NFKC: number;
    static SRC_NFKC_CF: number;
    static SRC_NONE: number;
    static SRC_PROPSVEC: number;
    static SRC_VO: number;
    static TYPE_MASK: number;
    static getEuropeanDigit(paramch: number): number;
    static getMask(paramtype: number): number;
    private constructor()
    // private binProps: UCharacterProperty$BinaryProperty[];
    // private intProps: UCharacterProperty$IntProperty[];
    // private m_additionalColumnsCount_: number;
    // private m_additionalTrie_: (Object | null)[];
    // private m_additionalVectors_: number[];
    // private m_blockTrie_: (Object | null)[];
    // private m_maxBlockScriptValue_: number;
    // private m_maxJTGValue_: number;
    // private m_maxValuesOther_: number;
    m_scriptExtensions_: string[];
    m_trie_: (Object | null)[];
    m_unicodeVersion_: VersionInfo;
    addPropertyStarts(set: string[]): string[];
    digit(c: number): number;
    getAdditional(codepoint: number, column: number): number;
    getAge(codepoint: number): VersionInfo;
    getIDTypes(c: number, types: UCharacter$IdentifierType[]): number;
    getIntPropertyMaxValue(which: number): number;
    getIntPropertyValue(c: number, which: number): number;
    getMaxValues(column: number): number;
    getNumericValue(c: number): number;
    getProperty(ch: number): number;
    getSource(which: number): number;
    getType(c: number): number;
    getUnicodeNumericValue(c: number): number;
    hasBinaryProperty(c: number, which: number): boolean;
    hasIDType(c: number, typeIndex: number): boolean;
    hasIDType(c: number, type: UCharacter$IdentifierType): boolean;
    ublock_addPropertyStarts(set: string[]): void;
    upropsvec_addPropertyStarts(set: string[]): void;
}
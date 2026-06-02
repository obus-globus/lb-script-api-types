import type { CollationData } from '../../../../../com/ibm/icu/impl/coll/CollationData.d.ts'
import type { CollationRuleParser$Importer } from '../../../../../com/ibm/icu/impl/coll/CollationRuleParser$Importer.d.ts'
import type { CollationRuleParser$Sink } from '../../../../../com/ibm/icu/impl/coll/CollationRuleParser$Sink.d.ts'
import type { CollationSettings } from '../../../../../com/ibm/icu/impl/coll/CollationSettings.d.ts'
import type { Normalizer2 } from '../../../../../com/ibm/icu/text/Normalizer2.d.ts'
import type { Exception } from '../../../../../java/lang/Exception.d.ts'
import type { StringBuilder } from '../../../../../java/lang/StringBuilder.d.ts'
import type { ParseException } from '../../../../../java/text/ParseException.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { CharSequence } from '../../../../../java/lang/CharSequence.d.ts'
export class CollationRuleParser extends Object {
    static getReorderCode(paramarg0: string): number;
    constructor(arg0: CollationData)
    // private baseData: CollationData;
    // private importer: CollationRuleParser$Importer;
    // private nfc: Normalizer2;
    // private nfd: Normalizer2;
    // private rawBuilder: StringBuilder;
    // private ruleIndex: number;
    // private rules: string;
    // private settings: CollationSettings;
    // private sink: CollationRuleParser$Sink;
    // private appendErrorContext(arg0: string): string;
    // private makeParseException(arg0: string): ParseException;
    // private parse(arg0: string): void;
    parse(arg0: string, arg1: CollationSettings): void;
    // private parseRelationOperator(): number;
    // private parseRelationStrings(arg0: number, arg1: number): void;
    // private parseReordering(arg0: CharSequence): void;
    // private parseResetAndPosition(): number;
    // private parseRuleChain(): void;
    // private parseSetting(): void;
    // private parseSpecialPosition(arg0: number, arg1: StringBuilder): number;
    // private parseStarredCharacters(arg0: number, arg1: number): void;
    // private parseString(arg0: number, arg1: StringBuilder): number;
    // private parseTailoringString(arg0: number, arg1: StringBuilder): number;
    // private parseUnicodeSet(arg0: number, arg1: string[]): number;
    // private readWords(arg0: number, arg1: StringBuilder): number;
    setImporter(arg0: CollationRuleParser$Importer): void;
    // private setParseError(arg0: string): void;
    // private setParseError(arg0: string, arg1: Exception): void;
    setSink(arg0: CollationRuleParser$Sink): void;
    // private skipComment(arg0: number): number;
    // private skipWhiteSpace(arg0: number): number;
}
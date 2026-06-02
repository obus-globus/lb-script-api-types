import type { Exception } from '../../../../../../../../java/lang/Exception.d.ts'
import type { StringBuilder } from '../../../../../../../../java/lang/StringBuilder.d.ts'
import type { ParseException } from '../../../../../../../../java/text/ParseException.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { CharSequence } from '../../../../../../../../java/lang/CharSequence.d.ts'
import type { CollationData } from '../../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/coll/CollationData.d.ts'
import type { CollationRuleParser$Importer } from '../../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/coll/CollationRuleParser$Importer.d.ts'
import type { CollationRuleParser$Sink } from '../../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/coll/CollationRuleParser$Sink.d.ts'
import type { CollationSettings } from '../../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/coll/CollationSettings.d.ts'
import type { Normalizer2 } from '../../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/Normalizer2.d.ts'
export class CollationRuleParser extends Object {
    static getReorderCode(paramword: string): number;
    constructor(base: CollationData)
    // private baseData: CollationData;
    // private importer: CollationRuleParser$Importer;
    // private nfc: Normalizer2;
    // private nfd: Normalizer2;
    // private rawBuilder: StringBuilder;
    // private ruleIndex: number;
    // private rules: string;
    // private settings: CollationSettings;
    // private sink: CollationRuleParser$Sink;
    // private appendErrorContext(reason: string): string;
    // private makeParseException(reason: string): ParseException;
    // private parse(ruleString: string): void;
    parse(ruleString: string, outSettings: CollationSettings): void;
    // private parseRelationOperator(): number;
    // private parseRelationStrings(strength: number, i: number): void;
    // private parseReordering(raw: CharSequence): void;
    // private parseResetAndPosition(): number;
    // private parseRuleChain(): void;
    // private parseSetting(): void;
    // private parseSpecialPosition(i: number, str: StringBuilder): number;
    // private parseStarredCharacters(strength: number, i: number): void;
    // private parseString(i: number, raw: StringBuilder): number;
    // private parseTailoringString(i: number, raw: StringBuilder): number;
    // private parseUnicodeSet(i: number, set: string[]): number;
    // private readWords(i: number, raw: StringBuilder): number;
    setImporter(importerAlias: CollationRuleParser$Importer): void;
    // private setParseError(reason: string): void;
    // private setParseError(reason: string, e: Exception): void;
    setSink(sinkAlias: CollationRuleParser$Sink): void;
    // private skipComment(i: number): number;
    // private skipWhiteSpace(i: number): number;
}
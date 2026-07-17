import type { JavaMap } from '../../../../../../../JavaMap.d.ts'
import type { StringBuilder } from '../../../../../../../java/lang/StringBuilder.d.ts'
import type { ParsePosition } from '../../../../../../../java/text/ParsePosition.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Normalizer$Mode } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/Normalizer$Mode.d.ts'
import type { RuleBasedTransliterator$Data } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/RuleBasedTransliterator$Data.d.ts'
import type { StringMatcher } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/StringMatcher.d.ts'
import type { TransliteratorParser$ParseData } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/TransliteratorParser$ParseData.d.ts'
import type { TransliteratorParser$RuleBody } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/TransliteratorParser$RuleBody.d.ts'
export class TransliteratorParser extends Object {
    constructor()
    compoundFilter: string[];
    // private curData: RuleBasedTransliterator$Data;
    dataVector: RuleBasedTransliterator$Data[];
    // private direction: number;
    // private dotStandIn: number;
    idBlockVector: string[];
    // private parseData: TransliteratorParser$ParseData;
    // private segmentObjects: StringMatcher[];
    // private segmentStandins: StringBuilder;
    // private undefinedVariableName: string;
    // private variableLimit: string;
    // private variableNames: JavaMap<string, string[]>;
    // private variableNext: string;
    // private variablesVector: Object[];
    // private appendVariableDef(name: string, buf: StringBuilder): void;
    // private checkVariableRange(ch: number, rule: string, start: number): void;
    generateStandInFor(obj: Object): string;
    getDotStandIn(): string;
    getSegmentStandin(seg: number): string;
    parse(rules: string, dir: number): void;
    // private parsePragma(rule: string, pos: number, limit: number): number;
    // private parseRule(rule: string, pos: number, limit: number): number;
    parseRules(ruleArray: TransliteratorParser$RuleBody, dir: number): void;
    // private parseSet(rule: string, pos: ParsePosition): string;
    // private pragmaMaximumBackup(backup: number): void;
    // private pragmaNormalizeRules(mode: Normalizer$Mode): void;
    setSegmentObject(seg: number, obj: StringMatcher): void;
    // private setVariableRange(start: number, end: number): void;
}
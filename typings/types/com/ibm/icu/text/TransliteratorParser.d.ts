import type { Normalizer$Mode } from '../../../../com/ibm/icu/text/Normalizer$Mode.d.ts'
import type { RuleBasedTransliterator$Data } from '../../../../com/ibm/icu/text/RuleBasedTransliterator$Data.d.ts'
import type { StringMatcher } from '../../../../com/ibm/icu/text/StringMatcher.d.ts'
import type { TransliteratorParser$ParseData } from '../../../../com/ibm/icu/text/TransliteratorParser$ParseData.d.ts'
import type { TransliteratorParser$RuleBody } from '../../../../com/ibm/icu/text/TransliteratorParser$RuleBody.d.ts'
import type { StringBuffer } from '../../../../java/lang/StringBuffer.d.ts'
import type { ParsePosition } from '../../../../java/text/ParsePosition.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
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
    // private segmentStandins: StringBuffer;
    // private undefinedVariableName: string;
    // private variableLimit: string;
    // private variableNames: { [key: string]: string[] };
    // private variableNext: string;
    // private variablesVector: Object[];
    // private appendVariableDef(arg0: string, arg1: StringBuffer): void;
    // private checkVariableRange(arg0: number, arg1: string, arg2: number): void;
    generateStandInFor(arg0: Object): string;
    getDotStandIn(): string;
    getSegmentStandin(arg0: number): string;
    parse(arg0: string, arg1: number): void;
    // private parsePragma(arg0: string, arg1: number, arg2: number): number;
    // private parseRule(arg0: string, arg1: number, arg2: number): number;
    parseRules(arg0: TransliteratorParser$RuleBody, arg1: number): void;
    // private parseSet(arg0: string, arg1: ParsePosition): string;
    // private pragmaMaximumBackup(arg0: number): void;
    // private pragmaNormalizeRules(arg0: Normalizer$Mode): void;
    setSegmentObject(arg0: number, arg1: StringMatcher): void;
    // private setVariableRange(arg0: number, arg1: number): void;
}
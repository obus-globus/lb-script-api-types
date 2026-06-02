import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { StringEncoder } from '../../../../../../org/apache/commons/codec/StringEncoder.d.ts'
import type { NameType } from '../../../../../../org/apache/commons/codec/language/bm/NameType.d.ts'
import type { PhoneticEngine } from '../../../../../../org/apache/commons/codec/language/bm/PhoneticEngine.d.ts'
import type { RuleType } from '../../../../../../org/apache/commons/codec/language/bm/RuleType.d.ts'
export class BeiderMorseEncoder extends Object implements StringEncoder {
    constructor()
    // private engine: PhoneticEngine;
    encode(arg0: Object): Object;
    encode(arg0: string): string;
    getNameType(): NameType;
    getRuleType(): RuleType;
    isConcat(): boolean;
    setConcat(arg0: boolean): void;
    setMaxPhonemes(arg0: number): void;
    setNameType(arg0: NameType): void;
    setRuleType(arg0: RuleType): void;
}
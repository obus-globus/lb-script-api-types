import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { CharSequence } from '../../../../../../java/lang/CharSequence.d.ts'
import type { PhoneticEngine$PhonemeBuilder } from '../../../../../../org/apache/commons/codec/language/bm/PhoneticEngine$PhonemeBuilder.d.ts'
import type { Rule } from '../../../../../../org/apache/commons/codec/language/bm/Rule.d.ts'
export class PhoneticEngine$RulesApplication extends Object {
    constructor(arg0: { [key: string]: Rule[] }, arg1: CharSequence, arg2: PhoneticEngine$PhonemeBuilder, arg3: number, arg4: number)
    // private finalRules: { [key: string]: Rule[] };
    readonly found: boolean;
    readonly i: number;
    // private input: CharSequence;
    // private maxPhonemes: number;
    readonly phonemeBuilder: PhoneticEngine$PhonemeBuilder;
    getI(): number;
    getPhonemeBuilder(): PhoneticEngine$PhonemeBuilder;
    invoke(): PhoneticEngine$RulesApplication;
    isFound(): boolean;
}
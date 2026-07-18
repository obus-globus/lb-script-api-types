import type { CaseInsensitiveString } from '../../../io/ktor/util/CaseInsensitiveString.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { Pair } from '../../../kotlin/Pair.d.ts'
export class TextKt extends Object {
    static caseInsensitive(self: string): CaseInsensitiveString;
    static chomp(self: string, separator: string, onMissingDelimiter: () => Pair<string, string>): Pair<string, string>;
    static escapeHTML(self: string): string;
    static toLowerCasePreservingASCIIRules(self: string): string;
    static toUpperCasePreservingASCIIRules(self: string): string;
}
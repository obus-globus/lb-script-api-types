import type { Object } from '../../java/lang/Object.d.ts'
import type { Regex } from '../../kotlin/text/Regex.d.ts'
export class Regex$Companion extends Object {
    // private ensureUnicodeCase(flags: number): number;
    escape(literal: string): string;
    escapeReplacement(literal: string): string;
    fromLiteral(literal: string): Regex;
}
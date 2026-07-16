import type { Object } from '../../../../java/lang/Object.d.ts'
import type { CharSequence } from '../../../../java/lang/CharSequence.d.ts'
export class Strings extends Object {
    static commonPrefix(parama: CharSequence, paramb: CharSequence): string;
    static commonSuffix(parama: CharSequence, paramb: CharSequence): string;
    static emptyToNull(paramstring: string): string;
    static isNullOrEmpty(paramstring: string): boolean;
    static lenientFormat(paramtemplate: string, ...paramargs: Object[]): string;
    static nullToEmpty(paramstring: string): string;
    static padEnd(paramstring: string, paramminLength: number, parampadChar: string): string;
    static padStart(paramstring: string, paramminLength: number, parampadChar: string): string;
    static repeat(paramstring: string, paramcount: number): string;
    private constructor()
}
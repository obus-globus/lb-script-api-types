import type { Appendable } from '../../java/lang/Appendable.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
import type { CharSequence } from '../../java/lang/CharSequence.d.ts'
import type { StringsKt__RegexExtensionsJVMKt } from '../../kotlin/text/StringsKt__RegexExtensionsJVMKt.d.ts'
export class StringsKt__RegexExtensionsKt extends StringsKt__RegexExtensionsJVMKt {
    static append<T extends Appendable>(self: T, ...value: (CharSequence | null)[]): T;
    static appendElement<T extends unknown>(self: Appendable, element: T, transform: ((param0: T) => CharSequence) | null): void;
    static appendRange<T extends Appendable>(self: T, value: CharSequence, startIndex: number, endIndex: number): T;
    static prependIndent(self: string, indent: string): string;
    static replaceIndent(self: string, newIndent: string): string;
    static replaceIndentByMargin(self: string, newIndent: string, marginPrefix: string): string;
    static trimIndent(self: string): string;
    static trimMargin(self: string, marginPrefix: string): string;
}
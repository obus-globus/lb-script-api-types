import type { Locale } from '../../java/util/Locale.d.ts'
import type { Diagnostic$Kind } from '../../javax/tools/Diagnostic$Kind.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
export interface Diagnostic<S extends unknown> extends Object{
    getCode(): string;
    getColumnNumber(): number;
    getEndPosition(): number;
    getKind(): Diagnostic$Kind;
    getLineNumber(): number;
    getMessage(arg0: Locale): string;
    getPosition(): number;
    getSource(): S;
    getStartPosition(): number;
}
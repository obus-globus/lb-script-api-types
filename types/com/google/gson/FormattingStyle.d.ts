import type { Object } from '../../../java/lang/Object.d.ts'
export class FormattingStyle extends Object {
    static COMPACT: FormattingStyle;
    static PRETTY: FormattingStyle;
    private constructor(arg0: string, arg1: string, arg2: boolean)
    readonly indent: string;
    readonly newline: string;
    // private spaceAfterSeparators: boolean;
    getIndent(): string;
    getNewline(): string;
    usesSpaceAfterSeparators(): boolean;
    withIndent(arg0: string): FormattingStyle;
    withNewline(arg0: string): FormattingStyle;
    withSpaceAfterSeparators(arg0: boolean): FormattingStyle;
}
import type { Record } from '../../../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export class ConsoleRenderer$ColorPalette extends Record {
    private constructor(text: number, background: number, foreground: number)
    // private background: number;
    // private foreground: number;
    // private text: number;
    background(): number;
    equals(arg0: Object | null): boolean;
    foreground(): number;
    hashCode(): number;
    text(): number;
    toString(): string;
}
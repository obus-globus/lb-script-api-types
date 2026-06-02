import type { Object } from '../../../../java/lang/Object.d.ts'
export interface Replaceable extends Object{
    char32At(arg0: number): number;
    charAt(arg0: number): string;
    copy(arg0: number, arg1: number, arg2: number): void;
    getChars(arg0: number, arg1: number, arg2: string[], arg3: number): void;
    hasMetaData(): boolean;
    length(): number;
    replace(arg0: number, arg1: number, arg2: string[], arg3: number, arg4: number): void;
    replace(arg0: number, arg1: number, arg2: string): void;
}
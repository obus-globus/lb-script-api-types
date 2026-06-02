import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export interface Replaceable extends Object{
    char32At(offset: number): number;
    charAt(offset: number): string;
    copy(start: number, limit: number, dest: number): void;
    getChars(srcStart: number, srcLimit: number, dst: string[], dstStart: number): void;
    hasMetaData(): boolean;
    length(): number;
    replace(start: number, limit: number, chars: string[], charsStart: number, charsLen: number): void;
    replace(start: number, limit: number, text: string): void;
}
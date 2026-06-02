import type { Object } from '../../../java/lang/Object.d.ts'
export interface ParserOptions$TokenRules extends Object{
    isAccessPart(arg0: string): boolean;
    isAccessStart(arg0: string): boolean;
    isIdPart(arg0: string): boolean;
    isIdStart(arg0: string): boolean;
    isNumberPart(arg0: string): boolean;
    isNumberStart(arg0: string): boolean;
}
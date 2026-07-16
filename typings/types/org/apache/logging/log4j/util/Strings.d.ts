import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { CharSequence } from '../../../../../java/lang/CharSequence.d.ts'
import type { Iterator } from '../../../../../java/util/Iterator.d.ts'
export class Strings extends Object {
    static EMPTY: string;
    static EMPTY_ARRAY: string[];
    static LINE_SEPARATOR: string;
    static concat(paramstr1: string, paramstr2: string): string;
    static dquote(paramstr: string): string;
    static isBlank(params: string): boolean;
    static isEmpty(paramcs: CharSequence): boolean;
    static isNotBlank(params: string): boolean;
    static isNotEmpty(paramcs: CharSequence): boolean;
    static join(paramiterable: Object[], paramseparator: string): string;
    static join(paramiterator: Iterator<Object>, paramseparator: string): string;
    static left(paramstr: string, paramlen: number): string;
    static quote(paramstr: string): string;
    static repeat(paramstr: string, paramcount: number): string;
    static splitList(paramstring: string): string[];
    static toRootLowerCase(paramstr: string): string;
    static toRootUpperCase(paramstr: string): string;
    static trimToNull(paramstr: string): string;
    private constructor()
}
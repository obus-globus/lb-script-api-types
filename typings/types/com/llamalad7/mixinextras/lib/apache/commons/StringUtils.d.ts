import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { CharSequence } from '../../../../../../java/lang/CharSequence.d.ts'
export class StringUtils extends Object {
    static isEmpty(paramarg0: CharSequence): boolean;
    static removeEnd(paramarg0: string, paramarg1: string): string;
    static removeStart(paramarg0: string, paramarg1: string): string;
    static repeat(paramarg0: string, paramarg1: number): string;
    static replace(paramarg0: string, paramarg1: string, paramarg2: string, paramarg3: number): string;
    static replaceOnce(paramarg0: string, paramarg1: string, paramarg2: string): string;
    static substringAfter(paramarg0: string, paramarg1: string): string;
    static substringAfterLast(paramarg0: string, paramarg1: string): string;
    static substringBefore(paramarg0: string, paramarg1: string): string;
    static substringBeforeLast(paramarg0: string, paramarg1: string): string;
}
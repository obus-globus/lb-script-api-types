import type { Object } from '../../../../java/lang/Object.d.ts'
export interface Vocabulary extends Object{
    getDisplayName(arg0: number): string;
    getLiteralName(arg0: number): string;
    getMaxTokenType(): number;
    getSymbolicName(arg0: number): string;
}
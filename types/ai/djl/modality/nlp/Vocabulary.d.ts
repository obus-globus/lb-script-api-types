import type { Object } from '../../../../java/lang/Object.d.ts'
export interface Vocabulary extends Object{
    contains(arg0: string): boolean;
    getIndex(arg0: string): number;
    getToken(arg0: number): string;
    size(): number;
}
import type { Object } from '../../../java/lang/Object.d.ts'
export interface SymbolProvider extends Object{
    getSymbolAddress(arg0: number, arg1: string, arg2: SymbolProvider): number;
}
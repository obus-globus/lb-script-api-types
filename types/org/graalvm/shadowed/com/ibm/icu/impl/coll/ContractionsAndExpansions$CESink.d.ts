import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
export interface ContractionsAndExpansions$CESink extends Object{
    handleCE(ce: number): void;
    handleExpansion(ces: number[], start: number, length: number): void;
}
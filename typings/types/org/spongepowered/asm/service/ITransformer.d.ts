import type { Object } from '../../../../java/lang/Object.d.ts'
export interface ITransformer extends Object{
    getName(): string;
    isDelegationExcluded(): boolean;
}
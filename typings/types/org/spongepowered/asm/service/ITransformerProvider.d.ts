import type { Object } from '../../../../java/lang/Object.d.ts'
export interface ITransformerProvider extends Object{
    addTransformerExclusion(arg0: string): void;
    getDelegatedTransformers(): E[];
    getTransformers(): E[];
}
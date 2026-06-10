import type { Object } from '../../../../java/lang/Object.d.ts'
import type { ITransformer } from '../../../../org/spongepowered/asm/service/ITransformer.d.ts'
export interface ITransformerProvider extends Object{
    addTransformerExclusion(arg0: string): void;
    getDelegatedTransformers(): ITransformer[];
    getTransformers(): ITransformer[];
}
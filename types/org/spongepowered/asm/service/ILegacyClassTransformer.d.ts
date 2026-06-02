import type { Object } from '../../../../java/lang/Object.d.ts'
import type { ITransformer } from '../../../../org/spongepowered/asm/service/ITransformer.d.ts'
export interface ILegacyClassTransformer extends Object, ITransformer{
    transformClassBytes(arg0: string, arg1: string, arg2: number[]): number[];
}
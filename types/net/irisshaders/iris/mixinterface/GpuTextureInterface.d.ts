import type { Object } from '../../../../java/lang/Object.d.ts'
export interface GpuTextureInterface extends Object{
    iris$getGlId(): number;
    iris$markMipmapNonLinear(): void;
}
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class SamplerLimits extends Object {
    static get(): SamplerLimits;
    private constructor()
    readonly maxDrawBuffers: number;
    readonly maxShaderStorageUnits: number;
    readonly maxTextureUnits: number;
    getMaxDrawBuffers(): number;
    getMaxShaderStorageUnits(): number;
    getMaxTextureUnits(): number;
}
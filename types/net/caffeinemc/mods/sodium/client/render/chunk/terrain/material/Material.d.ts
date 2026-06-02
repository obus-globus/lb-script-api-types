import type { Object } from '../../../../../../../../../java/lang/Object.d.ts'
import type { TerrainRenderPass } from '../../../../../../../../../net/caffeinemc/mods/sodium/client/render/chunk/terrain/TerrainRenderPass.d.ts'
import type { AlphaCutoffParameter } from '../../../../../../../../../net/caffeinemc/mods/sodium/client/render/chunk/terrain/material/parameters/AlphaCutoffParameter.d.ts'
export class Material extends Object {
    constructor(arg0: TerrainRenderPass, arg1: AlphaCutoffParameter, arg2: boolean)
    alphaCutoff: AlphaCutoffParameter;
    mipped: boolean;
    packed: number;
    pass: TerrainRenderPass;
    bits(): number;
    isTranslucent(): boolean;
}
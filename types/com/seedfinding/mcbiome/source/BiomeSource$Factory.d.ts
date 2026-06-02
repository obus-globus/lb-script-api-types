import type { BiomeSource } from '../../../../com/seedfinding/mcbiome/source/BiomeSource.d.ts'
import type { MCVersion } from '../../../../com/seedfinding/mccore/version/MCVersion.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export interface BiomeSource$Factory extends Object{
    create(arg0: MCVersion, arg1: number): BiomeSource;
}
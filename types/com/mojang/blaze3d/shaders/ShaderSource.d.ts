import type { ShaderType } from '../../../../com/mojang/blaze3d/shaders/ShaderType.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Identifier } from '../../../../net/minecraft/resources/Identifier.d.ts'
export interface ShaderSource extends Object{
    get(id: Identifier, type: ShaderType): string;
}
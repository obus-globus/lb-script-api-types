import type { ShaderSource } from '../../../../com/mojang/blaze3d/shaders/ShaderSource.d.ts'
import type { ShaderType } from '../../../../com/mojang/blaze3d/shaders/ShaderType.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Identifier } from '../../../../net/minecraft/resources/Identifier.d.ts'
export class ClientShaders$Companion extends Object implements ShaderSource {
    get(identifier: Identifier, shaderType: ShaderType): string | null;
}
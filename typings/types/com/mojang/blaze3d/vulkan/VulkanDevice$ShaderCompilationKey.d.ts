import type { ShaderType } from '../../../../com/mojang/blaze3d/shaders/ShaderType.d.ts'
import type { Record } from '../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { ShaderDefines } from '../../../../net/minecraft/client/renderer/ShaderDefines.d.ts'
import type { Identifier } from '../../../../net/minecraft/resources/Identifier.d.ts'
export class VulkanDevice$ShaderCompilationKey extends Record {
    private constructor(id: Identifier, type: ShaderType, defines: ShaderDefines)
    // private defines: ShaderDefines;
    // private id: Identifier;
    // private type: ShaderType;
    defines(): ShaderDefines;
    equals(o: Object | null): boolean;
    hashCode(): number;
    id(): Identifier;
    toString(): string;
    type(): ShaderType;
}
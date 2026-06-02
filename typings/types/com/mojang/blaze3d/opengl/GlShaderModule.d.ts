import type { ShaderType } from '../../../../com/mojang/blaze3d/shaders/ShaderType.d.ts'
import type { AutoCloseable } from '../../../../java/lang/AutoCloseable.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Identifier } from '../../../../net/minecraft/resources/Identifier.d.ts'
export class GlShaderModule extends Object implements AutoCloseable {
    static INVALID_SHADER: GlShaderModule;
    constructor(shaderId: number, id: Identifier, type: ShaderType)
    readonly id: Identifier;
    readonly shaderId: number;
    // private type: ShaderType;
    close(): void;
    getDebugLabel(): string;
    getId(): Identifier;
    getShaderId(): number;
}
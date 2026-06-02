import type { ShaderType } from '../../../../com/mojang/blaze3d/shaders/ShaderType.d.ts'
import type { Record } from '../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Identifier } from '../../../../net/minecraft/resources/Identifier.d.ts'
export class ShaderManager$ShaderSourceKey extends Record {
    private constructor(id: Identifier, type: ShaderType)
    // private id: Identifier;
    // private type: ShaderType;
    equals(o: Object | null): boolean;
    hashCode(): number;
    id(): Identifier;
    toString(): string;
    type(): ShaderType;
}
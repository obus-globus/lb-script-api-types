import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
import type { FileToIdConverter } from '../../../../net/minecraft/resources/FileToIdConverter.d.ts'
import type { Identifier } from '../../../../net/minecraft/resources/Identifier.d.ts'
export class ShaderType extends Enum<ShaderType> {
    static FRAGMENT: ShaderType;
    static VERTEX: ShaderType;
    static byLocation(paramlocation: Identifier): ShaderType;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramname: string): ShaderType;
    static values(): ShaderType[];
    private constructor(name: string, extension: string)
    // private extension: string;
    getName(): string;
    idConverter(): FileToIdConverter;
    name(): "VERTEX" | "FRAGMENT";
}
import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
import type { FileToIdConverter } from '../../../../net/minecraft/resources/FileToIdConverter.d.ts'
import type { Identifier } from '../../../../net/minecraft/resources/Identifier.d.ts'
export class ShaderType extends Enum<ShaderType> {
    static FRAGMENT: ShaderType;
    static VERTEX: ShaderType;
    static byLocation(paramlocation: Identifier): ShaderType;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramname: string): ShaderType;
    static values(): (Object | null)[];
    private constructor(name: string, extension: string)
    // private extension: string;
    readonly name: string;
    getName(): string;
    idConverter(): FileToIdConverter;
    name(): "VERTEX" | "FRAGMENT";
}
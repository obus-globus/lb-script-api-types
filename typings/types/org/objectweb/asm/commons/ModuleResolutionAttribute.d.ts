import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Attribute } from '../../../../org/objectweb/asm/Attribute.d.ts'
import type { ByteVector } from '../../../../org/objectweb/asm/ByteVector.d.ts'
import type { ClassReader } from '../../../../org/objectweb/asm/ClassReader.d.ts'
import type { ClassWriter } from '../../../../org/objectweb/asm/ClassWriter.d.ts'
import type { Label } from '../../../../org/objectweb/asm/Label.d.ts'
export class ModuleResolutionAttribute extends Attribute {
    static RESOLUTION_DO_NOT_RESOLVE_BY_DEFAULT: number;
    static RESOLUTION_WARN_DEPRECATED: number;
    static RESOLUTION_WARN_DEPRECATED_FOR_REMOVAL: number;
    static RESOLUTION_WARN_INCUBATING: number;
    static read(paramarg0: Attribute, paramarg1: ClassReader, paramarg2: number, paramarg3: number, paramarg4: string[], paramarg5: number, paramarg6: (Object | null)[]): Attribute;
    static readLabel(paramarg0: ClassReader, paramarg1: number, paramarg2: (Object | null)[]): Label;
    static write(paramarg0: Attribute, paramarg1: ClassWriter, paramarg2: number[], paramarg3: number, paramarg4: number, paramarg5: number): number[];
    constructor()
    constructor(arg0: number)
    resolution: number;
    read(arg0: ClassReader, arg1: number, arg2: number, arg3: string[], arg4: number, arg5: Label[]): Attribute;
    write(arg0: ClassWriter, arg1: number[], arg2: number, arg3: number, arg4: number): ByteVector;
}
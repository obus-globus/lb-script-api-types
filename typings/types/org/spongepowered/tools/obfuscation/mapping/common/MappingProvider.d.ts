import type { File } from '../../../../../../java/io/File.d.ts'
import type { Filer } from '../../../../../../javax/annotation/processing/Filer.d.ts'
import type { Messager } from '../../../../../../javax/annotation/processing/Messager.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { MappingField } from '../../../../../../org/spongepowered/asm/obfuscation/mapping/common/MappingField.d.ts'
import type { MappingMethod } from '../../../../../../org/spongepowered/asm/obfuscation/mapping/common/MappingMethod.d.ts'
import type { IMappingProvider } from '../../../../../../org/spongepowered/tools/obfuscation/mapping/IMappingProvider.d.ts'
export abstract class MappingProvider extends Object implements IMappingProvider {
    constructor(arg0: Messager, arg1: Filer)
    // private classMap: { [key: string]: string };
    // private fieldMap: Map<MappingField, MappingField>;
    // private filer: Filer;
    // private messager: Messager;
    // private methodMap: Map<MappingMethod, MappingMethod>;
    // private packageMap: { [key: string]: string };
    clear(): void;
    getClassMapping(arg0: string): string;
    getFieldMapping(arg0: MappingField): MappingField;
    getMethodMapping(arg0: MappingMethod): MappingMethod;
    getPackageMapping(arg0: string): string;
    isEmpty(): boolean;
    read(arg0: File): void;
}
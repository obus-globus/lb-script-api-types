import type { MappingMethod } from '../../../../../../org/spongepowered/asm/obfuscation/mapping/common/MappingMethod.d.ts'
import type { IMappingProvider } from '../../../../../../org/spongepowered/tools/obfuscation/mapping/IMappingProvider.d.ts'
export class MappingMethodLazy extends MappingMethod {
    constructor(arg0: string, arg1: string, arg2: string, arg3: IMappingProvider)
    // private mappingProvider: IMappingProvider;
    // private newDesc: string;
    // private originalDesc: string;
    // private generateDescriptor(): string;
    getDesc(): string;
    toString(): string;
}
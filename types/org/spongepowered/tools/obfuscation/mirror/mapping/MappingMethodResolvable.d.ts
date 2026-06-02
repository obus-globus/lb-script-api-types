import type { MappingMethod } from '../../../../../../org/spongepowered/asm/obfuscation/mapping/common/MappingMethod.d.ts'
import type { TypeHandle } from '../../../../../../org/spongepowered/tools/obfuscation/mirror/TypeHandle.d.ts'
export class MappingMethodResolvable extends MappingMethod {
    constructor(arg0: TypeHandle, arg1: string, arg2: string)
    // private ownerHandle: TypeHandle;
    copy(): MappingMethod;
    getSuper(): MappingMethod;
    move(arg0: TypeHandle): MappingMethod;
    remap(arg0: string): MappingMethod;
    transform(arg0: string): MappingMethod;
}
import type { RuntimeException } from '../../../../java/lang/RuntimeException.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { IMapping } from '../../../../org/spongepowered/asm/obfuscation/mapping/IMapping.d.ts'
export class Mappings$MappingConflictException extends RuntimeException {
    constructor(arg0: IMapping<Object>, arg1: IMapping<Object>)
    // private newMapping: IMapping<Object>;
    // private oldMapping: IMapping<Object>;
    getNew(): IMapping<Object>;
    getOld(): IMapping<Object>;
}
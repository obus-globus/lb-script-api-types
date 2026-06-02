import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { IMapping } from '../../../../../org/spongepowered/asm/obfuscation/mapping/IMapping.d.ts'
export class IMappingConsumer$MappingSet$Pair<TMapping extends IMapping<TMapping>> extends Object {
    constructor(arg0: TMapping, arg1: TMapping)
    from: TMapping;
    to: TMapping;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    toString(): string;
}
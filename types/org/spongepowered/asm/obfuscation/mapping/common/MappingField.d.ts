import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { IMapping } from '../../../../../../org/spongepowered/asm/obfuscation/mapping/IMapping.d.ts'
import type { IMapping$Type } from '../../../../../../org/spongepowered/asm/obfuscation/mapping/IMapping$Type.d.ts'
export class MappingField extends Object implements IMapping<MappingField> {
    constructor(arg0: string, arg1: string)
    constructor(arg0: string, arg1: string, arg2: string)
    readonly desc: string;
    readonly name: string;
    readonly owner: string;
    copy(): MappingField;
    equals(arg0: Object | null): boolean;
    getDesc(): string;
    getName(): string;
    getOwner(): string;
    getSimpleName(): string;
    getSuper(): MappingField;
    getType(): IMapping$Type;
    hashCode(): number;
    move(arg0: string): MappingField;
    remap(arg0: string): MappingField;
    serialise(): string;
    toString(): string;
    transform(arg0: string): MappingField;
}
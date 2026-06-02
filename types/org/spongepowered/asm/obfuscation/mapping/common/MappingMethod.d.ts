import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { IMapping } from '../../../../../../org/spongepowered/asm/obfuscation/mapping/IMapping.d.ts'
import type { IMapping$Type } from '../../../../../../org/spongepowered/asm/obfuscation/mapping/IMapping$Type.d.ts'
export class MappingMethod extends Object implements IMapping<MappingMethod> {
    constructor(arg0: string, arg1: string)
    constructor(arg0: string, arg1: string, arg2: string)
    readonly desc: string;
    readonly name: string;
    readonly owner: string;
    addPrefix(arg0: string): MappingMethod;
    copy(): MappingMethod;
    equals(arg0: Object | null): boolean;
    getDesc(): string;
    getName(): string;
    getOwner(): string;
    getSimpleName(): string;
    getSuper(): MappingMethod;
    getType(): IMapping$Type;
    hashCode(): number;
    isConstructor(): boolean;
    move(arg0: string): MappingMethod;
    remap(arg0: string): MappingMethod;
    serialise(): string;
    toString(): string;
    transform(arg0: string): MappingMethod;
}
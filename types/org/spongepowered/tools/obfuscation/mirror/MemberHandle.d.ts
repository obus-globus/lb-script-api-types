import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { IMapping } from '../../../../../org/spongepowered/asm/obfuscation/mapping/IMapping.d.ts'
import type { Bytecode$Visibility } from '../../../../../org/spongepowered/asm/util/Bytecode$Visibility.d.ts'
export abstract class MemberHandle<T extends IMapping<T>> extends Object {
    constructor(arg0: string, arg1: string, arg2: string)
    readonly desc: string;
    readonly name: string;
    readonly owner: string;
    asMapping(arg0: boolean): T;
    getDesc(): string;
    getName(): string;
    getOwner(): string;
    getVisibility(): Bytecode$Visibility;
}
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { IMapping$Type } from '../../../../../org/spongepowered/asm/obfuscation/mapping/IMapping$Type.d.ts'
export interface IMapping<TMapping extends unknown> extends Object{
    copy(): TMapping;
    getDesc(): string;
    getName(): string;
    getOwner(): string;
    getSimpleName(): string;
    getSuper(): TMapping;
    getType(): IMapping$Type;
    move(arg0: string): TMapping;
    remap(arg0: string): TMapping;
    serialise(): string;
    transform(arg0: string): TMapping;
}
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { IPropertyKey } from '../../../../../../org/spongepowered/asm/service/IPropertyKey.d.ts'
export class MixinStringPropertyKey extends Object implements IPropertyKey {
    constructor(arg0: string)
    key: string;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    toString(): string;
}
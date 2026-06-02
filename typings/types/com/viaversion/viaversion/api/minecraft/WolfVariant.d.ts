import type { HolderSet } from '../../../../../com/viaversion/viaversion/api/minecraft/HolderSet.d.ts'
import type { HolderType } from '../../../../../com/viaversion/viaversion/api/type/types/misc/HolderType.d.ts'
import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class WolfVariant extends Record {
    static TYPE: HolderType<WolfVariant>;
    constructor(wildTexture: string, tameTexture: string, angryTexture: string, biomes: HolderSet)
    // private angryTexture: string;
    // private biomes: HolderSet;
    // private tameTexture: string;
    // private wildTexture: string;
    angryTexture(): string;
    biomes(): HolderSet;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    tameTexture(): string;
    toString(): string;
    wildTexture(): string;
}
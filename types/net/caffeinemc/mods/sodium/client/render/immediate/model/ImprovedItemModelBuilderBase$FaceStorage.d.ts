import type { Record } from '../../../../../../../../java/lang/Record.d.ts'
import type { BitSet } from '../../../../../../../../java/util/BitSet.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { ImprovedItemModelBuilderBase$SideFace } from '../../../../../../../../net/caffeinemc/mods/sodium/client/render/immediate/model/ImprovedItemModelBuilderBase$SideFace.d.ts'
import type { SpriteContents } from '../../../../../../../../net/minecraft/client/renderer/texture/SpriteContents.d.ts'
export class ImprovedItemModelBuilderBase$FaceStorage extends Record {
    constructor()
    constructor(up: Int2ObjectMap<BitSet>, down: Int2ObjectMap<BitSet>, left: Int2ObjectMap<BitSet>, right: Int2ObjectMap<BitSet>)
    // private down: Int2ObjectMap<BitSet>;
    // private left: Int2ObjectMap<BitSet>;
    // private right: Int2ObjectMap<BitSet>;
    // private up: Int2ObjectMap<BitSet>;
    buildSideFaces(): ImprovedItemModelBuilderBase$SideFace[];
    down(): Int2ObjectMap<BitSet>;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    left(): Int2ObjectMap<BitSet>;
    right(): Int2ObjectMap<BitSet>;
    toString(): string;
    tryInsertPixel(arg0: SpriteContents, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): void;
    up(): Int2ObjectMap<BitSet>;
}
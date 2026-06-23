import type { Record } from '../../../../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { ImprovedItemModelBuilderBase$SideFace } from '../../../../../../../../net/caffeinemc/mods/sodium/client/render/immediate/model/ImprovedItemModelBuilderBase$SideFace.d.ts'
import type { SpriteContents } from '../../../../../../../../net/minecraft/client/renderer/texture/SpriteContents.d.ts'
export class ImprovedItemModelBuilderBase$FaceStorage extends Record {
    constructor()
    constructor(up: { [key: string]: any }, down: { [key: string]: any }, left: { [key: string]: any }, right: { [key: string]: any })
    // private down: { [key: string]: any };
    // private left: { [key: string]: any };
    // private right: { [key: string]: any };
    // private up: { [key: string]: any };
    buildSideFaces(): ImprovedItemModelBuilderBase$SideFace[];
    down(): { [key: string]: any };
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    left(): { [key: string]: any };
    right(): { [key: string]: any };
    toString(): string;
    tryInsertPixel(arg0: SpriteContents, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): void;
    up(): { [key: string]: any };
}
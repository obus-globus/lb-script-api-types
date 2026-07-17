import type { JavaMap } from '../../../../../../../../JavaMap.d.ts'
import type { Record } from '../../../../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { ImprovedItemModelBuilderBase$SideFace } from '../../../../../../../../net/caffeinemc/mods/sodium/client/render/immediate/model/ImprovedItemModelBuilderBase$SideFace.d.ts'
import type { SpriteContents } from '../../../../../../../../net/minecraft/client/renderer/texture/SpriteContents.d.ts'
export class ImprovedItemModelBuilderBase$FaceStorage extends Record {
    constructor()
    constructor(up: JavaMap<any, any>, down: JavaMap<any, any>, left: JavaMap<any, any>, right: JavaMap<any, any>)
    // private down: JavaMap<any, any>;
    // private left: JavaMap<any, any>;
    // private right: JavaMap<any, any>;
    // private up: JavaMap<any, any>;
    buildSideFaces(): ImprovedItemModelBuilderBase$SideFace[];
    down(): JavaMap<any, any>;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    left(): JavaMap<any, any>;
    right(): JavaMap<any, any>;
    toString(): string;
    tryInsertPixel(arg0: SpriteContents, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): void;
    up(): JavaMap<any, any>;
}
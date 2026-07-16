import type { Class } from '../../../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../../../java/lang/Enum.d.ts'
import type { Identifier } from '../../../../../../../../net/minecraft/resources/Identifier.d.ts'
export class QuadAtlas extends Enum<QuadAtlas> {
    static BLOCK: QuadAtlas;
    static ITEM: QuadAtlas;
    static ofId(paramarg0: Identifier): QuadAtlas;
    static ofLocation(paramarg0: Identifier): QuadAtlas;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): QuadAtlas;
    static values(): QuadAtlas[];
    private constructor(arg2: Identifier, arg3: Identifier)
    readonly id: Identifier;
    readonly textureLocation: Identifier;
    getId(): Identifier;
    getTextureLocation(): Identifier;
    name(): "BLOCK" | "ITEM";
}
import type { Class } from '../../../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../../../java/lang/Enum.d.ts'
import type { Identifier } from '../../../../../../../net/minecraft/resources/Identifier.d.ts'
export class SodiumQuadAtlas extends Enum<SodiumQuadAtlas> {
    static BLOCK: SodiumQuadAtlas;
    static ITEM: SodiumQuadAtlas;
    static of(paramarg0: Identifier): SodiumQuadAtlas;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): SodiumQuadAtlas;
    static values(): SodiumQuadAtlas[];
    private constructor()
    name(): "BLOCK" | "ITEM";
}
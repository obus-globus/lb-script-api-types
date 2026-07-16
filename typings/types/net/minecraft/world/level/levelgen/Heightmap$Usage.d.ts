import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
export class Heightmap$Usage extends Enum<Heightmap$Usage> {
    static CLIENT: Heightmap$Usage;
    static LIVE_WORLD: Heightmap$Usage;
    static WORLDGEN: Heightmap$Usage;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramname: string): Heightmap$Usage;
    static values(): Heightmap$Usage[];
    private constructor()
    name(): "WORLDGEN" | "LIVE_WORLD" | "CLIENT";
}
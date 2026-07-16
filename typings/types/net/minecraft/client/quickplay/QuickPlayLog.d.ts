import type { Path } from '../../../../java/nio/file/Path.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Minecraft } from '../../../../net/minecraft/client/Minecraft.d.ts'
import type { QuickPlayLog$QuickPlayWorld } from '../../../../net/minecraft/client/quickplay/QuickPlayLog$QuickPlayWorld.d.ts'
import type { QuickPlayLog$Type } from '../../../../net/minecraft/client/quickplay/QuickPlayLog$Type.d.ts'
export class QuickPlayLog extends Object {
    static of(parampath: string): QuickPlayLog;
    private constructor(quickPlayPath: string)
    // private path: Path;
    // private worldData: QuickPlayLog$QuickPlayWorld;
    log(minecraft: Minecraft): void;
    setWorldData(type: QuickPlayLog$Type, id: string, name: string): void;
}
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { GraphicsAdapterInfo } from '../../../../../../../../net/caffeinemc/mods/sodium/client/compatibility/environment/probe/GraphicsAdapterInfo.d.ts'
export class GraphicsAdapterProbe extends Object {
    static findAdapters(): void;
    static getAdapters(): GraphicsAdapterInfo[];
    constructor()
}
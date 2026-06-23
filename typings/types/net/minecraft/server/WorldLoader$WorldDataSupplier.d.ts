import type { Object } from '../../../java/lang/Object.d.ts'
import type { WorldLoader$DataLoadContext } from '../../../net/minecraft/server/WorldLoader$DataLoadContext.d.ts'
import type { WorldLoader$DataLoadOutput } from '../../../net/minecraft/server/WorldLoader$DataLoadOutput.d.ts'
export interface WorldLoader$WorldDataSupplier<D extends unknown> extends Object{
    get(context: WorldLoader$DataLoadContext): WorldLoader$DataLoadOutput<D>;
}
import type { ClientWorld } from '../../../../../../com/viaversion/viaversion/api/minecraft/ClientWorld.d.ts'
export class ClientWorld1_9 extends ClientWorld {
    constructor()
    readonly loadedChunks: number[];
    getLoadedChunks(): number[];
}
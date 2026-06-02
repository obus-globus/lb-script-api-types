import type { File } from '../../../../java/io/File.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Minecraft } from '../../../../net/minecraft/client/Minecraft.d.ts'
export class ClientShutdownWatchdog extends Object {
    static startShutdownWatchdog(paramminecraft: Minecraft, paramgameDirectory: File, parammainThreadId: number): void;
    constructor()
}
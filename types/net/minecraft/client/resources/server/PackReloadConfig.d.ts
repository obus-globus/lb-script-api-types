import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { PackReloadConfig$Callbacks } from '../../../../../net/minecraft/client/resources/server/PackReloadConfig$Callbacks.d.ts'
export interface PackReloadConfig extends Object{
    scheduleReload(callbacks: PackReloadConfig$Callbacks): void;
}
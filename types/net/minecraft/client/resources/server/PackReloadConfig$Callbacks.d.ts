import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { PackReloadConfig$IdAndPath } from '../../../../../net/minecraft/client/resources/server/PackReloadConfig$IdAndPath.d.ts'
export interface PackReloadConfig$Callbacks extends Object{
    onFailure(isRecovery: boolean): void;
    onSuccess(): void;
    packsToLoad(): PackReloadConfig$IdAndPath[];
}
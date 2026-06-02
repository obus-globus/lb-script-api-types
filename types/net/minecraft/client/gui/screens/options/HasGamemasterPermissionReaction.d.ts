import type { Object } from '../../../../../../java/lang/Object.d.ts'
export interface HasGamemasterPermissionReaction extends Object{
    onGamemasterPermissionChanged(hasGamemasterPermission: boolean): void;
}
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { AbstractContainerScreen } from '../../../../../net/minecraft/client/gui/screens/inventory/AbstractContainerScreen.d.ts'
import type { AbstractContainerMenu } from '../../../../../net/minecraft/world/inventory/AbstractContainerMenu.d.ts'
export class InventoryExtensionsKt extends Object {
    static getCanCloseMainInventory(): boolean;
    static getSyncId(paramarg0: AbstractContainerScreen<any>): number;
    static isInContainerScreen(): boolean;
    static isInInventoryScreen(): boolean;
    static isPlayerInventory(paramarg0: AbstractContainerMenu): boolean;
}
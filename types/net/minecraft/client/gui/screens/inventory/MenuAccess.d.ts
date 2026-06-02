import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { AbstractContainerMenu } from '../../../../../../net/minecraft/world/inventory/AbstractContainerMenu.d.ts'
export interface MenuAccess<T extends AbstractContainerMenu> extends Object{
    getMenu(): T;
}
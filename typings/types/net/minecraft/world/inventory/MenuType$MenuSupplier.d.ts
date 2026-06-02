import type { Object } from '../../../../java/lang/Object.d.ts'
import type { AbstractContainerMenu } from '../../../../net/minecraft/world/inventory/AbstractContainerMenu.d.ts'
export interface MenuType$MenuSupplier<T extends AbstractContainerMenu> extends Object{
    create(containerId: number, inventory: (Object | null)[]): T;
}
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { AbstractContainerMenu } from '../../../../../../net/minecraft/world/inventory/AbstractContainerMenu.d.ts'
export interface ExtendedMenuType$ExtendedFactory<T extends AbstractContainerMenu, D extends unknown> extends Object{
    create(arg0: number, arg1: (Object | null)[], arg2: D): T;
}
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { FabricMenuProvider } from '../../../../../net/fabricmc/fabric/api/menu/v1/FabricMenuProvider.d.ts'
export interface MenuProviderMixin extends Object, FabricMenuProvider{
    shouldCloseCurrentScreen(): boolean;
}
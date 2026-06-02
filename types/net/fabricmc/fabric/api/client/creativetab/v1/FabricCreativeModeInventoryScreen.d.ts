import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { CreativeModeTab } from '../../../../../../../net/minecraft/world/item/CreativeModeTab.d.ts'
export interface FabricCreativeModeInventoryScreen extends Object{
    getCurrentPage(): number;
    getPage(arg0: CreativeModeTab): number;
    getPageCount(): number;
    getSelectedTab(): CreativeModeTab;
    getTabsOnPage(arg0: number): CreativeModeTab[];
    hasAdditionalPages(): boolean;
    setSelectedTab(arg0: CreativeModeTab): boolean;
    switchToNextPage(): boolean;
    switchToPage(arg0: number): boolean;
    switchToPreviousPage(): boolean;
}
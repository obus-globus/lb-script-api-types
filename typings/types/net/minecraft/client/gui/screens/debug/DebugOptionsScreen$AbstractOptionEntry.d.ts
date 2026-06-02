import type { ContainerObjectSelectionList$Entry } from '../../../../../../net/minecraft/client/gui/components/ContainerObjectSelectionList$Entry.d.ts'
export abstract class DebugOptionsScreen$AbstractOptionEntry extends ContainerObjectSelectionList$Entry<DebugOptionsScreen$AbstractOptionEntry> {
    static CONTENT_PADDING: number;
    constructor()
    refreshEntry(): void;
}
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { TabOrderedElement } from '../../../../../net/minecraft/client/gui/components/TabOrderedElement.d.ts'
import type { NarratableEntry$NarrationPriority } from '../../../../../net/minecraft/client/gui/narration/NarratableEntry$NarrationPriority.d.ts'
import type { NarrationSupplier } from '../../../../../net/minecraft/client/gui/narration/NarrationSupplier.d.ts'
export interface NarratableEntry extends Object, TabOrderedElement, NarrationSupplier{
    getNarratables(): NarratableEntry[];
    getTabOrderGroup(): number;
    isActive(): boolean;
    narrationPriority(): NarratableEntry$NarrationPriority;
}
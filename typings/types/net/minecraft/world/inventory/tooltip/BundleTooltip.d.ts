import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { TooltipComponent } from '../../../../../net/minecraft/world/inventory/tooltip/TooltipComponent.d.ts'
import type { BundleContents } from '../../../../../net/minecraft/world/item/component/BundleContents.d.ts'
export class BundleTooltip extends Record implements TooltipComponent {
    constructor(contents: BundleContents)
    // private contents: BundleContents;
    contents(): BundleContents;
    equals(o: Object | null): boolean;
    hashCode(): number;
    toString(): string;
}
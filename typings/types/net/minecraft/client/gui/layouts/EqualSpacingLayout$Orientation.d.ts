import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
import type { EqualSpacingLayout$ChildContainer } from '../../../../../net/minecraft/client/gui/layouts/EqualSpacingLayout$ChildContainer.d.ts'
import type { LayoutElement } from '../../../../../net/minecraft/client/gui/layouts/LayoutElement.d.ts'
export class EqualSpacingLayout$Orientation extends Enum<EqualSpacingLayout$Orientation> {
    static HORIZONTAL: EqualSpacingLayout$Orientation;
    static VERTICAL: EqualSpacingLayout$Orientation;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramname: string): EqualSpacingLayout$Orientation;
    static values(): EqualSpacingLayout$Orientation[];
    private constructor()
    // private getPrimaryLength(childContainer: EqualSpacingLayout$ChildContainer): number;
    // private getPrimaryLength(widget: LayoutElement): number;
    // private getPrimaryPosition(widget: LayoutElement): number;
    // private getSecondaryLength(childContainer: EqualSpacingLayout$ChildContainer): number;
    // private getSecondaryLength(widget: LayoutElement): number;
    // private getSecondaryPosition(widget: LayoutElement): number;
    // private setPrimaryPosition(childContainer: EqualSpacingLayout$ChildContainer, position: number): void;
    // private setSecondaryPosition(childContainer: EqualSpacingLayout$ChildContainer, position: number, availableSpace: number): void;
    name(): "HORIZONTAL" | "VERTICAL";
}
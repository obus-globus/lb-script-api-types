import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
import type { GridLayout } from '../../../../../net/minecraft/client/gui/layouts/GridLayout.d.ts'
import type { LayoutElement } from '../../../../../net/minecraft/client/gui/layouts/LayoutElement.d.ts'
import type { LayoutSettings } from '../../../../../net/minecraft/client/gui/layouts/LayoutSettings.d.ts'
export class LinearLayout$Orientation extends Enum<LinearLayout$Orientation> {
    static HORIZONTAL: LinearLayout$Orientation;
    static VERTICAL: LinearLayout$Orientation;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramname: string): LinearLayout$Orientation;
    static values(): (Object | null)[];
    private constructor()
    addChild<T extends LayoutElement>(gridLayout: GridLayout, child: T, index: number, cellSettings: LayoutSettings): T;
    // private setSpacing(gridLayout: GridLayout, spacing: number): void;
    name(): "HORIZONTAL" | "VERTICAL";
}
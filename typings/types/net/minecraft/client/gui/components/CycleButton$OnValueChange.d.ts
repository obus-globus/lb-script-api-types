import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { CycleButton } from '../../../../../net/minecraft/client/gui/components/CycleButton.d.ts'
export interface CycleButton$OnValueChange<T extends Object | number | string | boolean> extends Object{
    onValueChange(button: CycleButton<T>, value: T): void;
}
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { CycleButton } from '../../../../../net/minecraft/client/gui/components/CycleButton.d.ts'
import type { Identifier } from '../../../../../net/minecraft/resources/Identifier.d.ts'
export interface CycleButton$SpriteSupplier<T extends Object | number | string | boolean> extends Object{
    apply(button: CycleButton<T>, value: T): Identifier;
}
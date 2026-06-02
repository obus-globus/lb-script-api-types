import type { EventListener } from '../../java/util/EventListener.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
export interface DisplayChangedListener extends EventListener, Object{
    displayChanged(): void;
    paletteChanged(): void;
}
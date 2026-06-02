import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Renderable } from '../../../../../net/minecraft/client/gui/components/Renderable.d.ts'
export abstract class Overlay extends Object implements Renderable {
    constructor()
    isPauseScreen(): boolean;
    tick(): void;
}
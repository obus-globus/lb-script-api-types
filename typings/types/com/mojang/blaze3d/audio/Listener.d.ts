import type { ListenerTransform } from '../../../../com/mojang/blaze3d/audio/ListenerTransform.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class Listener extends Object {
    constructor()
    readonly transform: ListenerTransform;
    getTransform(): ListenerTransform;
    reset(): void;
    setTransform(transform: ListenerTransform): void;
}
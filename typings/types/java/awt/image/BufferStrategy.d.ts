import type { BufferCapabilities } from '../../../java/awt/BufferCapabilities.d.ts'
import type { Graphics } from '../../../java/awt/Graphics.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export abstract class BufferStrategy extends Object {
    constructor()
    contentsLost(): boolean;
    contentsRestored(): boolean;
    dispose(): void;
    getCapabilities(): BufferCapabilities;
    getDrawGraphics(): Graphics;
    show(): void;
}
import type { Runnable } from '../../../../java/lang/Runnable.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class FrameUpdateNotifier extends Object {
    constructor()
    // private listeners: () => void[];
    addListener(arg0: () => void): void;
    onNewFrame(): void;
}
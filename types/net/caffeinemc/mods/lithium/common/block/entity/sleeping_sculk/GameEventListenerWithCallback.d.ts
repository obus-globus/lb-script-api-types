import type { Runnable } from '../../../../../../../../java/lang/Runnable.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
export interface GameEventListenerWithCallback extends Object{
    lithium$setGameEventCallback(arg0: () => void): void;
}
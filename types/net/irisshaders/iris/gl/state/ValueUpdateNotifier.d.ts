import type { Runnable } from '../../../../../java/lang/Runnable.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface ValueUpdateNotifier extends Object{
    setListener(arg0: () => void): void;
}
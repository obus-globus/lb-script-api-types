import type { Runnable } from '../../../../java/lang/Runnable.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class ObjectCleaner extends Object {
    static getLiveSetCount(): number;
    static register(paramarg0: Object, paramarg1: () => void): void;
    private constructor()
}
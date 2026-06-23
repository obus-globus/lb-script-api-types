import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { BasicChangeListener } from '../../../../../../net/raphimc/minecraftauth/util/holder/listener/BasicChangeListener.d.ts'
import type { ChangeListener } from '../../../../../../net/raphimc/minecraftauth/util/holder/listener/ChangeListener.d.ts'
export class ChangeListeners extends Object {
    constructor()
    // private changeListeners: (param0: Object | null, param1: Object | null) => void[];
    add(arg0: () => void): void;
    add(arg0: (param0: Object | null, param1: Object | null) => void): void;
    invoke<T extends unknown>(arg0: T, arg1: T): void;
    remove(arg0: () => void): boolean;
    remove(arg0: (param0: Object | null, param1: Object | null) => void): boolean;
}
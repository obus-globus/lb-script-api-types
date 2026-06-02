import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { ChangeListener } from '../../../../../../net/raphimc/minecraftauth/util/holder/listener/ChangeListener.d.ts'
export interface BasicChangeListener extends Object, ChangeListener{
    onChange(): void;
    onChange<T extends Object | number | string | boolean>(arg0: T, arg1: T): void;
}
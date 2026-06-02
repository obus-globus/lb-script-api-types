import type { Object } from '../../../../java/lang/Object.d.ts'
import type { GlobalProperties$Keys } from '../../../../org/spongepowered/asm/launch/GlobalProperties$Keys.d.ts'
export class GlobalProperties extends Object {
    static get(paramarg0: GlobalProperties$Keys): Object | null;
    static get(paramarg0: GlobalProperties$Keys, paramarg1: Object | null): Object | null;
    static getString(paramarg0: GlobalProperties$Keys, paramarg1: string): string;
    static put(paramarg0: GlobalProperties$Keys, paramarg1: Object): void;
    private constructor()
}
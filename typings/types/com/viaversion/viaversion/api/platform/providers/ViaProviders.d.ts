import type { JavaMap } from '../../../../../../JavaMap.d.ts'
import type { Provider } from '../../../../../../com/viaversion/viaversion/api/platform/providers/Provider.d.ts'
import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class ViaProviders extends Object {
    constructor()
    // private lonelyProviders: Class<Provider>[];
    // private providers: JavaMap<Class<Provider>, Provider>;
    get<T extends Provider>(arg0: Class<T>): T;
    register<T extends Provider>(arg0: Class<T>, arg1: T): void;
    require(arg0: Class<Provider>): void;
    use<T extends Provider>(arg0: Class<T>, arg1: T): void;
}
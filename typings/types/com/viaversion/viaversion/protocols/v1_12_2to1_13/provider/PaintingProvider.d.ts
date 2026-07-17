import type { JavaMap } from '../../../../../../JavaMap.d.ts'
import type { Provider } from '../../../../../../com/viaversion/viaversion/api/platform/providers/Provider.d.ts'
import type { Optional } from '../../../../../../java/util/Optional.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class PaintingProvider extends Object implements Provider {
    constructor()
    // private paintings: JavaMap<string, number>;
    // private add(arg0: string): void;
    getIntByIdentifier(arg0: string): Optional<number>;
}
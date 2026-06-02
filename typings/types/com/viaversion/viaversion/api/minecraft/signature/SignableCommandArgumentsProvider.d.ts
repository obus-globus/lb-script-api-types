import type { Provider } from '../../../../../../com/viaversion/viaversion/api/platform/providers/Provider.d.ts'
import type { Pair } from '../../../../../../com/viaversion/viaversion/util/Pair.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export abstract class SignableCommandArgumentsProvider extends Object implements Provider {
    constructor()
    getSignableArguments(arg0: string): Pair<string, string>[];
}
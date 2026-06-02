import type { SignableCommandArgumentsProvider } from '../../../../../../../com/viaversion/viaversion/api/minecraft/signature/SignableCommandArgumentsProvider.d.ts'
import type { Pair } from '../../../../../../../com/viaversion/viaversion/util/Pair.d.ts'
export class ViaFabricPlusCommandArgumentsProvider extends SignableCommandArgumentsProvider {
    constructor()
    getSignableArguments(arg0: string): Pair<string, string>[];
}
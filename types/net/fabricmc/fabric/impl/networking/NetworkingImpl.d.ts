import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Identifier } from '../../../../../net/minecraft/resources/Identifier.d.ts'
import type { Logger } from '../../../../../org/slf4j/Logger.d.ts'
export class NetworkingImpl extends Object {
    static LOGGER: Logger;
    static MOD_ID: string;
    static REGISTER_CHANNEL: Identifier;
    static UNREGISTER_CHANNEL: Identifier;
    static init(): void;
    static isReservedCommonChannel(paramarg0: Identifier): boolean;
    constructor()
}
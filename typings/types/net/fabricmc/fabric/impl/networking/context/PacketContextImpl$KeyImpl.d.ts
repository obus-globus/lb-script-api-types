import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { PacketContext$Key } from '../../../../../../net/fabricmc/fabric/api/networking/v1/context/PacketContext$Key.d.ts'
import type { Identifier } from '../../../../../../net/minecraft/resources/Identifier.d.ts'
export class PacketContextImpl$KeyImpl<T extends unknown> extends Object implements PacketContext$Key<T> {
    constructor(arg0: Identifier)
    // private key: Identifier;
    key(): Identifier;
    toString(): string;
}
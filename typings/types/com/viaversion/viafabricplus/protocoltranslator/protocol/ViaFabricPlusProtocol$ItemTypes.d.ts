import type { Item } from '../../../../../com/viaversion/viaversion/api/minecraft/item/Item.d.ts'
import type { Type } from '../../../../../com/viaversion/viaversion/api/type/Type.d.ts'
import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class ViaFabricPlusProtocol$ItemTypes extends Record {
    private constructor(clientbound: Type<Item>, serverbound: Type<Item>)
    // private clientbound: Type<Item>;
    // private serverbound: Type<Item>;
    clientbound(): Type<Item>;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    serverbound(): Type<Item>;
    toString(): string;
}
import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { ClientItem } from '../../../../../net/minecraft/client/renderer/item/ClientItem.d.ts'
import type { Identifier } from '../../../../../net/minecraft/resources/Identifier.d.ts'
export class ClientItemInfoLoader$PendingLoad extends Record {
    private constructor(id: Identifier, clientItemInfo: ClientItem)
    // private clientItemInfo: ClientItem;
    // private id: Identifier;
    clientItemInfo(): ClientItem;
    equals(o: Object | null): boolean;
    hashCode(): number;
    id(): Identifier;
    toString(): string;
}
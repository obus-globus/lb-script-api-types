import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { ClientItem } from '../../../../../net/minecraft/client/renderer/item/ClientItem.d.ts'
import type { Identifier } from '../../../../../net/minecraft/resources/Identifier.d.ts'
export class ClientItemInfoLoader$LoadedClientInfos extends Record {
    constructor(contents: Map<Identifier, ClientItem>)
    // private contents: Map<Identifier, ClientItem>;
    contents(): Map<Identifier, ClientItem>;
    equals(o: Object | null): boolean;
    hashCode(): number;
    toString(): string;
}
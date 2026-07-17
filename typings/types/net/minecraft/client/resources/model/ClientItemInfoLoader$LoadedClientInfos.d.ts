import type { JavaMap } from '../../../../../JavaMap.d.ts'
import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { ClientItem } from '../../../../../net/minecraft/client/renderer/item/ClientItem.d.ts'
import type { Identifier } from '../../../../../net/minecraft/resources/Identifier.d.ts'
export class ClientItemInfoLoader$LoadedClientInfos extends Record {
    constructor(contents: JavaMap<Identifier, ClientItem>)
    // private contents: JavaMap<Identifier, ClientItem>;
    contents(): JavaMap<Identifier, ClientItem>;
    equals(o: Object | null): boolean;
    hashCode(): number;
    toString(): string;
}
import type { JsonObject } from '../../../../com/google/gson/JsonObject.d.ts'
import type { WorldTemplate$WorldTemplateType } from '../../../../com/mojang/realmsclient/dto/WorldTemplate$WorldTemplateType.d.ts'
import type { Record } from '../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class WorldTemplate extends Record {
    static parse(paramnode: JsonObject): WorldTemplate;
    constructor(id: string, name: string, version: string, author: string, link: string, image: string, trailer: string, recommendedPlayers: string, type: WorldTemplate$WorldTemplateType)
    // private author: string;
    // private id: string;
    // private image: string;
    // private link: string;
    // private name: string;
    // private recommendedPlayers: string;
    // private trailer: string;
    // private type: WorldTemplate$WorldTemplateType;
    // private version: string;
    author(): string;
    equals(o: Object | null): boolean;
    hashCode(): number;
    id(): string;
    image(): string;
    link(): string;
    name(): string;
    recommendedPlayers(): string;
    toString(): string;
    trailer(): string;
    type(): WorldTemplate$WorldTemplateType;
    version(): string;
}
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { MixinServerListAccessor } from '../../../../net/ccbluex/liquidbounce/injection/mixins/minecraft/client/option/MixinServerListAccessor.d.ts'
import type { Minecraft } from '../../../../net/minecraft/client/Minecraft.d.ts'
import type { ServerData } from '../../../../net/minecraft/client/multiplayer/ServerData.d.ts'
export class ServerList extends Object implements MixinServerListAccessor {
    static saveSingleServer(paramdata: ServerData): void;
    constructor(minecraft: Minecraft)
    // private hiddenServerList: ServerData[];
    // private minecraft: Minecraft;
    // private serverList: ServerData[];
    add(server: ServerData, hidden: boolean): void;
    get(index: number): ServerData;
    get(ip: string): ServerData;
    load(): void;
    remove(thing: ServerData): void;
    replace(id: number, data: ServerData): void;
    save(): void;
    size(): number;
    swap(a: number, b: number): void;
    unhide(ip: string): ServerData;
}
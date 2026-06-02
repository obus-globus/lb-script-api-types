import type { BCServerInfo$Player } from '../../../../../de/florianreuth/classic4j/model/betacraft/BCServerInfo$Player.d.ts'
import type { BCServerInfo$Software } from '../../../../../de/florianreuth/classic4j/model/betacraft/BCServerInfo$Software.d.ts'
import type { BCVersionCategory } from '../../../../../de/florianreuth/classic4j/model/betacraft/BCVersionCategory.d.ts'
import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Optional } from '../../../../../java/util/Optional.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class BCServerInfo extends Record {
    // private _icon: string;
    // private description: string;
    // private gameVersion: string;
    // private isPublic: boolean;
    // private lastPingTime: number;
    // private name: string;
    // private onlineMode: boolean;
    // private playerCount: number;
    // private playerLimit: number;
    // private players: BCServerInfo$Player[];
    // private protocol: string;
    // private socket: string;
    // private software: BCServerInfo$Software;
    // private v1Version: string;
    // private versionCategory: BCVersionCategory;
    _icon(): string;
    description(): string;
    equals(arg0: Object | null): boolean;
    gameVersion(): string;
    hashCode(): number;
    icon(): Optional<number[]>;
    isPublic(): boolean;
    lastPingTime(): number;
    name(): string;
    onlineMode(): boolean;
    playerCount(): number;
    playerLimit(): number;
    players(): BCServerInfo$Player[];
    protocol(): string;
    socket(): string;
    software(): BCServerInfo$Software;
    toString(): string;
    v1Version(): string;
    versionCategory(): BCVersionCategory;
}
import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { AutoSettingsStatusType } from '../../../../../net/ccbluex/liquidbounce/api/types/enums/AutoSettingsStatusType.d.ts'
import type { AutoSettingsType } from '../../../../../net/ccbluex/liquidbounce/api/types/enums/AutoSettingsType.d.ts'
import type { Component } from '../../../../../net/minecraft/network/chat/Component.d.ts'
export class AutoConfigMetadata extends Record {
    constructor(name: string, author: string | null, date: string | null, time: string | null, clientVersion: string | null, clientCommit: string | null, protocolName: string | null, protocolVersion: number | null, serverAddress: string | null, type: AutoSettingsType | null, status: AutoSettingsStatusType | null, chat: string[] | null)
    // private author: string | null;
    /*not mapped: */ author(): string | null;
    // private chat: string[] | null;
    /*not mapped: */ chat(): string[] | null;
    // private clientCommit: string | null;
    /*not mapped: */ clientCommit(): string | null;
    // private clientVersion: string | null;
    /*not mapped: */ clientVersion(): string | null;
    // private date: string | null;
    /*not mapped: */ date(): string | null;
    // private name: string;
    /*not mapped: */ name(): string;
    // private protocolName: string | null;
    /*not mapped: */ protocolName(): string | null;
    // private protocolVersion: number | null;
    /*not mapped: */ protocolVersion(): number | null;
    // private serverAddress: string | null;
    /*not mapped: */ serverAddress(): string | null;
    // private status: AutoSettingsStatusType | null;
    /*not mapped: */ status(): AutoSettingsStatusType | null;
    // private time: string | null;
    /*not mapped: */ time(): string | null;
    // private type: AutoSettingsType | null;
    /*not mapped: */ type(): AutoSettingsType | null;
    asText(): Component;
    // private asTexts(): Component[];
    component1(): string;
    component10(): AutoSettingsType | null;
    component11(): AutoSettingsStatusType | null;
    component12(): string[] | null;
    component2(): string | null;
    component3(): string | null;
    component4(): string | null;
    component5(): string | null;
    component6(): string | null;
    component7(): string | null;
    component8(): number | null;
    component9(): string | null;
    copy(name: string, author: string | null, date: string | null, time: string | null, clientVersion: string | null, clientCommit: string | null, protocolName: string | null, protocolVersion: number | null, serverAddress: string | null, type: AutoSettingsType | null, status: AutoSettingsStatusType | null, chat: string[] | null): AutoConfigMetadata;
    equals(other: Object | null): boolean;
    hashCode(): number;
    toString(): string;
}
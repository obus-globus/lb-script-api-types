import type { Record } from '../../../../../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../../../../../java/lang/Object.d.ts'
import type { Component } from '../../../../../../../../../net/minecraft/network/chat/Component.d.ts'
export class ScoreboardData$SidebarEntry extends Record {
    constructor(name: Component, score: Component)
    // private name: Component;
    /*not mapped: */ name(): Component;
    // private score: Component;
    /*not mapped: */ score(): Component;
    component1(): Component;
    component2(): Component;
    copy(name: Component, score: Component): ScoreboardData$SidebarEntry;
    equals(other: Object | null): boolean;
    hashCode(): number;
    toString(): string;
}
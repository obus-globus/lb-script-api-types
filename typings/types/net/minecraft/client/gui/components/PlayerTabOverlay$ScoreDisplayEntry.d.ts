import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Component } from '../../../../../net/minecraft/network/chat/Component.d.ts'
export class PlayerTabOverlay$ScoreDisplayEntry extends Record {
    private constructor(name: Component, score: number, formattedScore: Component, scoreWidth: number)
    // private formattedScore: Component;
    // private name: Component;
    // private score: number;
    // private scoreWidth: number;
    equals(o: Object | null): boolean;
    formattedScore(): Component;
    hashCode(): number;
    name(): Component;
    score(): number;
    scoreWidth(): number;
    toString(): string;
}
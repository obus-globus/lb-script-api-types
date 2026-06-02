import type { Object } from '../../../../../../../../../java/lang/Object.d.ts'
export class NbsNoteBlock extends Object {
    constructor(tick: number, layer: number, instrument: number, key: number, velocity: number, panning: number, pitch: number)
    readonly instrument: number;
    readonly key: number;
    readonly layer: number;
    readonly panning: number;
    readonly pitch: number;
    readonly tick: number;
    readonly velocity: number;
    component1(): number;
    component2(): number;
    component3(): number;
    component4(): number;
    component5(): number;
    component6(): number;
    component7(): number;
    copy(tick: number, layer: number, instrument: number, key: number, velocity: number, panning: number, pitch: number): NbsNoteBlock;
    equals(other: Object | null): boolean;
    hashCode(): number;
    toString(): string;
}
import type { Object } from '../java/lang/Object.d.ts'
import type { Segment$Companion } from '../okio/Segment$Companion.d.ts'
export class Segment extends Object {
    static Companion: Segment$Companion;
    static SHARE_MINIMUM: number;
    static SIZE: number;
    constructor()
    constructor(data: number[], pos: number, limit: number, shared: boolean, owner: boolean)
    data: number[];
    limit: number;
    next: Segment | null;
    owner: boolean;
    pos: number;
    prev: Segment | null;
    shared: boolean;
    compact(): void;
    pop(): Segment | null;
    push(segment: Segment): Segment;
    sharedCopy(): Segment;
    split(byteCount: number): Segment;
    unsharedCopy(): Segment;
    writeTo(sink: Segment, byteCount: number): void;
}
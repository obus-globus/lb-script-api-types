import type { Record } from '../../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Rect$Companion } from '../../../../../../net/ccbluex/liquidbounce/render/engine/type/Rect$Companion.d.ts'
import type { Vector2f } from '../../../../../../org/joml/Vector2f.d.ts'
export class Rect extends Record {
    static Companion: Rect$Companion;
    static of(cx: number, cy: number, w: number, h: number): Rect;
    constructor(x1: number, y1: number, x2: number, y2: number)
    /*not mapped: */ center(): Vector2f;
    /*not mapped: */ cx(): number;
    /*not mapped: */ cy(): number;
    /*not mapped: */ h(): number;
    /*not mapped: */ w(): number;
    // private x1: number;
    /*not mapped: */ x1(): number;
    // private x2: number;
    /*not mapped: */ x2(): number;
    // private y1: number;
    /*not mapped: */ y1(): number;
    // private y2: number;
    /*not mapped: */ y2(): number;
    component1(): number;
    component2(): number;
    component3(): number;
    component4(): number;
    contains(px: number, py: number): boolean;
    copy(x1: number, y1: number, x2: number, y2: number): Rect;
    equals(other: Object | null): boolean;
    hashCode(): number;
    intersects(other: Rect): boolean;
    toString(): string;
}
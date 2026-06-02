import type { Rectangle2D } from '../../../../../../java/awt/geom/Rectangle2D.d.ts'
import type { Record } from '../../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { BoundingBox2f$Companion } from '../../../../../../net/ccbluex/liquidbounce/render/engine/type/BoundingBox2f$Companion.d.ts'
import type { Vec2 } from '../../../../../../net/minecraft/world/phys/Vec2.d.ts'
export class BoundingBox2f extends Record {
    static Companion: BoundingBox2f$Companion;
    static EMPTY: BoundingBox2f;
    constructor(rect: Rectangle2D)
    constructor(xMin: number, yMin: number, xMax: number, yMax: number)
    /*not mapped: */ centerVec(): Vec2;
    /*not mapped: */ height(): number;
    /*not mapped: */ width(): number;
    /*not mapped: */ xCenter(): number;
    // private xMax: number;
    /*not mapped: */ xMax(): number;
    // private xMin: number;
    /*not mapped: */ xMin(): number;
    /*not mapped: */ yCenter(): number;
    // private yMax: number;
    /*not mapped: */ yMax(): number;
    // private yMin: number;
    /*not mapped: */ yMin(): number;
    component1(): number;
    component2(): number;
    component3(): number;
    component4(): number;
    contains(x: number, y: number): boolean;
    copy(xMin: number, yMin: number, xMax: number, yMax: number): BoundingBox2f;
    equals(other: Object | null): boolean;
    hashCode(): number;
    intersects(other: BoundingBox2f): boolean;
    offset(xOffset: number, yOffset: number): BoundingBox2f;
    toString(): string;
}
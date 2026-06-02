import type { Object } from '../../../../java/lang/Object.d.ts'
export class Rect2i extends Object {
    constructor(x: number, y: number, width: number, height: number)
    readonly height: number;
    readonly width: number;
    // private xPos: number;
    // private yPos: number;
    contains(x: number, y: number): boolean;
    getHeight(): number;
    getWidth(): number;
    getX(): number;
    getY(): number;
    intersect(other: Rect2i): Rect2i;
    setHeight(height: number): void;
    setPosition(x: number, y: number): void;
    setWidth(width: number): void;
    setX(x: number): void;
    setY(y: number): void;
}
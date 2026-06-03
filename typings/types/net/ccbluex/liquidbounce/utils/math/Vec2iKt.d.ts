import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Vector2ic } from '../../../../../org/joml/Vector2ic.d.ts'
export class Vec2iKt extends Object {
    static dotProduct(vector2ic: Vector2ic, x: number, y: number): number;
    static dotProduct(vector2ic: Vector2ic, other: Vector2ic): number;
    static similarity(vector2ic: Vector2ic, other: Vector2ic): number;
}
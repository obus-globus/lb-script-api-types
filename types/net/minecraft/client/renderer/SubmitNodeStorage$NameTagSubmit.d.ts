import type { Record } from '../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Component } from '../../../../net/minecraft/network/chat/Component.d.ts'
import type { Matrix4fc } from '../../../../org/joml/Matrix4fc.d.ts'
export class SubmitNodeStorage$NameTagSubmit extends Record {
    // private backgroundColor: number;
    // private color: number;
    // private distanceToCameraSq: number;
    // private lightCoords: number;
    // private pose: Matrix4fc;
    // private text: Component;
    // private x: number;
    // private y: number;
    backgroundColor(): number;
    color(): number;
    distanceToCameraSq(): number;
    equals(o: Object | null): boolean;
    hashCode(): number;
    lightCoords(): number;
    pose(): Matrix4fc;
    text(): Component;
    toString(): string;
    x(): number;
    y(): number;
}
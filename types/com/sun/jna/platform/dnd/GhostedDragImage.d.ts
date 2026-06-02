import type { Component } from '../../../../../java/awt/Component.d.ts'
import type { Point } from '../../../../../java/awt/Point.d.ts'
import type { Window } from '../../../../../java/awt/Window.d.ts'
import type { Icon } from '../../../../../javax/swing/Icon.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class GhostedDragImage extends Object {
    constructor(arg0: Component, arg1: Icon, arg2: Point, arg3: Point)
    // private dragImage: Window;
    // private origin: Point;
    dispose(): void;
    move(arg0: Point): void;
    returnToOrigin(): void;
    setAlpha(arg0: number): void;
}
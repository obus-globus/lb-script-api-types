import type { Component } from '../../../java/awt/Component.d.ts'
import type { Point } from '../../../java/awt/Point.d.ts'
import type { Rectangle } from '../../../java/awt/Rectangle.d.ts'
import type { Autoscroll } from '../../../java/awt/dnd/Autoscroll.d.ts'
import type { ActionEvent } from '../../../java/awt/event/ActionEvent.d.ts'
import type { ActionListener } from '../../../java/awt/event/ActionListener.d.ts'
import type { Timer } from '../../../javax/swing/Timer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class DropTarget$DropTargetAutoScroller extends Object implements ActionListener {
    constructor(arg0: Component, arg1: Point)
    // private autoScroll: Autoscroll;
    // private component: Component;
    // private hysteresis: number;
    // private inner: Rectangle;
    // private locn: Point;
    // private outer: Rectangle;
    // private prev: Point;
    // private timer: Timer;
    actionPerformed(arg0: ActionEvent): void;
    stop(): void;
    updateLocation(arg0: Point): void;
    // private updateRegion(): void;
}
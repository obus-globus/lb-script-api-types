import type { Rectangle } from '../../../java/awt/Rectangle.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export interface RobotPeer extends Object{
    getRGBPixel(arg0: number, arg1: number): number;
    getRGBPixels(arg0: Rectangle): number[];
    keyPress(arg0: number): void;
    keyRelease(arg0: number): void;
    mouseMove(arg0: number, arg1: number): void;
    mousePress(arg0: number): void;
    mouseRelease(arg0: number): void;
    mouseWheel(arg0: number): void;
    useAbsoluteCoordinates(): boolean;
}
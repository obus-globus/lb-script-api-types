import type { GraphicsDevice } from '../../java/awt/GraphicsDevice.d.ts'
import type { Point } from '../../java/awt/Point.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
export class PointerInfo extends Object {
    constructor(arg0: GraphicsDevice, arg1: Point)
    readonly device: GraphicsDevice;
    readonly location: Point;
    getDevice(): GraphicsDevice;
    getLocation(): Point;
}
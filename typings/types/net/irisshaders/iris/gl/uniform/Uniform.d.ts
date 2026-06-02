import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { ValueUpdateNotifier } from '../../../../../net/irisshaders/iris/gl/state/ValueUpdateNotifier.d.ts'
export abstract class Uniform extends Object {
    constructor(arg0: number)
    constructor(arg0: number, arg1: ValueUpdateNotifier)
    readonly location: number;
    readonly notifier: ValueUpdateNotifier;
    getLocation(): number;
    getNotifier(): ValueUpdateNotifier;
    update(): void;
}
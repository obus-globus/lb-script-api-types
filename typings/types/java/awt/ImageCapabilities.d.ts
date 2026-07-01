import type { Object } from '../../java/lang/Object.d.ts'
import type { Cloneable } from '../../java/lang/Cloneable.d.ts'
export class ImageCapabilities extends Object implements Cloneable {
    constructor(arg0: boolean)
    readonly accelerated: boolean;
    clone(): Object;
    isAccelerated(): boolean;
    isTrueVolatile(): boolean;
}
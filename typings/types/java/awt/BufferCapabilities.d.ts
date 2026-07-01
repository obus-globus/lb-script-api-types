import type { BufferCapabilities$FlipContents } from '../../java/awt/BufferCapabilities$FlipContents.d.ts'
import type { ImageCapabilities } from '../../java/awt/ImageCapabilities.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
import type { Cloneable } from '../../java/lang/Cloneable.d.ts'
export class BufferCapabilities extends Object implements Cloneable {
    constructor(arg0: ImageCapabilities, arg1: ImageCapabilities, arg2: BufferCapabilities$FlipContents)
    // private backCaps: ImageCapabilities;
    readonly flipContents: BufferCapabilities$FlipContents;
    // private frontCaps: ImageCapabilities;
    clone(): Object;
    getBackBufferCapabilities(): ImageCapabilities;
    getFlipContents(): BufferCapabilities$FlipContents;
    getFrontBufferCapabilities(): ImageCapabilities;
    isFullScreenRequired(): boolean;
    isMultiBufferAvailable(): boolean;
    isPageFlipping(): boolean;
}
import type { NativeImage } from '../../../../../../../com/mojang/blaze3d/platform/NativeImage.d.ts'
import type { AtomicInteger } from '../../../../../../../java/util/concurrent/atomic/AtomicInteger.d.ts'
import type { AtomicReference } from '../../../../../../../java/util/concurrent/atomic/AtomicReference.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Identifier } from '../../../../../../../net/minecraft/resources/Identifier.d.ts'
import type { Resource } from '../../../../../../../net/minecraft/server/packs/resources/Resource.d.ts'
export class LazyLoadedImage extends Object {
    constructor(id: Identifier, resource: Resource, count: number)
    // private id: Identifier;
    // private image: AtomicReference<NativeImage>;
    // private referenceCount: AtomicInteger;
    // private resource: Resource;
    get(): NativeImage;
    release(): void;
}
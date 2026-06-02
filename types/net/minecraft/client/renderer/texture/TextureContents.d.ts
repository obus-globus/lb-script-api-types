import type { NativeImage } from '../../../../../com/mojang/blaze3d/platform/NativeImage.d.ts'
import type { Closeable } from '../../../../../java/io/Closeable.d.ts'
import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { TextureMetadataSection } from '../../../../../net/minecraft/client/resources/metadata/texture/TextureMetadataSection.d.ts'
import type { Identifier } from '../../../../../net/minecraft/resources/Identifier.d.ts'
import type { ResourceManager } from '../../../../../net/minecraft/server/packs/resources/ResourceManager.d.ts'
export class TextureContents extends Record implements Closeable {
    static createMissing(): TextureContents;
    static load(paramresourceManager: ResourceManager, paramlocation: Identifier): TextureContents;
    constructor(image: NativeImage, metadata: TextureMetadataSection)
    // private image: NativeImage;
    // private metadata: TextureMetadataSection;
    blur(): boolean;
    clamp(): boolean;
    close(): void;
    equals(o: Object | null): boolean;
    hashCode(): number;
    image(): NativeImage;
    metadata(): TextureMetadataSection;
    toString(): string;
}
import type { NativeImage } from '../../../../../com/mojang/blaze3d/platform/NativeImage.d.ts'
import type { AutoCloseable } from '../../../../../java/lang/AutoCloseable.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { DynamicTexture } from '../../../../../net/minecraft/client/renderer/texture/DynamicTexture.d.ts'
import type { TextureManager } from '../../../../../net/minecraft/client/renderer/texture/TextureManager.d.ts'
import type { Identifier } from '../../../../../net/minecraft/resources/Identifier.d.ts'
export class FaviconTexture extends Object implements AutoCloseable {
    static MISSING_LOCATION: Identifier;
    static forServer(paramtextureManager: TextureManager, paramaddress: string): FaviconTexture;
    static forWorld(paramtextureManager: TextureManager, paramlevelId: string): FaviconTexture;
    private constructor(textureManager: TextureManager, textureLocation: Identifier)
    readonly closed: boolean;
    // private texture: DynamicTexture;
    // private textureLocation: Identifier;
    // private textureManager: TextureManager;
    // private checkOpen(): void;
    clear(): void;
    close(): void;
    isClosed(): boolean;
    textureLocation(): Identifier;
    upload(image: NativeImage): void;
}
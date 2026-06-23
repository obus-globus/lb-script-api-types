import type { Path } from '../../../../../java/nio/file/Path.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { PBRTextureHolder } from '../../../../../net/irisshaders/iris/pbr/texture/PBRTextureHolder.d.ts'
import type { PBRTextureManager$PBRTextureConsumerImpl } from '../../../../../net/irisshaders/iris/pbr/texture/PBRTextureManager$PBRTextureConsumerImpl.d.ts'
import type { NativeImageBackedSingleColorTexture } from '../../../../../net/irisshaders/iris/targets/backed/NativeImageBackedSingleColorTexture.d.ts'
export class PBRTextureManager extends Object {
    static INSTANCE: PBRTextureManager;
    static notifyPBRTexturesChanged(): void;
    private constructor()
    // private consumer: PBRTextureManager$PBRTextureConsumerImpl;
    // private defaultHolder: PBRTextureHolder;
    // private defaultNormalTexture: NativeImageBackedSingleColorTexture;
    // private defaultSpecularTexture: NativeImageBackedSingleColorTexture;
    // private holders: { [key: string]: any };
    // private toLoadNextFrame: (Object | null)[];
    clear(): void;
    close(): void;
    // private closeHolder(arg0: PBRTextureHolder): void;
    // private dumpHolder(arg0: PBRTextureHolder, arg1: Path[]): void;
    dumpTextures(arg0: Path[]): void;
    getHolder(arg0: number): PBRTextureHolder;
    getOrLoadHolder(arg0: number): PBRTextureHolder;
    init(): void;
    // private loadHolder(arg0: number): PBRTextureHolder;
    onDeleteTexture(arg0: number): void;
    onNewFrame(): void;
}
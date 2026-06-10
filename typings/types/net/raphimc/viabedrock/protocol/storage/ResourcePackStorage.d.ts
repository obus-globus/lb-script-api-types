import type { StorableObject } from '../../../../../com/viaversion/viaversion/api/connection/StorableObject.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { ResourcePack } from '../../../../../net/raphimc/viabedrock/api/resourcepack/ResourcePack.d.ts'
import type { AttachableDefinitions } from '../../../../../net/raphimc/viabedrock/api/resourcepack/definition/AttachableDefinitions.d.ts'
import type { BiomeDefinitions } from '../../../../../net/raphimc/viabedrock/api/resourcepack/definition/BiomeDefinitions.d.ts'
import type { BlockDefinitions } from '../../../../../net/raphimc/viabedrock/api/resourcepack/definition/BlockDefinitions.d.ts'
import type { EntityDefinitions } from '../../../../../net/raphimc/viabedrock/api/resourcepack/definition/EntityDefinitions.d.ts'
import type { FogDefinitions } from '../../../../../net/raphimc/viabedrock/api/resourcepack/definition/FogDefinitions.d.ts'
import type { ItemDefinitions } from '../../../../../net/raphimc/viabedrock/api/resourcepack/definition/ItemDefinitions.d.ts'
import type { ModelDefinitions } from '../../../../../net/raphimc/viabedrock/api/resourcepack/definition/ModelDefinitions.d.ts'
import type { ParticleDefinitions } from '../../../../../net/raphimc/viabedrock/api/resourcepack/definition/ParticleDefinitions.d.ts'
import type { RenderControllerDefinitions } from '../../../../../net/raphimc/viabedrock/api/resourcepack/definition/RenderControllerDefinitions.d.ts'
import type { SoundDefinitions } from '../../../../../net/raphimc/viabedrock/api/resourcepack/definition/SoundDefinitions.d.ts'
import type { TextDefinitions } from '../../../../../net/raphimc/viabedrock/api/resourcepack/definition/TextDefinitions.d.ts'
import type { TextureDefinitions } from '../../../../../net/raphimc/viabedrock/api/resourcepack/definition/TextureDefinitions.d.ts'
export class ResourcePackStorage extends Object implements StorableObject {
    constructor(arg0: ResourcePack[])
    readonly attachables: AttachableDefinitions;
    readonly biomes: BiomeDefinitions;
    readonly blocks: BlockDefinitions;
    readonly converterData: { [key: string]: Object };
    readonly entities: EntityDefinitions;
    readonly fogs: FogDefinitions;
    readonly items: ItemDefinitions;
    readonly loadedOnJavaClient: boolean;
    readonly models: ModelDefinitions;
    readonly packStackBottomToTop: ResourcePack[];
    readonly packStackTopToBottom: ResourcePack[];
    readonly particles: ParticleDefinitions;
    readonly renderControllers: RenderControllerDefinitions;
    readonly sounds: SoundDefinitions;
    readonly texts: TextDefinitions;
    readonly textures: TextureDefinitions;
    getAttachables(): AttachableDefinitions;
    getBiomes(): BiomeDefinitions;
    getBlocks(): BlockDefinitions;
    getConverterData(): { [key: string]: Object };
    getEntities(): EntityDefinitions;
    getFogs(): FogDefinitions;
    getItems(): ItemDefinitions;
    getModels(): ModelDefinitions;
    getPackStackBottomToTop(): ResourcePack[];
    getPackStackTopToBottom(): ResourcePack[];
    getParticles(): ParticleDefinitions;
    getRenderControllers(): RenderControllerDefinitions;
    getSounds(): SoundDefinitions;
    getTexts(): TextDefinitions;
    getTextures(): TextureDefinitions;
    isLoadedOnJavaClient(): boolean;
    onRemove(): void;
    setLoadedOnJavaClient(): void;
}
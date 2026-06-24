import type { BiFunction } from '../../../../../../java/util/function/BiFunction.d.ts'
import type { Stream } from '../../../../../../java/util/stream/Stream.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { TextureSlot } from '../../../../../../net/minecraft/client/data/models/model/TextureSlot.d.ts'
import type { Material } from '../../../../../../net/minecraft/client/resources/model/sprite/Material.d.ts'
import type { Item } from '../../../../../../net/minecraft/world/item/Item.d.ts'
import type { Block } from '../../../../../../net/minecraft/world/level/block/Block.d.ts'
import type { BedPart } from '../../../../../../net/minecraft/world/level/block/state/properties/BedPart.d.ts'
export class TextureMapping extends Object {
    static attachedStem(paramstem: Block, paramupperStem: Block): TextureMapping;
    static bars(paramblock: Block): TextureMapping;
    static bed(paramblock: Block, parampart: BedPart): TextureMapping;
    static campfire(paramcampfire: Block): TextureMapping;
    static candleCake(paramblock: Block, paramlit: boolean): TextureMapping;
    static cauldron(paramcontentTextureLoc: Material): TextureMapping;
    static column(paramside: Material, paramend: Material): TextureMapping;
    static column(paramblock: Block): TextureMapping;
    static columnWithWall(paramblock: Block): TextureMapping;
    static commandBlock(paramblock: Block): TextureMapping;
    static craftingTable(paramtable: Block, parambottomWood: Block): TextureMapping;
    static crop(paramid: Material): TextureMapping;
    static cross(paramcross: Material): TextureMapping;
    static cross(paramblock: Block): TextureMapping;
    static crossEmissive(paramblock: Block): TextureMapping;
    static cube(paramall: Material): TextureMapping;
    static cube(paramblock: Block): TextureMapping;
    static cubeBottomTop(paramblock: Block): TextureMapping;
    static cubeBottomTopWithWall(paramblock: Block): TextureMapping;
    static cubeTop(paramblock: Block): TextureMapping;
    static customParticle(paramblock: Block): TextureMapping;
    static defaultTexture(paramtexture: Material): TextureMapping;
    static defaultTexture(paramblock: Block): TextureMapping;
    static door(paramtop: Material, parambottom: Material): TextureMapping;
    static door(paramblock: Block): TextureMapping;
    static driedGhast(paramsuffix: string): TextureMapping;
    static fan(paramblock: Block): TextureMapping;
    static fence(paramblock: Block): TextureMapping;
    static fire0(paramblock: Block): TextureMapping;
    static fire1(paramblock: Block): TextureMapping;
    static fletchingTable(paramtable: Block, parambottomWood: Block): TextureMapping;
    static flowerbed(paramblock: Block): TextureMapping;
    static getBlockTexture(paramblock: Block): Material;
    static getBlockTexture(paramblock: Block, paramsuffix: string): Material;
    static getItemTexture(paramblock: Item): Material;
    static getItemTexture(paramitem: Item, paramsuffix: string): Material;
    static lantern(paramblock: Block): TextureMapping;
    static layer0(paramid: Material): TextureMapping;
    static layer0(paramitem: Item): TextureMapping;
    static layer0(paramblock: Block): TextureMapping;
    static layered(paramlayer0: Material, paramlayer1: Material): TextureMapping;
    static layered(paramlayer0: Material, paramlayer1: Material, paramlayer2: Material): TextureMapping;
    static logColumn(paramblock: Block): TextureMapping;
    static orientableCube(paramblock: Block): TextureMapping;
    static orientableCubeOnlyTop(paramblock: Block): TextureMapping;
    static orientableCubeSameEnds(paramblock: Block): TextureMapping;
    static pane(parambody: Block, paramedge: Block): TextureMapping;
    static particle(paramid: Material): TextureMapping;
    static particle(paramblock: Block): TextureMapping;
    static particleFromItem(paramitem: Item): TextureMapping;
    static pattern(paramblock: Block): TextureMapping;
    static plant(paramplant: Material): TextureMapping;
    static plant(paramblock: Block): TextureMapping;
    static plantEmissive(paramblock: Block): TextureMapping;
    static pottedAzalea(paramblock: Block): TextureMapping;
    static rail(paramrail: Material): TextureMapping;
    static rail(paramblock: Block): TextureMapping;
    static sculkShrieker(paramcanSummon: boolean): TextureMapping;
    static side(paramblock: Block): TextureMapping;
    static singleSlot(paramslot: TextureSlot, paramid: Material): TextureMapping;
    static snifferEgg(paramsuffix: string): TextureMapping;
    static stem(paramblock: Block): TextureMapping;
    static top(paramblock: Block): TextureMapping;
    static torch(paramid: Material): TextureMapping;
    static torch(paramblock: Block): TextureMapping;
    static trialSpawner(paramblock: Block, paramsideSuffix: string, paramtopSuffix: string): TextureMapping;
    static vault(paramblock: Block, paramfrontSuffix: string, paramsideSuffix: string, paramtopSuffix: string, parambottomSuffix: string): TextureMapping;
    static wool(paramcross: Material): TextureMapping;
    static wool(paramblock: Block): TextureMapping;
    constructor()
    // private forcedSlots: TextureSlot[];
    // private slots: Map<TextureSlot, Material>;
    copyAndUpdate(slot: TextureSlot, material: Material): TextureMapping;
    copyForced(from: TextureSlot, to: TextureSlot): TextureMapping;
    copySlot(from: TextureSlot, to: TextureSlot): TextureMapping;
    forceAllTranslucent(): TextureMapping;
    get(slot: TextureSlot): Material;
    getForced(): Stream<TextureSlot>;
    put(slot: TextureSlot, material: Material): TextureMapping;
    putForced(slot: TextureSlot, material: Material): TextureMapping;
    updateSlots(mapper: (param0: TextureSlot, param1: Material) => Material): TextureMapping;
}
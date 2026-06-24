import type { BufferedImage } from '../../../../../java/awt/image/BufferedImage.d.ts'
import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { SkinData$AnimationData } from '../../../../../net/raphimc/viabedrock/protocol/model/SkinData$AnimationData.d.ts'
import type { SkinData$PersonaPieceData } from '../../../../../net/raphimc/viabedrock/protocol/model/SkinData$PersonaPieceData.d.ts'
import type { SkinData$PersonaPieceTintData } from '../../../../../net/raphimc/viabedrock/protocol/model/SkinData$PersonaPieceTintData.d.ts'
export class SkinData extends Record {
    constructor(skinId: string, playFabId: string, skinResourcePatch: string, skinData: BufferedImage, animations: SkinData$AnimationData[], capeData: BufferedImage, geometryData: string, geometryDataEngineVersion: string, animationData: string, premium: boolean, persona: boolean, capeOnClassic: boolean, primaryUser: boolean, capeId: string, fullSkinId: string, armSize: string, skinColor: string, personaPieces: SkinData$PersonaPieceData[], tintColors: SkinData$PersonaPieceTintData[], overridingPlayerAppearance: boolean)
    // private animationData: string;
    // private animations: SkinData$AnimationData[];
    // private armSize: string;
    // private capeData: BufferedImage;
    // private capeId: string;
    // private capeOnClassic: boolean;
    // private fullSkinId: string;
    // private geometryData: string;
    // private geometryDataEngineVersion: string;
    // private overridingPlayerAppearance: boolean;
    // private persona: boolean;
    // private personaPieces: SkinData$PersonaPieceData[];
    // private playFabId: string;
    // private premium: boolean;
    // private primaryUser: boolean;
    // private skinColor: string;
    // private skinData: BufferedImage;
    // private skinId: string;
    // private skinResourcePatch: string;
    // private tintColors: SkinData$PersonaPieceTintData[];
    animationData(): string;
    animations(): SkinData$AnimationData[];
    armSize(): string;
    capeData(): BufferedImage;
    capeId(): string;
    capeOnClassic(): boolean;
    equals(arg0: Object | null): boolean;
    fullSkinId(): string;
    geometryData(): string;
    geometryDataEngineVersion(): string;
    hashCode(): number;
    overridingPlayerAppearance(): boolean;
    persona(): boolean;
    personaPieces(): SkinData$PersonaPieceData[];
    playFabId(): string;
    premium(): boolean;
    primaryUser(): boolean;
    skinColor(): string;
    skinData(): BufferedImage;
    skinId(): string;
    skinResourcePatch(): string;
    tintColors(): SkinData$PersonaPieceTintData[];
    toString(): string;
}
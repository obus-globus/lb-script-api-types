import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { RandomSource } from '../../../../../../../net/minecraft/util/RandomSource.d.ts'
export abstract class WoodlandMansionPieces$FloorRoomCollection extends Object {
    private constructor()
    get1x1(random: RandomSource): string;
    get1x1Secret(random: RandomSource): string;
    get1x2FrontEntrance(random: RandomSource, isStairsRoom: boolean): string;
    get1x2Secret(random: RandomSource): string;
    get1x2SideEntrance(random: RandomSource, isStairsRoom: boolean): string;
    get2x2(random: RandomSource): string;
    get2x2Secret(random: RandomSource): string;
}